
function ContactListTitle(props: { expand: Function }) {
  return (
    <div className="flex flex-col bg-slate-300 h-[6em] justify-evenly">
        <h1 className="text-[1.5em] px-9 font-semibold">Messages</h1>
        <div className=" text-purple-600 flex flex-row pr-1 justify-evenly">
            <h1 className="hover:border-b-purple-600 hover:border-b-[3px] cursor-pointer">Groups</h1>
            <h1 className="hover:border-b-purple-600 hover:border-b-[3px] cursor-pointer">Departments</h1>
        </div>
        <button onClick={e => props.expand((prev: boolean) => !prev)}>C</button>
    </div>
  )
}

export default ContactListTitle