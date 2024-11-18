import React from 'react'
import MenuIcon from './menu-icon'

function drawer() {
    const links = (
        <>
          <li><a href="/" className="link-nav no-underline font-bold gap-[10px]">Home</a></li>
          <li><a href="/about-us" className="link-nav no-underline font-bold gap-[10px]">About Us</a></li>
          <li><a href="/admission" className="link-nav no-underline font-bold gap-[10px]">Admission</a></li>
          <li><a href="/news" className="link-nav no-underline font-bold gap-[10px]">News</a></li>
          <li><a href="/events" className="link-nav no-underline font-bold gap-[10px]">Events</a></li>
          <li><a href="/album/gallery" className="link-nav no-underline font-bold gap-[10px]">Gallery</a></li>
          <li><a href="/facility" className="link-nav no-underline font-bold gap-[10px]">Facility</a></li>
          <li><a href="/auth/login" className="link-nav no-underline font-bold gap-[10px]">Login</a></li>
          </>
      )
      
    return (
    <div>
        <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn"><MenuIcon /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-[80vw] p-4 z-50">
      {/* Sidebar content here */}
      {links}
    </ul>
  </div>
</div>
    </div>
  )
}

export default drawer