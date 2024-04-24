import React ,{useEffect} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'


const ChatBox = () => {

    const dispatch=useDispatch()
    const chatMessages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{

        const i=setInterval(()=>{
          dispatch(addMessages({
            name:"Pawan Thakuni",
            message:"Hii there !how are you❤️"
          }))

        },2000)

        return ()=>clearInterval(i)
    })
  return (
    <div className=' h-[500px] border border-black bg-slate-200 ml-3'>ChatBox

    {
        chatMessages.map((e,i)=>
            <ChatMessage key={i} name={e.name}
                       message={e.message}
            ></ChatMessage>
        )
    }
    <ChatMessage name="Pawan thakuni" message="Wow nice video😊"/>
    </div>
  )
}

export default ChatBox