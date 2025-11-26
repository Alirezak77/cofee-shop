import React from 'react'
import Header from '../../Components/Header/Header.jsx'

export default function Landing() {
  return (
    <>
    <svg className='hidden'>
      <symbol>
        <svg id='curve' width="100" height="22" viewBox="0 0 100 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" fill="#F3F4F6"/>
</svg>
      </symbol>
      <symbol>
        <svg id='button-arrow' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

      </symbol>
    </svg>
    <Header/>
    <main>
      <section id='home' className='relative h-[200px] md:h-full bg-mobile-img md:bg-desktop-img bg-no-repeat bg-cover bg-[center_top]'>
        <div className='container relative h-full md:min-h-screen flex justify-end items-center'>
            <div className='text-white'>
              <h3 className='font-laleZar font-bold text-2xl md:text-6xl md:mb-2'>قهوه عربیکا تانزانیا</h3>
              <span className='text-xl md:text-5xl'>یک فنجان بالانس</span>
              <span className='w-[100px] h-px my-3 bg-orange-300 block'></span>
              <p className='text-xs max-w-[201px] md:max-w-[460px] md:text-xl '>قطعا نام قهوه عربیکا را شنیده ایید، عربیکا یکی از گونه های قهوه است که در مناطق مختلف کشت می شود</p>
            </div>
        </div>
      </section>
    </main>
    </>
  )
}
