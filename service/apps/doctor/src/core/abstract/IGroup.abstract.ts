import { GroupEntity, GroupMessageEntity, GroupPollEntity } from "../entity";

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
    
    abstract getAllMessage(id: string)
    
    abstract banMessage(id: string)
    
    abstract removeMessage(id: string)
}

export abstract class IGroupPollMessage {
    abstract createPoll(data: GroupPollEntity)

    abstract getPoll(id: string)
    
    abstract getAllPoll(id: string)
    
    // abstract banPoll(id: string)
    
    abstract removePoll(id: string)

    abstract updatePoll(groupId: string, question:string, choice: string)
}