import { useDispatch, useSelector } from "react-redux"
import { loadOff, loadOn } from "../../redux/slices/loadMediaSlice"
import { useRef, useState } from "react"

function LoadMedia() {
  const dispatch = useDispatch()
  const mediaFile = useSelector((state: any) => state)
  const [currentMedia, setCurrentMedia] = useState({})
  const files = Object.keys(mediaFile.loadReducer.file).map(key => mediaFile.loadReducer.file[key])

  const url = URL.createObjectURL(mediaFile.loadReducer.file['0'])
  
  return (
    <div className="bg-white absolute top-[20%] px-4 py-2 w-[30em] h-fit rounded-md">
      <div className="flex flex-row w-[100%]">
        {
          files.map(e => {
            const format = e.name.split('.')[e.name.split('.').length - 1]

            return <FormatThumbNail data={e} name={format} setMedia={setCurrentMedia} />
          })
        }
      </div>
      <div>
        <h1>Load more</h1>
        <input onChange={e => {
          dispatch(loadOn({file: e.target.files}))
        }} type="file" className="bg-black w-10 h-10 rounded-full overflow-hidden fileLoader" />
      </div>
      <div className=" flex justify-center items-center">
        <ViewMedia data={currentMedia} />
      </div>
      <div>
        <input className="w-[100%] px-2 border-black border-[1px] py-2 my-2 rounded-md outline-none" type="text" placeholder="type caption" />
      </div>
      <div className="flex flex-row justify-evenly">
        <button onClick={e => dispatch(loadOff())}>send</button>
        <button onClick={e => dispatch(loadOff())}>cancel</button>
      </div>
    </div>
  )
}

function ViewMedia(props: { data: any }) {
  let format
  let url

  if(props.data.name) {
    format = props.data.name.split('.')[props.data.name.split('.').length - 1]
    url = URL.createObjectURL(props.data)
  }
  
  if(format && format === 'jpg') {
    return (
      <img className="w-[20rem] px-4" src={url} alt="" />
    )
  }
  
  if(format && format === 'mp3') {
    return (
      <audio controls>
        <source src={url} type="" />
      </audio>
    )
  }

  if(format && format === 'mp4') {
    return (
      <video controls>
        <source src={url} type="" />
      </video>
    )
  }

  return (
    <></>
  )
}

function FormatThumbNail(props: { name: string, setMedia: Function, data: any }) {
  return (
    <div
      onClick={e => props.setMedia(props.data)}
      className="cursor-pointer w-[3em] h-[3em] bg-gray-500 flex items-center justify-center rounded-md text-white">{props.name}</div>
  )
}

export default LoadMedia