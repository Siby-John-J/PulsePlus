const express = require('express')
const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware')
const jwtMiddleware = require('./jwtMiddleware')
const errorMiddleware = require('./middlewares/err-handlingMiddleware')
const cors = require('cors')
const app = express()
// const dotenv = require('dotenv')

app.use(express.json())
app.use(cors({
    origin: '*',
}))
// app.use(jwtMiddleware)

const services = [
    {
        path: '/auth-service',
        target: "http://localhost:3000",
        pathRewrite: {
            "^/auth-service": ""
        },
        changeOrigin: true,
        secure: false,
    },
    {
        path: '/patient-service',
        target: "http://localhost:3001",
        pathRewrite: {
            "^/patient-service": ""
        },
        changeOrigin: true,
        secure: false,
    }
]

services.forEach(data => {
    app.use(data.path, createProxyMiddleware({
        target: data.target,
        pathRewrite: data.pathRewrite,
        changeOrigin: data.changeOrigin,
        secure: data.secure,
        on: {
            proxyReq: fixRequestBody
        }
    }))
})

app.post('/get_token', async (req, res) => {
    const payload = {
        data: req.body,
        credential: req.headers['authorization'],
        roles: req.query['q']
    }

    try {        
        const response = await fetch('http://localhost:3000/authZ/create_token', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                authorization : payload.credential,
                'Roles': payload.roles
            },
            body: JSON.stringify(req.body)
        })
        const json = await response.json()
        res.send(json)
    } catch (error) {
        console.log(error.statusCode);
        res.send(error.message)
    }

})

app.post('/data', (req, res) => {
    if(req.body.username) {
        res.send(JSON.stringify({
            response: true
        }))
    } else {
        res.send(JSON.stringify({
            response: false
        }))
    }

})

app.use(errorMiddleware)
app.listen(2000)