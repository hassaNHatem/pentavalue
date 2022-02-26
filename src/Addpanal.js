import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add, selectscreens } from './DashboardSlice';
export const Addpanal = () => {
    const dispatch = useDispatch()
    const allads = useSelector(selectscreens)
    const [img,setimage] = useState('')
    const [vid , setVid] = useState('')
    console.log(allads)
    const onsubmit = ()=>{
        if(img===''&& vid===''){
            alert('you must enter a url')
        }else if(img!==''&& vid!==''){
            alert('you can only enter one url')
        }else if(img===''&& vid!==''){
            let obj={
                id:allads.length,
                image:'',
                video:vid
            }
            dispatch(add(obj))
        }else{
            let obj={
                id:allads.length,
                image:img,
                video:''
            }
            dispatch(add(obj))
        }
    }
  return (
    <div className='input-contaienr'>
      
        <input type='text' onChange={(e)=>setimage(e.target.value)} placeholder='image url'/>
        <input type='text' onChange={(e)=>setVid(e.target.value)} placeholder='video url'/>
        <button type='submit' onClick={()=>onsubmit()}>Add</button>
        
    </div>
  )
}
