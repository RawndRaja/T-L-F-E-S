import React from 'react'
import Header from '../Home-Page/header/header'
import Body from './body'
import Footer from '../Home-Page/footer/footer'

function page() {
  return (
    <div>
      <title>About Us Page</title>
        <header><Header /></header>
        <Body />
        <footer className='mt-[5vh]'><Footer /></footer>
    </div>
  )
}

export default page