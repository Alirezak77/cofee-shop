import React from "react";
import ProductBox from "../Product-box/ProductBox";

export default function Products() {
  return (
    <>
    <svg className='hidden'>
        <symbol>
            <svg id="aeeow-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

        </symbol>
    </svg>
    <section className="product bg-product-img bg-no-repeat h-[900px]">
      <div className="container">
        <div className="flex items-center justify-between mt-10">
          <div className="font-laleZar flex flex-col gap-y-2 dark:text-white">
            <h3 className="font-bold text-2xl ">جدید ترین محصولات</h3>
            <p className="text-xl">فراوری شده با دان قهوه</p>
          </div>
          <div className="flex items-center text-orange-300">
            <a href="">مشاهده همه مجصولات</a>
            <svg className="w-6 h-6">
                <use href="#arrow-left"></use>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>

        </div>
      </div>
    </section>
    </>
  );
}
