import React from "react";

export default function Header() {
  return (
    <>
      <svg className="hidden">
        <symbol
          id="shop"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </symbol>
        <symbol
          id="moon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </symbol>

        <symbol
          id="arrow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </symbol>
      </svg>

      <header className="bg-black/50 fixed top-5 right-0 left-0 w-[90%] h-24 pr-10 pl-4 py-5 mx-auto flex rounded-3xl items-center backdrop-blur-sm">
        <div className="flex justify-between items-center w-full">
          {/* logo and menu */}
          <nav className="flex h-14 gap-x-9 items-center text-xl text-gray-300 tracking-tightest">
            <div>
              <img src="./images/app-logo.png" alt="" />
            </div>
            <ul className="flex h-full gap-x-9 tracking-tightest  child:leading-[56px]">
              <li className="text-orange-200">
                <a href="#">صفحه اصلی</a>
              </li>
              <li className="relative group">
                <a href="#">فروشگاه</a>
                <div className="absolute w-52 p-6 leading-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible space-y-4 top-full bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white 
                transition-all rounded-2xl border-t-[3px] tracking-normal shadow-normal border-t-orange-300 child:block child:transition-colors child-hover:text-orange-300">
                  <a href="">قهوه ویژه</a>

                  <a href="">در سطح جهانی</a>

                  <a href="">قهوه درجه یک</a>

                  <a href="">ترکیبات تجاری</a>

                  <a href="">کپسول قهوه</a>

                  <a href="">قهوه برزیلی</a>
                </div>
              </li>
              <li>
                <a href="#">دیکشنری</a>
              </li>
              <li>
                <a href="#">بلاگ</a>
              </li>
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </nav>

          {/* theme and login link */}
          <div className="flex items-center gap-x-5 text-orange-200">
            <div className="gap-x-5 flex">
              <div className="py-3">
                <svg className="w-6 h-6">
                  <use xlinkHref="#shop"></use>
                </svg>
              </div>
              <div>
                <svg className="h-6 w-6">
                  <use xlinkHref="#moon"></use>
                </svg>
              </div>
            </div>

            <span className="block w-px h-14 bg-white/20"></span>

            <a href="" className="flex gap-x-5 tracking-tightest">
              <svg className="h-6 w-6 rotate-180">
                <use xlinkHref="#arrow"></use>
              </svg>
              ورود/ثبت نام
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
