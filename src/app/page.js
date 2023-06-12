import Navbar from '@/component/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex mr-auto ml-auto flex-col static">
      <Navbar />
      <section className='flex w-full h-[45rem] mr-0'>
        <div className='w-1/2'></div>
        <div className='w-1/2'>
          <img src="/images/banner-image.png" className='w-full'/>
        </div>
      </section>
    </main>
  )
}
