
function ChatWindowBody(props: { data: any }) {
  return (
    <div className='bg-gray-100 w-[100%] h-[76%] overflow-scroll px-8 py-8'>
      {
        props.data.map((item: any) => {
          if(item['p1']) {
            return ( <ChatHolderRight text={item['p1']} /> )
          } else {
            return ( <ChatHolderLeft text={item['p2']} /> )
          }
        })
      }
    </div>
  )
}

function ChatHolderLeft(props: { text: string }) {
  return (
    <div className='text-black flex flex-col items-start'>
      <div className='font-semibold bg-white w-fit px-5 shadow-md py-5 rounded-full'>
        {props.text}
      </div>
      <h1 className='text-gray-400 ml-[2.4em] font-normal'>sus</h1>
    </div>
  )
}

function ChatHolderRight(props: { text: string }) {
  return (
    <div className='text-black flex flex-col items-end'>
      <div className='font-semibold bg-orange-400 text-white w-fit px-5 shadow-md py-5 rounded-full'>
        {props.text}
      </div>
      <h1 className='text-gray-400 mr-[2.4em] font-normal'>sus</h1>
    </div>
  )
}

export default ChatWindowBody