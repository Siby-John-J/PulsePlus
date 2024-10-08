import { io } from "socket.io-client"
import { off } from "../redux/slices/patient/layoutSlice"
const socket = io('http://localhost:3003/signaling')

export class Peer {
    ws
    ch
    role: string
    id: string
    senderId: string
    configuration = {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
    }

    constructor(role: string, id: string, senderId: string) {
        this.role = role
        this.id = id
        this.senderId = senderId
        this.ws = new RTCPeerConnection(this.configuration)
        this.ws.ontrack = e => console.log('lwaltrack');
        this.ch = this.ws.createDataChannel('channel-1')
        this.ch.onopen = e => console.log('opened')

        this.ws.onicecandidate = e => {
            console.log('uesu', this.ws.localDescription)
            
            if(this.ws.localDescription?.type === 'offer') socket.emit('get_offer', {
                offer: JSON.stringify(this.ws.localDescription),
                role: this.role,
                id: this.id,
                senderId: this.senderId
            })
            if(this.ws.localDescription?.type === 'answer') socket.emit('get_answer', {
                offer: JSON.stringify(this.ws.localDescription),
                role: this.role,
                id: this.id,
                senderId: this.senderId
            })
         }

         this.ws.ondatachannel = e => {
            this.ws.channel = e.channel
            this.ws.channel.onmessage = e => console.log('msage....')
            this.ws.channel.onopen = (e) => {
            }
        }         
        
    }

    async createOffer() {
        const offer = await this.ws.createOffer()
        const res = await this.ws.setLocalDescription(offer)
    }

    async setOffer(offer: any) {
        
        await this.ws.setRemoteDescription(offer).then(e => console.log('setted'))
        // this.createAns()
    }

    async setAnswer(answer: any) {
        // const session = new RTCSessionDescription(JSON.parse(answer))
        console.log(answer);
        
        await this.ws.setRemoteDescription(answer)
    }

    async createAns() {
        const ans = await this.ws.createAnswer()
        this.ws.setLocalDescription(ans).then(e => console.log('created'))
    }

    async getAnswer(ans: any) {
        await this.ws.setRemoteDescription(JSON.parse(ans))
        this.createAns()
    }
}
