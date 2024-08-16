export function SendOffer(prop: any) {
    const data = {
      offer: prop,
      id: _id,
      name: incoming_name
    }
  
    prop !== null ? socket.emit('send:offer', JSON.stringify(data)) : ''
  }