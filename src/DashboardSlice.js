import { createSlice } from "@reduxjs/toolkit";

const DashboardSlice = createSlice({
    name:'Dashboard',
    initialState:[{id:0,image:"",video:"http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4"},{id:1,image:"https://www.bestmobile.pk/mobile-wallpapers/img_320x480/1528970958_320x480_pexels-photo-1144699.jpeg",video:""},
    {id:2,image:"",video:"http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4"}
    ,{id:3,image:"https://i0.wp.com/i.pinimg.com/originals/65/93/a7/6593a77ba62b2373b10075373f43efc9.jpg",video:""},
    {id:4,image:"",video:"http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4"},{id:5,image:"https://www.bestmobile.pk/mobile-wallpapers/img_320x480/1528970958_320x480_pexels-photo-1144699.jpeg",video:""},{id:6,image:"",video:"http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4"},{id:7,image:"https://i0.wp.com/i.pinimg.com/originals/65/93/a7/6593a77ba62b2373b10075373f43efc9.jpg",video:""},
    { id:8,image:"https://www.bestmobile.pk/mobile-wallpapers/img_320x480/1528970958_320x480_pexels-photo-1144699.jpeg",video:""},
    {id:9,image:"https://images.unsplash.com/photo-1609607847926-da4702f01fef?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&w=1000&q=80",video:""}],
    reducers:{
        add(state,{payload}){
            state.push(payload)
            
        },
        del(state,{payload}){
            return state = state.filter(({id})=>id!== payload)
        },
        update(state,{payload}){
            var obj = state.filter(({id})=>id=== payload.id)
            let edited = obj[0]
            console.log(edited)
            state[state.indexOf(edited)] = payload.newobj
        }

    }
})
export const selectscreens = (state)=>state.Dashboard

export const {add , del ,update} = DashboardSlice.actions
export default DashboardSlice.reducer 