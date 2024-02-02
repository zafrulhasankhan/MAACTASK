import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function GetRegion() {
    const [region,setRegion]=useState([])
    useEffect(()=>{
        axios.get('https://staging-api.erpxbd.com/api/v1/region/20/1').then(res=>setRegion(res.data)).catch(err=>{console.log(err)})
    },[])
  return (
    <div className='container'>
            <div className='row'>
             {   region.map((reg)=>{
                    return  reg.name
                })
            }
            </div>
        </div>
  )
}
