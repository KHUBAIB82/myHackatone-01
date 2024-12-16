import * as React from "react";

const HeaderBar: React.FC = () => (
  <div className="flex flex-col items-center self-stretch w-full bg-white min-h-[203px] max-md:max-w-full">
    <div className="flex flex-wrap gap-10 justify-between items-center px-72 py-3.5 w-full text-sm text-white bg-slate-800 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 items-center self-stretch my-auto leading-none capitalize min-w-[240px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec219e31e4bfe4a88d97a4fc744ebdd5949b417876b0bd1bfd00f90d8c1be8ea?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
        <div className="self-stretch my-auto">Free shipping on all orders over $50</div>
      </div>
      <div className="flex gap-6 items-start self-stretch my-auto leading-tight text-center">
        <div className="flex gap-1.5 items-center whitespace-nowrap">
          <div className="self-stretch my-auto">Eng</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe5f921c21237b781b8b9f92bd3362d5eb0f8829b1c8007010582c65f92be572?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[2.33] w-[7px]" />
        </div>
        <div>Faqs</div>
        <div className="flex gap-1.5 items-start">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/035e51854558ba4c063f6fda01028f2bab47e6ae1fd2cddc69957be97203040c?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="" className="object-contain shrink-0 w-4 aspect-square" />
          <div>Need Help</div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap gap-10 justify-between items-center px-72 py-5 w-full font-medium whitespace-nowrap bg-gray-100 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 items-center self-stretch my-auto text-2xl leading-tight text-slate-800">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/09598ba580ef12747db28526bb3462045a992c53064b1d2bcc074b10933cf193?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="Comforty logo" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" />
        <div className="self-stretch my-auto">Comforty</div>
      </div>
      <div className="flex gap-3 items-start self-stretch my-auto text-center capitalize">
        <div className="flex gap-3 justify-center items-center px-4 py-3 bg-white rounded-lg">
          <div className="flex gap-2 items-center self-stretch my-auto text-xs leading-none text-slate-800">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/92b1debd3fd976ddfbb7bc1b2678457a55d46b9dd11c378b3ec690b44872d1ea?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="Cart icon" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]" />
            <div className="self-stretch my-auto">Cart</div>
          </div>
          <div className="flex flex-col self-stretch my-auto w-5 text-xs leading-none text-white">
            <div className="px-0.5 w-5 h-5 bg-cyan-700 rounded-full fill-cyan-700">2</div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap gap-10 justify-between items-center px-72 py-8 w-full text-sm leading-none capitalize bg-white shadow-sm min-h-[74px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-8 items-center self-stretch my-auto font-medium whitespace-nowrap min-w-[240px] text-zinc-500">
        <div className="self-stretch my-auto text-cyan-700">Home</div>
        <div className="self-stretch my-auto">Shop</div>
        <div className="self-stretch my-auto">Product</div>
        <div className="self-stretch my-auto">Pages</div>
        <div className="self-stretch my-auto">About</div>
      </div>
      <div className="flex gap-2 items-start self-stretch my-auto">
        <div className="text-zinc-500">Contact:</div>
        <div className="font-medium text-slate-800">(808) 555-0111</div>
      </div>
    </div>
  </div>
);

export default HeaderBar;