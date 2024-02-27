"use client"
// import TypeIt from "typeit-react"
import Image from "next/image"
import { ContactUs } from "./ContactUs"

export default function About({ isHomepage }: { isHomepage: boolean }) {
  return (
    <div className="flex flex-col space-y-24">
      <div className="flex flex-col items-center">
        <div className="mb-20 flex flex-col items-center">
          <div className="text-8xl font-thin tracking-wide text-center">
            <h1>Shaping the future</h1>
            <h1>of medical affairs</h1>
          </div>
          {/* <TypeIt
            className="text-8xl font-thin tracking-wide text-center"
            options={{
              strings: ["Shaping the future", "of medical affairs"],
              speed: 30,
              cursor: false
            }}
          /> */}
        </div>
        <div className="w-[800px] h-[500px] relative rounded-xl overflow-hidden">
          <Image
            className='object-cover'
            src="/seek_example.webp"
            fill
            alt="Seek Logo"
          />
        </div>  
        <div className="flex gap-20 mt-16 text-xl text-justify">
          <div className="flex-1">{'SEEK Medical Affairs is a women and minority owned and operated business specialized in talent and strategic consulting. We aim to help people and organizations passionate about Medical Affairs fully realize their value in improving patients\' lives. At SEEK Medical Affairs, we are always looking for new challenges and opportunities to grow and improve our field.'}</div>
          <div className="flex-1">We are constantly exploring new trends and technologies that can enhance our services and solutions, and we are always open to collaborating with other experts and organizations that share our vision and passion. We are excited about the future of Medical Affairs, and we are committed to making a positive difference in the lives of patients and society.</div>
        </div>
        <div className="font-thin text-5xl mt-20 tracking-wide">Meet The Team</div>
        <div className="w-full flex items-center mt-12 gap-8">
          <div className="w-48 h-48 relative rounded-xl overflow-hidden flex-none">
            {/* TODO: headshots */}
            <Image
              className='object-cover'
              src="/headshot-example-1.jpeg"
              fill
              alt="Seek Logo"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-medium pb-3 text-lg">Liz Delgado</div>
            <div>Liz Delgado is the head of our Medical Affairs consulting division at SEEK. She has over two decades of professional experience in the pharmaceutical sector and is a recognized expert in Medical Affairs, with a proven record of achieving strategic, organizational, and operational excellence. She has launched and managed field medical teams, such as MSL and HEOR Liaisons, in various healthcare settings and disease areas. She also established and executed the Field Medical Health Systems and Medical Affairs Technology and Data & Analytics Platform teams at Sunovion, where she held several leadership positions over 13 years. Liz Delgado is a visionary leader who can drive innovation, collaboration, and performance in the pharmaceutical industry. She holds a PharmD degree from Nova Southeastern University.</div>
          </div>
        </div>
        <div className="w-full flex mt-12 gap-8">
          <div className="w-48 h-48 relative rounded-xl overflow-hidden flex-none">
            <Image
              className='object-cover'
              src="/headshot-example-1.jpeg"
              fill
              alt="Seek Logo"
            />
          </div>
          <div className="flex flex-col pt-12">
            <div className="font-medium pb-3 text-lg">Sophia Caldevilla</div>
            {/* TODO: sophia bio */}
            <div>Quam molestiae reprehenderit nihil voluptas. Aspernatur corrupti molestias dolore fugiat ut. Est dicta optio quibusdam. Dolor nulla vel laborum velit laudantium et iste eum. Magni maiores eum consequatur repudiandae autem et iusto.…</div>
          </div>
        </div>
      </div>
      {!isHomepage && <ContactUs />}
    </div>
    
  )
}
