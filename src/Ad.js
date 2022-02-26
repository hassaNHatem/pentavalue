import React , {useState} from 'react'
import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from 'react-redux';
import { add, selectscreens  , update , del  } from './DashboardSlice';
export  const Ad = ({ad}) => {
    const [img,setimage] = useState('')
    const [vid , setVid] = useState('')
    const dispatch = useDispatch()

    const onsubmit = ()=>{
        if(img===''&& vid===''){
            alert('you must enter a url')
        }else if(img!==''&& vid!==''){
            alert('you can only enter one url')
        }else if(img===''&& vid!==''){
            let obj={
                id:ad.id,
                image:'',
                video:vid
            }
            dispatch(update({id:ad.id , newobj:obj}))
        }else{
            let obj={
                id:ad.id,
                image:img,
                video:''
            }
            dispatch(update({id:ad.id , newobj:obj}))
        }
    }
  return (
    <div className='ad-container'>
        <div className='midea-conatiner'>
       {ad.video===''?<img width={'100%'} height='100%' src={ad.image}></img>:<ReactPlayer width={'100%'} height='100%' url={ad.video} controls={true}></ReactPlayer>} 
       </div>
       <div className='btn-container' style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
       <div className='edit-container' style={{display:'flex'}}>
           <input  onChange={(e)=>setimage(e.target.value)} placeholder='image url'></input>
           <input  onChange={(e)=>setVid(e.target.value)} placeholder='video url'></input>
           <button onClick={()=>onsubmit()}>Edit</button>
           </div>
           <button className='delete' onClick={()=>dispatch(del(ad.id))}>Delete</button>
       </div>
    </div>
  )
}
