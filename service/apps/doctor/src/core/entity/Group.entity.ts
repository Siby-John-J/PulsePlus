
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
    messages: GroupMessageEntity[] | GroupPollEntity[] | Appoinetment[]
}

export class GroupPollEntity {
    question: string
    options: Rate[]
    voters: string[]
    type: 'poll'
    senderId: string
    groupId: string
    time: Date
}

class Appoinetment {

}

export class Rate {
    choice: string
    percentage: number
}

export class GroupMessageEntity {
    type: 'multimedia' | 'text'
    data: string | string[]
    senderId: string
    groupId: string
    time: Date
    secret: boolean
    visibleFor: string[]
}