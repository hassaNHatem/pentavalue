import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add, selectscreens  , update , del  } from './DashboardSlice';
import { Ad } from './Ad';
export const Screen = () => {
    const dispatch = useDispatch()
    const ads = useSelector(selectscreens)
  return (
    <div className='screens-container'>{ads.map((ad,index)=>{
        return<Ad key={index} ad = {ad}></Ad>
    })}</div>
  )
}
