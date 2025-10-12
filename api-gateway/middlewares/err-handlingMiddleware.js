
errorMiddleware = async (err, req, res, next) => {
    if(err.message === 'jwt expired') {
        const payload = {
            credential: process.env.JWT_CRED,
            roles: 'User'
        }
        const response = await fetch('http://localhost:3000/authZ/refresh_token', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                authorization : payload.credential,
                'Roles': payload.roles
            },
            body: JSON.stringify({
                name: 'sus',
                password: 'sus'
            })
        })
        // console.log(req.url) client must send second-request
        const json = await response.json()
        res.send(json)

    }
    console.log(err.message)
    next()
}

module.exports = errorMiddleware