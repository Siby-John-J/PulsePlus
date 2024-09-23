import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { pollOff } from '../../../redux/slices/pollSlice'

function CreatePoll() {
  const [question, setQuestion] = useState('')
  const [singleOption, setSingleOption] = useState<any>('')
  const [options, setOptions] = useState<any>([])
  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch()

  const setToList = () => {
    const duplicate = options.includes(singleOption)
    
    if(singleOption !== ' ' && !duplicate) setOptions(prev => [singleOption, ...prev])
  }

  const removeFromList = (item: string) => {
    setOptions(prev => prev.filter(e => item !== e))
  }

  const checkAuthenticate = () => {
    if(question === '') return setErrorMessage(prev => 'Must enter a question')

    if(options.length < 2) return setErrorMessage(prev => 'Must add more than one options')
  }

  return (
    <div className="bg-white absolute top-[20%] px-4 py-2 w-[30em] h-fit rounded-md">
        <h1 className='font-bold text-[1.2em]'>Create Poll</h1>
        {
          errorMessage !== '' && <DisplayError message={errorMessage} />
        }
        <div className='flex flex-col'>
            <h1 className='py-1 mt-2'>Enter your question</h1>
            <input onClick={e => setErrorMessage(prev => '')} onChange={e => setQuestion(e.target.value)} type="text" className='outline-none border-[1px] border-black px-2 py-1' placeholder='type here..' />
        </div>
        <div className='flex flex-row w-[100%] justify-between py-4'>
          <h1 className='py-2'>Create Options</h1>
          <input onClick={e => setErrorMessage(prev => '')} onChange={e => setSingleOption(e.target.value)} type="text" className='outline-none border-[1px] border-black px-2 rounded-md' placeholder='type options...' />
          <button onClick={setToList} className='bg-blue-500 w-fit px-3 py-1 text-white rounded-md'>create one</button>
        </div>
        <div className='w-[100%] flex items-center justify-center'>
          <Options options={options} remover={removeFromList} />
        </div>
        <div className='flex flex-row w-[100%] justify-between py-2 px-7'>
            <button onClick={checkAuthenticate} className='px-3 w-fit py-1 rounded-md text-white bg-green-500'>Create</button>
            <button onClick={e => dispatch(pollOff())} className='px-3 w-fit py-1 rounded-md text-white bg-red-500'>Cancel</button>
        </div>
    </div>
  )
}

export function DisplayError(props: { message: string }) {
  const { message } = props
    
  return (
    <div className='w-[100%] h-fit py-2 text-red-500 font-medium'>
      { message + ' !' }
    </div>
  )
}

function Options(props: { options: string[], remover: any }) {
  const { options, remover } = props 
  if(options.length <= 0) return <h1>none...</h1>

  return (
    <div className='w-[100%] my-2 h-fit py-2'>
      {
        options.map((item, index) => {
          return (
            <div className='text-white mb-2 flex items-center px-3 justify-between rounded-md w-[100%] h-[3em] bg-blue-500'>
              {item}
              <button onClick={e => remover(item)} className='px-3 w-fit py-1 rounded-md text-white bg-red-500'>remove</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default CreatePoll