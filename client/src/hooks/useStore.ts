
export const useStoreSet = (token: string) => {
    const storage = window.sessionStorage
    storage.setItem('accessToken', token)
}

export const useStoreGet = (): string | null => {
    const storage = window.sessionStorage
    return storage.getItem('accessToken')
}