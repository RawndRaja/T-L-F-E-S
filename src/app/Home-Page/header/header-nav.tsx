import React from 'react'

// importing profile 
import Profile from './profile/profile'
//  importing drawer
import Drawer from './drawer'
//importing css
import './headernav.css'
// importing links
import Link from 'next/link'

// creating const for links
const links = (
  <>
    <a href="/" className="link-nav no-underline font-bold gap-[10px]">Home</a>
    <a href="/about-us" className="link-nav no-underline font-bold gap-[10px]">About Us</a>
    <a href="/admission" className="link-nav no-underline font-bold gap-[10px]">Admission</a>
    <a href="/news" className="link-nav no-underline font-bold gap-[10px]">News</a>
    <a href="/events" className="link-nav no-underline font-bold gap-[10px]">Events</a>
    <a href="/album/gallery" className="link-nav no-underline font-bold gap-[10px]">Gallery</a>
    <a href="/facility" className="link-nav no-underline font-bold gap-[10px]">Facility</a>
    </>
)

function HeaderNav() {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="nav-1 flex-1">
    <Link href={'/'}><img src="/icon.png" alt="" id='logo' className='rounded h-[10vh] w-[10vh] ml-[3vw] hover:cursor-pointer' /></Link>
    <div className="text-logo ml-[1vw] font-bold font;"><a href="/">| Playgroup to class - 10 </a></div>
  </div>
  <div className="links-header gap-[15px] ml-[-10px] re">
    {links}
  </div>
  <div className="flex-none gap-2 ml-[2vw]">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
            <div className="profile-drawer-holder flex gap-[20px]">
            <div className="profile"><Profile /></div>
            <div className="drawer"><Drawer /></div>
            </div>
        </div>
    </div>  
  </div>
</div>
    </div>
  )
}

export default HeaderNav