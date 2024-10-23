import { useDispatch, useSelector } from "react-redux"
import { addFiles, loadOff, loadOn, removeFiles } from "../../redux/slices/loadMediaSlice"
import { useRef, useState } from "react"
import "./LoadMedia.css"

function LoadMedia() {
  const dispatch = useDispatch()
  const droppableRef = useRef(null)
  const [error, setError] = useState('')
  const mediaFile = useSelector((state: any) => state).loadReducer.file
  const files = Object.keys(mediaFile).map(key => mediaFile[key])

  const handleDropFile = (e) => {
    e.preventDefault()
    droppableRef.current.style.borderColor = 'black'
    setError((prev: string) => '')
    dispatch(addFiles({file: e.dataTransfer.files}))
  }

  const sendFiles = () => {
    if(mediaFile.length <= 0) setError('no files attached!')
  }

  const hover = (e, action: "enter" | "exit"): void => {
    if(action === 'enter' && droppableRef.current) { 
      droppableRef.current.style.borderColor = 'blue'
      droppableRef.current.style.borderWidth = '2px'
    } else {
      droppableRef.current.style.borderColor = 'black'
    }
  }
  
  return (
    <div className="bg-blue-100 absolute top-[10%] px-4 py-2 w-[30em] h-fit rounded-md">
      <div>
        <div className="flex flex-row justify-between">
          <h1>Upload a file</h1>
          <i className="cursor-pointer" onClick={e => dispatch(loadOff())}>x</i>
        </div>
        <p>Attach the file below.</p>
        <div 
          ref={droppableRef}
          onDrop={handleDropFile}
          onDragEnter={e => hover(e, 'enter')}
          onDragOver={e => e.preventDefault()}
          onDragLeave={e => hover(e, 'exit')}
          draggable = "true"
          className="bg-blue-50 flex flex-col justify-center items-center border-black border-[2px] border-dashed w-[100%] h-[12em] rounded-md overflow-hidden fileLoader">
          <h1>Drag file(s) here to upload.</h1>
          <p>or </p>
          <div>
          <input onChange={e => {
            setError(prev => '')
            dispatch(addFiles({file: e.target.files}))
          }} type="file" className="rounded-md bg-red-300 fileLoader" id="file" hidden multiple />
          <label className="text-blue-500 font-semibold cursor-pointer" htmlFor="file">Select files</label>
          </div>
        </div>
        </div>
      <div className="flex flex-col w-[100%] items-center mt-3 overflow-scroll max-h-[12em] listFiles">
        {
          error && <div className="text-red-500 font-medium">{error}</div>
        }
        {
          files.map(e => {
            const format = e.name.split('.')[e.name.split('.').length - 1]
            return <FormatThumbNail data={e} name={e.name} format={format} />
          })
        }
      </div>
      <div>
        <input className="w-[100%] px-2 border-black border-[1px] py-2 my-2 rounded-md outline-none" type="text" placeholder="type caption" />
      </div>
      <div className="flex flex-row justify-evenly my-2">
        <button className="bg-blue-500 text-white w-[48%] px-5 py-1 rounded-md" onClick={e => {
            sendFiles()
          //  dispatch(loadOff())
        }}>send</button>
        <button className="bg-red-500 text-white w-[48%] px-5 py-1 rounded-md" onClick={e => dispatch(loadOff())}>cancel</button>
      </div>
    </div>
  )
}

function FormatThumbNail(props: { format: string, name: string, data: any }) {
  const { format, name } = props

  const dispatch = useDispatch()

  const remove = (event: MouseEvent<HTMLHeadingElement, MouseEvent>, filename: string): void => {
    dispatch(removeFiles({file: filename}))
  }

  return (
    <div className="flex flex-row justify-between w-[100%] bg-blue-400 items-center my-1 py-[5px] px-1 rounded-md">
      <div
      className="cursor-pointer w-[3em] h-[3em] bg-gray-500 flex items-center justify-center rounded-md text-white">{format}</div>
      <h1 className=" text-white flex items-center overflow-hidden w-[20em] whitespace-nowrap h-[3em]">{name}</h1>
      <h1
        onClick={e => remove(e, name)}
        className="cursor-pointer px-5 py-3">X</h1>
    </div>
  )
}

export default LoadMedia