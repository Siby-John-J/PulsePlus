const express = require('express')
const expressJwt = require('express-jwt')
const jwksClient = require('jwks-rsa')
const app = express()

app.use(express.json())
app.use(expressJwt.expressjwt(
    {
        secret: jwksClient.expressJwtSecret({
            jwksUri: 'http://localhost:3001/auth/well-known',
            cache: true,
            rateLimit: true
        }),
        algorithms: ['RS256']
    }
))

app.get('/protect', (req, res) => {
    res.send('protected')
})

app.listen(() => {
    console.log('api-gateway is on')
}, 2000)