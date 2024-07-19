import React from 'react'

import { useGetuserQuery } from '../redux/authApi'
export default function Profile() {
const {data:user=[],error, isLoading }=useGetuserQuery();

  return (
  
    <div className='bg-black mt-4 w-full text-white p-2'>
      <h4 >Hello,</h4>
      <p>{user?.name}</p>
    </div>
  
      
    
   
    
  )
}
