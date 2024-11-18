import { h3 } from 'framer-motion/client'
import React from 'react'
import './body.css'

const intro = (
  <h3 className=' text-2xl mt-[5vh] w-[85vw] ml-[10%]'>Triyuga Little Flowers English School is a premier educational
       institution nestled in the heart of Gaighat, Udayapur, Nepal. We are committed to providing a
        world-class education that nurtures not only academic excellence but also the holistic development
        of our students.</h3>
)
const misson = (
  <h3 className='text-2xl mt-[5vh] w-[85vw] ml-[10%]'>Our mission is to empower young minds and hearts, instilling in them a
  passion for learning and a strong moral compass. We strive to create a nurturing
   environment where students can reach their
  full potential, both intellectually and emotionally.</h3>
)
const philosophy = (
  <h3 className='text-2xl mt-[5vh] w-[85vw] ml-[10%]'>We believe in a holistic approach to education,
   emphasizing the importance of character development, critical thinking, and creativity. Our curriculum 
   is designed to foster a love of learning and equip students with the skills they need to succeed in the 21st century.
  </h3>
)
const goodfactors = (
      <ul>
        <li className='text-2xl mt-[5vh] w-[85vw] ml-[10%]'><b>Strong Academic Foundation</b>:  Our experienced faculty delivers a rigorous academic curriculum that prepares students for higher education and future careers.</li>
        <li className='text-2xl mt-[5vh] w-[85vw] ml-[10%]'><b>Character Education</b>: We prioritize the development of strong moral values, such as honesty, integrity, and compassion.</li>
        <li className='text-2xl mt-[5vh] w-[85vw] ml-[10%]'><b>Extracurricular Activities</b>: A wide range of extracurricular activities, including sports, arts, and clubs, encourage students to explore their interests and talents.</li>
        <li className='text-2xl mt-[5vh] w-[85vw] ml-[10%]'><b>State of the Art Facilities</b>: Our modern classrooms, well-equipped library, and spacious playground provide an ideal learning environment.</li>
        <li className='text-2xl mt-[5vh] w-[85vw] ml-[10%]'><b>Caring and Supportive Staff</b>: Our dedicated staff is committed to providing individual attention and support to each student.</li>
      </ul>
)
const joinus = (
  <h3 className='text-2xl mt-[5vh] w-[85vw] ml-[10%]'>We invite you to be a part of our vibrant school community. Experience the difference of a holistic education that empowers students to become responsible, compassionate, and successful individuals.</h3>
)

function body() {

  return (
    <>
    <img src="/about-us-picture.webp" alt="" className='h-auto' />
    <div className="body">
      <div className="about-us text-6xl text-center">
        {/* <h1 className='underline'>About us</h1> */}
      </div>
      <h2 className='text-5xl text-center mt-[5vh]'>Education For holistic development.</h2>
      {intro}
      <h2 className='text-4xl text-center mt-[4vh] text-bold'>⦾ Our Misson</h2>
      <img draggable="false" className='absolute opacity-5 ml-[60vw] mt-[-30vh]' src="./archery.png" alt="" />
      {misson}
      <h2 className='text-4xl text-center mt-[4vh] text-bold'>Φ Our philosophy</h2>
      <img draggable="false" className='absolute opacity-5 mt-[-30vh]' src="./philosophy.png" alt="" />
      {philosophy}
      <h2 className='text-4xl text-center mt-[4vh] text-bold'>What Sets Us Apart</h2>
      <img draggable="false" className='absolute opacity-5 ml-[40vw] mt-[-20vh]' src="./mountain.png" alt="" />
      {goodfactors}
      <h2 className='text-4xl text-center mt-[4vh] text-bold'>Join the Triyuga Little Flowers Family Now !</h2>
      <img draggable="false" className='absolute opacity-5 ml-[40vw] mt-[-20vh]' src="./star.png" alt="" />
      {joinus}
      <a href="/form" className='text-3xl ml-[45vw] mt-[5vh] bg-yellow-400 rounded-[5px]'>Join Us</a>
    </div>
    </>
  )
}

export default body