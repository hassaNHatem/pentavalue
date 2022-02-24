import React from 'react';
import { useDispatch } from 'react-redux';
import { getdata } from './dataSlice';
const data = () => {
    const dispatch = useDispatch()
    dispatch(getdata())
    return <div></div>;
}


export default data;