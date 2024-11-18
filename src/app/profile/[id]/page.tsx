'use client';
import React, { useEffect, useState } from 'react'
import Header from './header'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


export default function page() {
  
  const router = useRouter();
  const [data, setdata] = useState("none")
  const [user, setuser] = useState("none")
  const [Email, setemail] = useState("none")

const getUserDetails = async () => {
  try {
    const res = await axios.get('/api/users/me')
    console.log(res.data)
    setdata(res.data.data._id)
    setuser(res.data.data.username)
    setemail(res.data.data.email)
  } catch (error: any) {
    toast.error(error.message)
  }
}
const logOut = async () => {
  try {
    await axios.get('/api/users/logout')
    toast.success("Logout Success")
    console.log('logout success')
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
  },3600000); // 1000 milliseconds = 1 second

  // Cleanup function to clear the interval when the component unmounts
  return () => {
    clearInterval(intervalId);
  };
}, []);

  return (
    <div>
      <title>{user} - Profile Page</title>
      <Header />
      <meta charSet="utf-8" />
  <title>Profile page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n    \tbody{\n    margin-top:20px;\n    color: #1a202c;\n    text-align: left;\n    background-color: #e2e8f0;    \n}\n.main-body {\n    padding: 15px;\n}\n.card {\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);\n}\n\n.card {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 0 solid rgba(0,0,0,.125);\n    border-radius: .25rem;\n}\n\n.card-body {\n    flex: 1 1 auto;\n    min-height: 1px;\n    padding: 1rem;\n}\n\n.gutters-sm {\n    margin-right: -8px;\n    margin-left: -8px;\n}\n\n.gutters-sm>.col, .gutters-sm>[class*=col-] {\n    padding-right: 8px;\n    padding-left: 8px;\n}\n.mb-3, .my-3 {\n    margin-bottom: 1rem!important;\n}\n\n.bg-gray-300 {\n    background-color: #e2e8f0;\n}\n.h-100 {\n    height: 100%!important;\n}\n.shadow-none {\n    box-shadow: none!important;\n}\n\n    "
    }}
  />
  <div className="container">
    <div className="main-body">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a>User</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            User Profile
          </li>
        </ol>
      </nav>
      {/* /Breadcrumb */}
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  className="rounded-circle"
                  width={150}
                />
                <div className="mt-3">
                  <h4>{user}</h4>
                  <p className="text-secondary mb-1">Student</p>
                  <p className="text-muted font-size-sm">
                    Bokse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">{user}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
    {Email}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Mobile</h6>
                </div>
                <div className="col-sm-9 text-secondary">Not Available Now</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                 Bokse
                </div>
              </div>
              <hr />
              <div className="row">
                {/* <div className="col-sm-12">
                  <a
                    className="btn btn-info "
                    target="__blank"
                    href="/profile/{str}/edit"
                  >
                    Edit
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  )
}
