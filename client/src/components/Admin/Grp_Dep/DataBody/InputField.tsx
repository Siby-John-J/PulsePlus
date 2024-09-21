
function InputField() {
  return (
    <div className="w-[96%] h-[3em] rounded-full border-black border-[1px] bg-white flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-[3em] h-[3em] rounded-full bg-black opacity-30"></div>
          <input type="text" className="h-[2.8em] w-[30em] outline-none mx-2" placeholder="Type your message...." />
        </div>
        <div className="w-[3em] h-[3em] rounded-full bg-black opacity-30"></div>
    </div>
  )
}

export default InputField