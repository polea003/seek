import Image from 'next/image'
import ComingSoonPage from './components/ComingSoonPage'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-end pt-40'>
        <div className='w-[700px] h-64 relative'>
          <Image
            className='object-contain'
            src="/Logo.png"
            fill
            alt="Seek Logo"
          />
        </div>
        <h1 className='pt-2 text-4xl font-medium tracking-wide'>Medical Affairs</h1>
      </div>
    </div>
  )
}
