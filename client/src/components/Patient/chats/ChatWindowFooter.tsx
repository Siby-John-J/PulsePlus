import '../style.css'

function ChatWindowFooter() {
  return (
    <div className='chat-head bg-white text-black w-[100%] h-[12%] flex items-center'>
      <input placeholder='Type something here' 
        className='bg-gray-200 border-[1px] w-[80%] h-[60%] px-7 outline-none rounded-full ml-[2em]' type="text" />
      <button className='send-btn h-[60%] rounded-full bg-orange-400 w-[3.3em] text-white'>X</button>
    </div>
  )
}

export default ChatWindowFooter