import React ,{useEffect} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import { generateRandomText,generate } from '../utils/help'


const ChatBox = () => {

    const dispatch=useDispatch()
    const chatMessages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{

        const i=setInterval(()=>{
          dispatch(addMessages({
            name:generate(),
            message:generateRandomText(20)+ "❤️"
          }))

        },500)

        return ()=>clearInterval(i)
    })
  return (
    <div className=' h-[500px] border border-black bg-slate-200 ml-3 overflow-y-scroll flex flex-col-reverse'>ChatBox

    {
        chatMessages.map((e,i)=>
            <ChatMessage key={i} name={e.name}
                       message={e.message}
            ></ChatMessage>
        )
    }
   
    </div>
  )
}

export default ChatBox