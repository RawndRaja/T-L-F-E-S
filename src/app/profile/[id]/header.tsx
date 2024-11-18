import React from 'react'


// importing css
import './header.css'
// creating header tag
function header() {
  return (
    <div>
        {/* creating a common link class in all link tabs */}
        <div className="react-active-removal">
      <div className="header-container w-100 h-[6vh] bg-[#cbcb2d] relative">
        <a href='/contact-us' className="link contact-us ml-[10vw] font-bold mt-[1vh] absolute text-white no-underline">Contact Us</a>
        <a href="/calender" className="link calender ml-[18vw] font-bold mt-[1vh] absolute text-white no-underline">Calender</a>
        <a href="https://www.google.com/maps/place/Triyuga+Little+Flowers'+Secondary+English+School/@26.805205,86.6927893,17z/data=!4m6!3m5!1s0x39eec2534bd7f6b9:0xc63fdcd686e2a989!8m2!3d26.8052069!4d86.6953578!16s%2Fg%2F113j1t94h?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
        className="location link ml-[40vw] font-bold mt-[1vh] absolute text-white no-underline" target='_blank'>Bokse-10,Gaighat,Nepal</a> 
        <a className="phone-no link ml-[52.5vw] font-bold mt-[1vh] absolute text-white no-underline">| +977 9742507309</a>
        <a href="/auth/login" className="login link ml-[80vw] font-bold mt-[1vh] absolute text-white no-underline">Login</a>
        <a href="/form" className="enquiry-form link ml-[85vw] font-bold mt-[1vh] absolute text-white no-underline">Enquiry form</a>
        </div>
      </div>
    </div>
  )
}
// exporting header tag
export default header