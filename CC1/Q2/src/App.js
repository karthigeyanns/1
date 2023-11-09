import React from 'react';
import {useState} from 'react'
import './Components/style.css'
const Stateusingnum=()=>{
    const[data,setData]=useState(false)
    const change=()=>{
        setData(!data)
    }
    return(
        <>
        <div className={data ? 'white':'black'}>
            <div className='new'>
            <h1 >{data ?'Light Mode':'Dark Mode'}</h1>
        <button onClick={change} className='button'>Switch Theme</button>
            </div>
        </div>
        </>
    )
}
export default Stateusingnum;