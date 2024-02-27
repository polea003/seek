"use client"
import Image from 'next/image'
import Solutions from './components/Solutions'
import About from './components/About'
import { ContactUs } from './components/ContactUs'
// TODO: optimize for mobile

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-end pt-12 md:pt-24'>
        <div className='flex'>
          <h1 className='w-72 h-24 sm:w-96 sm:h-32 md:w-[700px] md:h-64 relative'>
            <Image
              className='object-contain'
              src="/Logo.png"
              fill
              alt="Seek Logo"
            />
          </h1>
        </div>
        <h2 className='pt-2 text-xl md:text-6xl font-medium tracking-wide'>Medical Affairs</h2>
      </div>
      <p className='my-20 md:my-40 text-base sm:text-xl md:text-4xl md:leading-relaxed'>SEEK Medical Affairs enables pharmaceutical, biotech and medical device companies to revolutionize their medical affairs organization with talented people,  data-powered strategic planning and creative solutions. We strive to advance the science and practice of medical affairs to improve the health and well-being of patients.</p>
      <Solutions isHomepage={true} />
      <About isHomepage={true} />
      <div className='pt-20'>
        <ContactUs />
      </div>
    </div>
  )
}
