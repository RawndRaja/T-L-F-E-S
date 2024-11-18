'use client'
import React from 'react';
import Header from '@/app/Home-Page/header/header';
import axios from "axios";

export default function page() {
  const [Email, setEmail] = React.useState({
    email: "",

})
const PostEmail = async () => {
 try {
  const response = await axios.post("/api/users/signup", Email);
 } catch (error: any) {
  console.log(error.message)
 }

}
  return (
    <div>
      <title>Admin Verification page</title>
      <Header />
      <h1 className='text-4xl text-center mt-[5vw]'>Admin Verification Page</h1>
      <input type="email" placeholder='Enter Admin Email Id' className='ml-[40vw] border-black border-2 rounded-[5px] text-black pl-[4px] mt-[5vh] w-[20vw] h-[10vh] absolute'
      value={Email.email}
      onChange={(e) => setEmail({...Email, email: e.target.value})} />
      <button onClick={PostEmail} className='mt-[20vh] h-[4vw] w-[12vw]  ml-[43vw] border-black text-white bg-black'>Submit</button>
    </div>
  )
}
