import Navbar from '@/component/Navbar'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

export default function Home() {
  return (
    <main className="flex mr-auto ml-auto flex-col max-w-[1440px]">
      <Navbar />
      <section className='flex h-[720px]'>
        <div className='flex flex-row mr-auto ml-auto'>
          <div className='w-1/2 flex flex-col justify-center'>
            <div className='w-[600px] ml-auto'>
              <div className='w-5/6'>
                <h4 className='text-[40px] font-bold leading-[50px] mb-6'>Find The Place To<br />
                  Live <span>Your Dreams</span><br />
                  Easily Here</h4>
                <p className='text-base text-[#626687] mb-8'>Everything you need about finding your place to live will be here, where it will be easier for you</p>
                <form className='flex flex-row items-center relative border rounded-3xl border-[#E0E3EB] pl-6 py-4 mb-8'>
                  <HiLocationMarker className='w-6 h-6 text-[#F59E0B] mr-2'/>
                  <input className='text-sm' type="text" placeholder='Search for the location you want!' />
                  <button className='flex absolute right-1 text-white text-sm font-semibold items-center bg-[#10B981] p-3.5 rounded-[20px]' type='Submit'>
                    Search
                    <FaChevronRight className='ml-2'/>
                  </button>
                </form>
                <div>
                  <p className='text-sm font-light text-[#888B97]'>Our Partnership </p>
                  <div className='flex'>
                    <img className='mr-8' src="/images/logo-traveloka.png" alt="" />
                    <img className='mr-8' src="/images/logo-tiketcom.png" alt="" />
                    <img className='mr-8' src="/images/logo-airbnb.png" alt="" />
                    <img src="/images/logo-advisor.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <img src="/images/banner-image.png" className='w-auto h-[720px]' />
          </div>
        </div>
      </section>
    </main>
  )
}
