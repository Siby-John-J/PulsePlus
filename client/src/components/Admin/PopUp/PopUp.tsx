import './PopUp.css'

function PopUp(props: any) {
  return (
    <div className='z-20 flex items-center justify-center w-[100vw] absolute h-[100vh]'>
        <div className='w-[100%] h-[100%] top-0 left-0 right-0 bottom-0 fixed overlay'></div>
        <props.component.type />
    </div>
  )
}

export default PopUp