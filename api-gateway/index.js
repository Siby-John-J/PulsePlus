const express = require('express')
const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware')
const router = require('./jwtMiddleware')
const app = express()

app.use(express.json())
app.use(router)

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

app.get('/auth-service', (req, res) => {
    // console.log(req.headers)
    res.send('protected')
})

app.listen(2000)