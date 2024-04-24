import { createSlice } from "@reduxjs/toolkit";

const ChatSlice=createSlice({
    name:"chat",
    initialState:
    {messages:[],
    },

    reducers:{
        addMessages:(state,action)=>{
            state.messages.splice(10,2);//whenever i am adding new message ,i am also removing old mesaage from top
            state.messages.unshift(action.payload);//unshift will display messages from bottom to top
        }
    }
})
export const {addMessages}=ChatSlice.actions

export default ChatSlice.reducer