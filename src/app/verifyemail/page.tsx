'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
        await axios.post('/api/users/verifyemail', { token });
        setVerified(true);
        setError(false);
        router.push("/verifyemail");
    } catch (error: any) {
        console.error("Verification error:", error.response?.data || error.message); // Log the error
        setError(true);
    }
};

useEffect(() => {
  const urlToken = window.location.search.split("=")[1];
  console.log("Retrieved token:", urlToken); // Add this line for debugging
  setToken(urlToken || "");
}, []);


  useEffect(() => {
    setError(false)
      if(token.length > 0) {
          verifyUserEmail();
      }
  }, [token]);
  
  
  return (
    <div>
      <title>Email Verification Page</title>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">

<h1 className="text-4xl">Verify Email</h1>
<h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2>

{verified && (
    <div>
        <h2 className="text-2xl">Email Verified</h2>
        <a href="/auth/login">
            Login
        </a>
    </div>
)}
{error && (
    <div>
        <h2 className="text-2xl bg-red-500 text-black">Error</h2>
        
    </div>
)}
</div>

    </div>
  )
}
