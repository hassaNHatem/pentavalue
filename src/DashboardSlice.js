import { createSlice } from "@reduxjs/toolkit";

const DashboardSlice = createSlice({
    name:'Dashboard',
    initialState:[],
    reducers:{
        add(state,{payload}){
            state.push(payload)
        },

    }
})
export const selectscreens = (state)=>state.Dashboard

export const {add} = DashboardSlice.actions
export default DashboardSlice.reducer 