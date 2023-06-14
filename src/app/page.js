import Navbar from '@/component/Navbar'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdVilla, MdApartment, MdBed, MdGarage, MdBathroom } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { GiStairs } from 'react-icons/gi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import ProductCard from '@/component/ProductCard'

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
                  <HiLocationMarker className='w-6 h-6 text-[#F59E0B] mr-2' />
                  <input className='text-sm' type="text" placeholder='Search for the location you want!' />
                  <button className='flex absolute right-1 text-white text-sm font-semibold items-center bg-[#10B981] p-3.5 rounded-[20px]' type='Submit'>
                    Search
                    <FaChevronRight className='ml-2' />
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

      <section className='mt-32 mb-32 w-[1200px] ml-auto mr-auto'>
        <p className='text-base font-light text-[#F59E0B]'>Our Recommendation</p>
        <div className='flex mb-10'>
          <div className='flex'>
            <h3 className='text-[32px] mr-32 mt-3'>Featured House</h3>
            <button className='flex items-center py-3 px-6 bg-[#D1FAE5] text-[#10B981] text-lg h-fit rounded-3xl mr-8'>
              <AiFillHome className='mr-2' />
              House
            </button>
            <button className=' flex items-center text-lg rounded-3xl border-gray-300 border py-3 px-6 h-fit mr-8'>
              <MdVilla className='mr-2' />
              Villa
            </button>
            <button className=' flex items-center text-lg rounded-3xl border-gray-300 border py-3 px-6 h-fit mr-8'>
              <MdApartment className='mr-2' />
              Apartment
            </button>
          </div>
        </div>
        <div className='flex gap-x-10'>
          <ProductCard />
        </div>
      </section >

      <section className='w-[1200px] ml-auto mr-auto'>
        <p className='text-base font-light text-[#F59E0B] mb-3'>Ready to Sell!</p>
        <div>
          <h3 className='text-[32px] mr-32 mt-3 mb-4'>Let’s tour and see our house!</h3>
          <p className='text-base font-light text-[#626687] mb-4'>Houses recommended by our partners that have <br />
            been curated to become the home of your dreams!</p>
          <p className='text-base font-semibold text-[#1B1C57] mb-4'>House Detail</p>
          <div className='flex flex-wrap w-1/4 text-base font-medium text-[#1B1C57]'> 
            <p className='flex items-center mr-14'><MdBed className='text-[#888B97] mr-4'/> 4 Bedrooms</p>
            <p className='flex items-center'><MdGarage className='text-[#888B97] mr-4'/> 1 Carport</p>
            <p className='flex items-center mr-14'><MdBathroom className='text-[#888B97] mr-4'/> 2 Bathrooms</p>
            <p className='flex items-center'><GiStairs className='text-[#888B97] mr-4'/> 2 Floors</p>
          </div>
          <div className="flex items-center mt-6">
            <div className='flex'>
              <img src='/images/photouser.png' alt="" className="h-[56px] w-[56px] mr-4" />
              <div>
                <p className="text-lg font-medium">Dianne Russell</p>
                <p className="text-[#888B97] text-base">Manager Director</p>
              </div>
            </div>
            <button className='bg-[#10B981] flex items-center px-4 py-3 text-white text- rounded-3xl ml-14 mt-16'>
              <BsFillTelephoneFill className='mr-4 font-bold text-base'/>
              Contact Now
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
