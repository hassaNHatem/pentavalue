import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getdata = createAsyncThunk(
    'data/getdata',async ()=>{
        return fetch(`https://signal.creatbots.com`,{mode:'no-cors'}).then(res=>{
            res.json()
        })
    })

const dataSlice = createSlice({
    name:'data',
    initialState:{
        list:[],
        status:null
    },
    extraReducers:{
        [getdata.pending]:(state , action)=>{
            state.status = 'loading'
        },
        [getdata.fulfilled]:(state , {payload})=>{
            // state.list = payload.map((el,index)=>({
            //     id:index,
            //     image:el.image,
            //     video:el.video
            // }))
            state.list = payload
            state.status='success'
        },
        [getdata.rejected]:(state , action)=>{
            state.status='failed'
        }
    }
})

export default dataSlice.reducer