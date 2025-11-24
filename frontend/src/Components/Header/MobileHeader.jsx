import React from 'react'

export default function MobileHeader() {
  return (
      <div className=" flex md:hidden items-center justify-between h-16 px-5 bg-white dark:bg-zinc-700">
        {/* nav icon */}
        <div>
          <svg className="w-6 h-6">
            <use href="#bars-3"></use>
          </svg>
        </div>

        {/* logo icon */}
        <div>
          <svg className="w-[100px] h-10 text-orange-300">
            <use href="#logo-type"></use>
          </svg>
        </div>

        {/* shop icon */}
        <div>
          <svg className="w-6 h-6">
            <use href="#shop"></use>
          </svg>
        </div>
      </div>
  )
}
