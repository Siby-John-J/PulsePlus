
errorMiddleware = async (err, req, res, next) => {
    if(err.message === 'jwt expired') {
        const payload = {
            credential: 'djifi383u8fjmxxmvkndslfnei',
            roles: 'User'
        }
        console.log('inside..')
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
                password: 'dicksmemes'
            })
        })

        const json = await response.json()
        console.log(json)

    }
    console.log(err.message)
    next()
}

module.exports = errorMiddleware