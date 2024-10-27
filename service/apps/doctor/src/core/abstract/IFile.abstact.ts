export abstract class IFile {
    abstract createFile(data: any)

    abstract getFile(id: string)
    
    abstract getAllFile(id: string)
    
    abstract removeFile(id: string)
}