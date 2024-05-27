const express = require('express')
const expressJwt = require('express-jwt')
const jwksClient = require('jwks-rsa')
const app = express()

app.use(express.json())
app.use(expressJwt.expressjwt(
    {
        secret: jwksClient.expressJwtSecret({
            jwksUri: 'http://localhost:3000/auth/well-known',
            cache: true,
            rateLimit: true
        }),
        algorithms: ['RS256']
    }
))

app.get('/protect', (req, res) => {
    console.log(req.headers)
    res.send('protected')
})

app.listen(2000)