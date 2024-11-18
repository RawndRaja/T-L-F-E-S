"use client";
import React, { useEffect, useState } from 'react'
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Name from './svg/name'
import './page.css'
import Password from './svg/password'






export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push(`/`);
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
      <>   
      <title>Login Page</title>
         <div className="body bg-[#F8F7F5] w-[100vw] h-[100vh] overflow-x-hidden overflow-y-hidden relative">
          <div className="form form-login h-[32vw] w-[30vw] rounded-[8px] border-gray-700 absolute border-2
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          bg-white
          ">
              <div className="fillup-box overflow-hidden">
                  <div className="logo font-bold text-5xl mt-[20px] text-center bg-gradient-to-r from-red-200 to-yellow-300 text-transparent bg-clip-text">
                      <a className='logo-text' href="/">T L F E S</a>
                    </div>
                  <h2 className='join-us text-4xl mt-[3vh] text-center'>Join Us by Signing In</h2>
                 <div className="name">
                  {/* input of email */}
                  <input type="email"
                   id="email"
                   value={user.email}
                   onChange={(e) => setUser({...user, email: e.target.value})}
                  placeholder='Email' className='nm-input text-black text-2xl pl-[10px] bg-transparent border border-gray-700 rounded-[3px] w-[25vw] h-[7vh] ml-[2vw] mt-[5vh]'/>
                  <div className="nm-icon mt-[-2.6vw] ml-[24vw] absolute"><Name /></div>
                  </div>
                  <div className="password">
                  {/* input of password */}
                  <input type="password" 
                              id="password"
                              value={user.password}
                              onChange={(e) => setUser({...user, password: e.target.value})}
                              placeholder="Password"
                               className='pw-input text-black text-2xl pl-[10px] bg-transparent border border-gray-700 rounded-[3px] w-[25vw] h-[7vh] ml-[2vw] mt-[3vh]'/>
                  <div className="pw-icon mt-[-2.6vw] ml-[24vw] absolute"><Password /></div>
                  </div>
                  <h2 className='mt-[10px] relative'><a href="/auth/forget" className='forget text-blue-700 text-1xl ml-8'>Forget Password ?</a></h2>
                  <button 
                   className='login text-center border w-[25vw] ml-[2.5vw] h-[6vh] bg-gradient-to-r from-lime-200 to-amber-300 rounded-[5px] mt-[20px]
                   p-2 border-gray-300 mb-4 focus:outline-none focus:border-gray-600'
                   onClick={onLogin}>{buttonDisabled ? "Wait" : "Login"}</button>
                  {/* <h3 className='dont ml-[9vw] mt-[2vh] text-1xl'>Don't have an account? <a href="/auth/sign-up" className='text-blue-700'>Sign Up</a></h3> */}
          </div>
          </div>
      </div>
      </>

    )

}
