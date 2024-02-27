"use client"
import Image from 'next/image'
import Solutions from './components/Solutions'
import About from './components/About'
import { ContactUs } from './components/ContactUs'
// TODO: optimize for mobile

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-end pt-32'>
        <h1 className='w-[700px] h-64 relative'>
          <Image
            className='object-contain'
            src="/Logo.png"
            fill
            alt="Seek Logo"
          />
        </h1>
        <h2 className='pt-2 text-6xl font-medium tracking-wide'>Medical Affairs</h2>
      </div>
      <p className='my-48 text-4xl leading-relaxed'>SEEK Medical Affairs enables pharmaceutical, biotech and medical device companies to revolutionize their medical affairs organization with talented people,  data-powered strategic planning and creative solutions. We strive to advance the science and practice of medical affairs to improve the health and well-being of patients.</p>
      <Solutions isHomepage={true} />
      <About isHomepage={true} />
      <div className='pt-20'>
        <ContactUs />
      </div>
    </div>
  )
}
