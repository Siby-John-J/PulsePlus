import { GroupEntity, GroupMessageEntity } from "../entity";

export abstract class IGroup {
    abstract createGroup(payload: GroupEntity)

    abstract getGroup(id: string)
    
    abstract getAllGroup()
    
    abstract banGroup(id: string)
    
    abstract removeGroup(id: string)
}

export abstract class IGroupMessage {
    abstract createMessage(data: GroupMessageEntity)

    abstract getMessage(id: string)
    
    abstract getAllMessage()
    
    abstract banMessage(id: string)
    
    abstract removeMessage(id: string)
}