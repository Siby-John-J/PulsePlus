
module.exports = fetchRequest = async (url, payload) => {
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            authorization : payload.credential,
            'Roles': payload.roles
        },
        body: JSON.stringify(payload.data)
    })
    // console.log(await response.json());
    return await response.json()
}