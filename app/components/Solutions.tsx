"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import AccordionMenu from "../components/Accordion";
import AccordionNextUI from "./AccordionNextUI";
import { ContactUs } from "./ContactUs";
import { Button } from "@mui/material";

const talentServices = [
  { name: 'Executive Search', description: 'We focus on sourcing exceptional leadership talent, individuals capable of navigating the complex landscape of Medical Affairs, driving strategic initiatives, and fostering innovation in healthcare.' },
  { name: 'Middle Management', description: 'Recognizing the crucial role of middle management in implementing effective Medical Affairs strategies, our search services are designed to find professionals who excel in managing cross-functional teams and translating scientific insights into impactful business decisions.' },
  { name: 'Professional Level Search', description: 'At the professional level, our approach is to identify candidates who not only possess the necessary technical expertise but also demonstrates a deep understanding of the regulatory and ethical considerations inherent in Medical Affairs roles.' },
  // { name: 'Direct Placement', description: 'We streamline the recruitment process to place highly qualified Medical Affairs professionals who seamlessly integrate into your organization and contribute to its strategic goals.' },
  // { name: 'Contingent Search', description: 'Our flexible, results-oriented contingent search service is perfect for dynamic staffing needs within the Medical Affairs domain, ensuring access to top talent at critical times.' },
  // { name: 'Retained Search', description: 'For strategic, high-impact hires, our retained search service offers a dedicated and thorough approach, ensuring the identification and acquisition of exceptional talent perfectly suited for your specific Medical Affairs Challenges.' },
  { name: 'Recruitment Process Outsourcing (RPO)', description: 'With our RPO solution, we partner with you to transform your recruitment process, specializing in Medical Affairs recruitment to enhance efficiency and effectiveness.' },
]

const consultingServices = [
  'Strategic & Tactical Planning',
  'Standards & Process Development',
  'Data & Analytics Planning',
  'Digital Technology Planning',
  'Team Buildout',
  'Channel Mapping',
  'Territory Panning',
  'KOL Mapping',
  'KPI and Field Medical Impact Measures',
]

const trainingServices = [
  'Medical Capabilities',
  'Scientific Engagement Excellence',
  'Insights Excellence',
  'Strategic Networking',
  'Change Management',
  'Data-Driven Mindset',
  'Management Training',
  'Coaching'
]

export default function Solutions({ isHomepage }) {
  const [selectedView, setSelectedView] = useState(null)


  useEffect(() => {
    const element = document.getElementById(selectedView || '');
    element?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setSelectedView(null), 300)
  }, [selectedView])

  return (
    <div className="flex flex-col">
      <div className="w-full flex gap-12">
        <div className="flex flex-col flex-1">
          <h2 className="text-xl uppercase tracking-wider pb-6">Solutions</h2>
          {/* <AccordionNextUI /> */}
          {/* <Button variant="text" size="large">Talent Acquisition</Button>
          <Button variant="text" size="large">Consulting & Advisory</Button>
          <Button variant="text" size="large">Training & Development</Button> */}
          <div className="flex flex-col divide-y-2">
            <button className="w-full flex items-center text-left" onClick={() => setSelectedView('talent')}>
              <div className="font-thin flex-1 py-10 text-3xl">Talent Acquisition</div>
              <ArrowCircleRightIcon fontSize="large" />
            </button>
            <button className="w-full flex items-center text-left" onClick={() => setSelectedView('consulting')}>
              <div className="font-thin flex-1 py-10 text-3xl">Consulting & Advisory</div>
              <ArrowCircleRightIcon fontSize="large" />
            </button>
            <button className="w-full flex items-center text-left" onClick={() => setSelectedView('training')}>
              <div className="font-thin flex-1 py-10 text-3xl">Training & Development</div>
              <ArrowCircleRightIcon fontSize="large" />
            </button>
          </div>
        </div>
        <div className="w-[500px] h-[500px] relative rounded-xl overflow-hidden">
          <Image
            className='object-cover'
            src="/seek_example.webp"
            fill
            alt="Seek Logo"
          />
        </div>
      </div>
      <div id="talent" className="pt-20">
        <h2 className="text-xl uppercase tracking-wider">Talent Acquisition</h2>
        <p className="text-lg tracking wide py-8">At Seek, we are dedicated to shaping the future of Medical Affairs by providing specialized recruitment services. Our deep understanding of the intricacies and evolving demands of this sector enables us to offer targeted recruitment solutions, perfectly aligned with the unique needs of our clients in the pharmaceutical and healthcare industries.</p>
        <div className="grid grid-cols-4 gap-12 pt-12">
        {talentServices.map(service => {
          return (
            <div key={service.name} className="flex flex-col">
              <div className="font-semibold">{service.name}</div>
              <div className="text-gray-600 pt-4">{service.description}</div>
            </div>
          )
        })}
        </div>
      </div>
      <div id="consulting" className="pt-20">
        <h2 className="text-xl uppercase tracking-wider">Consulting & Advisory</h2>
        <p className="text-lg tracking wide py-8">We are thrilled to collaborate as thought partners with our clients through our Consulting & Advisory services. We leverage our real-world industry experience to help them overcome challenges and seize opportunities. Our innate curiosity and creative thinking enable us to create innovative and effective solutions tailored to specific business needs. We are committed to transforming Medical Affairs into a strategic pillar that drives positive outcomes for patients and society.</p>
        <div className="grid grid-cols-4 gap-12 pt-12">
        {consultingServices.map(service => {
          return (
            <div key={service} className="flex flex-col">
              <div className="font-semibold">{service}</div>
            </div>
          )
        })}
        </div>
      </div>
      <div id="training" className="pt-20">
        <h2 className="text-xl uppercase tracking-wider">Training & Development</h2>
        <p className="text-lg tracking wide py-8">{'Our Training & Development services help clients retain and develop talent by offering opportunities to learn new skills and competencies essential for Medical Affairs\' evolving roles and activities.'}</p>
        <div className="grid grid-cols-4 gap-12 pt-12">
        {trainingServices.map(service => {
          return (
            <div key={service} className="flex flex-col">
              <div className="font-semibold">{service}</div>
            </div>
          )
        })}
        </div>
      </div>
      <div className="pt-32">
        {!isHomepage && <ContactUs />}
      </div>
    </div>
  )
}
