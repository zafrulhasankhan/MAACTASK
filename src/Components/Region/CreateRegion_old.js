import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
export default function CreateRegion() {
    const token = useSelector(state => state.token);
    const [region,setRegion]=useState('')
    const handleSUbmit=(e)=>{
        e.perventDefault();
        const body={
            name:region
        }
        
        axios.post('https://staging-api.erpxbd.com/api/v1/region',body).then(res=>console.log(res.data)).catch(err=>console.log(err))
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-3 m-auto'>
                <h2> CreateRegion</h2>
                <form onSubmit={handleSUbmit}>
                    <input type="text" onChange={(e)=>setRegion(e.target.value)} placeholder='Enter Region'/>
                    <input type='submit' value="submit"/>


                </form>
            </div>
        </div>
       </div>
  )
}
