const express = require('express')
const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware')
const jwtMiddleware = require('./middlewares/jwtMiddleware')
const errorMiddleware = require('./middlewares/err-handlingMiddleware')
const fetchRequest = require('./fetchRequest')
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
    },
    {
        path: '/admin-service',
        target: "http://localhost:3002",
        pathRewrite: {
            "^/admin-service": ""
        },
        changeOrigin: true,
        secure: false,
    },
    {
        path: '/communication-service',
        target: "http://localhost:3003",
        pathRewrite: {
            "^/communication-service": ""
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
    
    let token = null
    
    try {
        const response = await fetchRequest('http://localhost:3000/authZ/create_token', payload)
        const resp = await response
        token = resp
        res.send(token)
    } catch (error) { 
        console.log(error);
        res.send({
            error: 'occured'
        })
    }
    
})

app.post('/sign_up', async(req, res) => {
    const auth = '08ac399a9b2ff2d0027fa53f7eb783a19b52'
    
    const payload = {
        data: req.body,
        credential: req.headers['authorization'],
        roles: req.query['q']
    }
    
    if(auth !== payload.credential) {
        res.send(JSON.stringify({
            status: 400,
            message: 'invalid crerdential'
        }))
    } else {
        try {
            const response = await fetchRequest('http://localhost:3000/authH/signup', payload)
            res.send(response)
        } catch (error) {
            res.send(error.message)
        }
    }
})

app.use(errorMiddleware)
app.listen(2000)
