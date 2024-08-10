import { useDispatch } from 'react-redux'
import { changeChatView } from '../../../redux/slices/doctor/textChatSlice'
import { UserTemplateStyle } from '../../../types/hardcoded/styleEnum'
import { UserTemplate } from '../../Admin/Dashboard/DoctorMiniList'

function ChatUserModel(props: { data: any }) {
  const { ROW } = UserTemplateStyle
  const dispatch = useDispatch()

  let message = ''
  
  const len = props.data.data.length
  if(len > 0) {
    message = props.data.data[len - 1]['p2'] ? props.data.data[len - 1]['p2'] : props.data.data[len - 1]['p1']
  }

  return (
    <div 
      onClick={e => {
        dispatch(changeChatView(props.data))
      }}
      className='bg-white mb-5 w-[90%] text-black h-[8em] rounded-md flex flex-col justify-evenly py-5 chat-model'>
        <div className='flex flex-row justify-between px-3'>
            <UserTemplate details={{name: 'Siby john', details: 'Online', style: 'text-[12px] font-light', mainStyle: ROW}} />
            {/* <h1 className='font-light text-[12px]'>1:00pm</h1> */}
        </div>
        <div className='flex flex-row justify-between px-3 mt-3'>
            <h1 className='text-[14px]'>{message}</h1>
            <p className='text-[14px] text-white shadow-md px-[7px] rounded-full  flex items-center justify-center bg-orange-500'>1</p>
        </div>
    </div>
  )
}

export default ChatUserModel
