import React from 'react'
import Header from '../../Components/Header/Header.jsx'

export default function Landing() {
  return (
    <>
    <Header/>
    <main>
      <section id='home'>
        <div className='container h-[200px] md:min-h-screen flex justify-end items-center'>
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
