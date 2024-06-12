
export interface AppoinetmentEnitity {
    title:  string
    content: string 
    status: 'pending' | 'rejected' | 'processing'
    created?: Date
    senderId: string
}