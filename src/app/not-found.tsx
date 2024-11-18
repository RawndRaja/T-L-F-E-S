import React from 'react'
import './not-found.css'
import Header from './Home-Page/header/header'

export default function notfound() {
  return (
    <div>
        <Header />
        <h1 className='text-7xl text-center mt-[20vh] bg-gradient-to-r
from-yellow-500
via-yellow-300
to-red-500 text-transparent bg-clip-text'>There was a problem</h1>
<img src="/ops.png" draggable="false"  className='not-found-page absolute ml-[70vw] h-[20vw] w-[20vw] mt-[-15vw]' alt="" />
<h2 className='text-center text-5xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 text-transparent bg-clip-text'>The page that you were looking is unavilable</h2>
    <h1 className='text-center mt-4'><a href="/" className='rounded-[6px]  text-4xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-yellow-500 via-yellow-300 to-red-500'>Home Page</a></h1>
    </div>
  )
}
