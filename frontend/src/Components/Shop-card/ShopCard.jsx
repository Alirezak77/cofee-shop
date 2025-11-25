import React from "react";

export default function ShopCard() {
  return (
    <>
      <div className="mt-5 pb-5 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-400 dark:divide-white/10 child:py-5">
        <div className="flex ">
          <img src="/images/products/p1.png" className="w-[100px] h-[100px]" />
          <div>
            <h4 className="text-zinc-400 text-base font-bold inline-block">
              قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
            </h4>
            <div className="mt-5">
              <span className="text-teal-600 dark:text-emerald-500 text-sm">
                14.500 تومان تخفیف
              </span>
              <div className="text-zinc-600 dark:text-white">
                17.500
                <span>تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
