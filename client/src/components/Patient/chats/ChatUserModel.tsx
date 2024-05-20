import { UserTemplateStyle } from '../../../types/hardcoded/styleEnum'
import { UserTemplate } from '../../Admin/Dashboard/DoctorMiniList'

function ChatUserModel() {
  const { ROW } = UserTemplateStyle

  return (
    <div className='bg-white mb-5 w-[90%] text-black h-[8em] rounded-md flex flex-col justify-evenly py-5 chat-model'>
        <div className='flex flex-row justify-between px-3'>
            <UserTemplate details={{name: 'Siby john', details: 'Online', style: 'text-[12px] font-light', mainStyle: ROW}} />
            <h1 className='font-light text-[12px]'>1:00pm</h1>
        </div>
        <div className='flex flex-row justify-between px-3 mt-3'>
            <h1 className='text-[14px]'>last message is dis</h1>
            <p className='text-[14px] text-white shadow-md px-[7px] rounded-full  flex items-center justify-center bg-orange-500'>1</p>
        </div>
    </div>
  )
}

export default ChatUserModel
