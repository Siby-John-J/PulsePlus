const express = require('express')
const jwtMiddleware = express.Router()
const { expressjwt } = require('express-jwt')
const jwksClient = require('jwks-rsa')

jwtMiddleware.use(expressjwt({
        secret: jwksClient.expressJwtSecret({
            jwksUri: 'http://localhost:3000/authZ/well-known',
            cache: true,
            rateLimit: true
        }),
        algorithms: ['RS256']
    }).unless({path: ['/get_token', 'refresh_token', '/data']})
)

module.exports = jwtMiddleware