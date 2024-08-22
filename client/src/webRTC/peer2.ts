import { io } from "socket.io-client"
const socket = io('http://localhost:3003/signaling')

export let peer : any = undefined
export let peer2 : any = undefined

let offer: any = undefined
let id: string
let role: string
let sender: string | undefined = undefined
let c = 0
let n = 0

let localVideoEl: any = {}
let remoteVideoEl: any = {}
let localStream : any;

function getOffer(role: string, sender: string, id: string) {
    offer = peer.localDescription
    
    const data = {
        offer: JSON.stringify(offer),
        role: role,
        id: id,
        senderId: sender
    }
    
    if(offer !== null && offer.type === 'offer') {
        socket.emit('get_offer', data)
    }
}

function sendAns(offer: any, id: string, role: string, sender: string) {
    offer = peer2.localDescription
    console.log(role);
    
    if(offer !== null && offer.type === 'answer') {
        socket.emit('get_answer', {
            offer: JSON.stringify(offer),
            role: role,
            id: id,
            senderId: sender
        })
    }
}

// Peer-1
function createPeer(role: string, sender: string, id: string) {
    role = role
    sender = sender
    id = id 

    const peer = new RTCPeerConnection()

    const channel = peer.createDataChannel('channel')
        
    channel.onopen = (e: any) => console.log('ueue');

    channel.onmessage = (e: any) => console.log('new message')
    peer.onicecandidate = e => getOffer(role, sender, id)
    
    
    return peer
}

// Peer-1
async function createOffer(role: string, sender: string, id: string) {
    role = role
    sender = sender
    id = id
    
    peer = createPeer(role, sender, id)
    
    await getUserMedia('peer1')
    
    const offer = await peer.createOffer()
    
    await peer.setLocalDescription(offer)
    
    peer.ontrack = addTracks

}

async function createAnswer() {
    const ans = await peer2.createAnswer()
    await peer2.setLocalDescription(ans)

}

// peer-2
function createPeer2(offer: any, id: string, role: string, sender: string) {
    const peer = new RTCPeerConnection()
    
    peer.ontrack = addTracks
    
    const channel = peer.createDataChannel('channel')
    
    channel.onopen = (e: any) => console.log('ueue');
    
    peer.ondatachannel = e => {
        peer.channel = e.channel
        peer.channel.onmessage = e => console.log('msage....')
        peer.channel.onopen = (e) => {}
    }

    peer.onicecandidate = e => sendAns(offer, id, role, sender)

    return peer
}

async function recvOffer(offer: any, id: string, role: string, sender: string) {
    role = role
    sender = sender
    id = id
    
    peer2 = createPeer2(offer, id, role, sender)

    await getUserMedia('peer2')

    
    await peer2.setRemoteDescription(JSON.parse(offer))
    
    createAnswer()
    
    return peer2
}

async function setRemote(answer: any) {
    if(!answer) return
    // console.log(answer)
    
    if(c === 0) {
        await peer.setRemoteDescription(new RTCSessionDescription(JSON.parse(answer)))
    }
}

function addTracks(e: any) {
    remoteVideoEl.current = {}
    remoteVideoEl.current.srcObject = e.streams[0]
    
}

async function getUserMedia(ch: string) {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true})

    localVideoEl.current = {}
    localVideoEl.current.srcObject = stream
    localStream = stream

    localStream.getTracks().forEach((track: any) => {
        if(ch === 'peer1') {
            peer.addTrack(track, localStream)
        } else if(ch === 'peer2') {
            console.log(localStream)
            
            peer2.addTrack(track, localStream)
        }
    });

    if(ch === 'cancel') {
        stream.getTracks().forEach((track: any) => {
            track.stop()
        })
    }
}

export async function cleanStream() {
    await getUserMedia('cancel')
}

export async function muteVideo() {
    await getUserMedia('muteVid')
}

export async function muteAudio() {
    await getUserMedia('muteAud')
}

export {
    recvOffer,
    setRemote,
    getUserMedia,
    createOffer,
    localVideoEl,
    localStream,
    remoteVideoEl
}