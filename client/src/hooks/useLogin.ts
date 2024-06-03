

export const useLogin = async (username: string, password: string) => {
    const response = await fetch('http://localhost:2000/create_token', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })

    const json = await response.json()
    console.log(json)
}

export const useQ = () => {
    // return new Promise((res: any, rej: any) => {
    //     return res({hi: 'world'})
    // })
    const value = fetch('http://localhost:2000/data').then(e => e.json())
    return value
}