
export class GroupEntity {
    name: string
    admin: string
    created: Date
    description: string
    department: string
    image: string
    members: string[]
    max_group_members: number
    isBlock: boolean
    memberLimit: number
    messages: GroupMessageEntity[] | GroupPoll[] | Appoinetment[]
}

export class GroupPoll {
    question: string
    options: Rate[]
    type: string
}

class Appoinetment {

}

class Rate {
    options: string
    rate: number
}

export class GroupMessageEntity {
    type: string
    data: string | string[]
    senderId: string
    time: Date
    secret: boolean
    visibleFor: string[]
}