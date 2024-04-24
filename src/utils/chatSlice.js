import { createSlice } from "@reduxjs/toolkit";

const ChatSlice=createSlice({
    name:"chat",
    initialState:
    {messages:[],
    },

    reducers:{
        addMessages:(state,action)=>{
            state.messages.push(action.payload)
        }
    }
})
export const {addMessages}=ChatSlice.actions

export default ChatSlice.reducer