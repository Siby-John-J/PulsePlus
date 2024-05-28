const express = require('express')
const router = express.Router()
const { expressjwt } = require('express-jwt')
const jwksClient = require('jwks-rsa')

router.use(expressjwt(
    {
        secret: jwksClient.expressJwtSecret({
            jwksUri: 'http://localhost:3000/auth/well-known',
            cache: true,
            rateLimit: true
        }),
        algorithms: ['RS256']
    }).unless({path: ['/auth-service/auth/refresh', '/auth-service/auth/create']})
)

module.exports = router