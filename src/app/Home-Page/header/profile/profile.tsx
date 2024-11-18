// declating client side page
'use client';
import React, { useEffect, useState } from 'react'
// importing all neccesities 
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";

import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


//creating a header nav tag

function Profile() {

  const router = useRouter();
  const [data, setdata] = useState("none")
  const [user, setuser] = useState("none")

const getUserDetails = async () => {
  try {
    const res = await axios.get('/api/users/me')
    setdata(res.data.data._id)
    setuser(res.data.data.username)
  } catch (error: any) {
    
  }
}
const logOut = async () => {
  try {
    await axios.get('/api/users/logout')
    toast.success("Logout Success")
    router.push('/signup')
  } catch (error: any) {
    console.log(error.message)
    toast.error(error.message)
  } 
  
}
useEffect(() => {
  // Fetch data immediately when the component mounts
  getUserDetails();
  
  // Set interval to fetch data every second
  const intervalId = setInterval(() => {
    getUserDetails();
  }, 10000); // 1000 milliseconds = 1 second

  // Cleanup function to clear the interval when the component unmounts
  return () => {
    clearInterval(intervalId);
  };
}, []);

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            }}
            className="transition-transform"
            description={data === "none" ? "@username" : user}
            name={data === "none" ? "Profile" : user}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2" href={`/profile/${data}`}>
              <p className="font-bold">Signed in as</p>
            <p className="font-bold">{user}</p>
          </DropdownItem>
          {/* <DropdownItem key="settings">
            <a href="/settings/optional">Optional Settings</a>
          </DropdownItem>
          <DropdownItem key="team_settings"><a href="/application">Application</a></DropdownItem>
          <DropdownItem key="analytics">
            <a href="/analytics">Analytics</a>
          </DropdownItem>
          <DropdownItem key="system"><a href="/settings/system">System Settings</a></DropdownItem>
          <DropdownItem key="configurations"><a href="/configuration">Configurations</a></DropdownItem>
          <DropdownItem key="help_and_feedback">
          <a href="/help">Help & Feedback</a>  
          </DropdownItem> */}
          {data === "none" ? 
            <DropdownItem key="sign_up" href='/auth/login'>Log In
          </DropdownItem> : 
          <DropdownItem key="logout" color="danger" onClick={logOut}>
              Log Out
            </DropdownItem> }


        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
//exporting the function
export default Profile
