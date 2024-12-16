import * as React from "react";
import NewsletterForm from "./Newsletter";

const Footer: React.FC = () => (
  <div className="flex flex-col justify-center items-center self-stretch p-16 mt-36 w-full bg-white shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 justify-between items-start w-full max-w-[1320px] max-md:max-w-full">
      <div className="flex flex-col items-start">
        <div className="flex gap-2 items-center text-2xl font-semibold leading-tight whitespace-nowrap text-slate-800">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/76c2ec019029b499e2ccf419eb4889b640801bf10c7a1cb723407392aebdae8c?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="Comforty logo" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" />
          <div className="self-stretch my-auto">Comforty</div>
        </div>
        <div className="self-stretch mt-6 text-base leading-6 opacity-60 text-slate-800">
          Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
          <br />
          Cras egestas purus{" "}
        </div>
        <div className="flex gap-1 items-start mt-6">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7d6546eb9092bc0e7b543269fe18d88fd7def51f9561a949430bee6ecdb665a?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="Facebook" className="object-contain shrink-0 aspect-square w-[38px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/97815b14cdf30ebafaf10a97f7b1448b2c2905423b5fa0b87964fb39c36f6edb?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="Twitter" className="object-contain shrink-0 aspect-square w-[38px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/509d4aa2b3a7adaaef3981e72c42979b8f3ed02ef260d2cfd2f083fcb811e766?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="Instagram" className="object-contain shrink-0 aspect-square w-[38px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f07bf0b7c11e84fd70e5c080dd7f07e1a3807541f2a9a598f1004df38cadd6cc?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="Pinterest" className="object-contain shrink-0 aspect-square w-[38px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8731333a7b6fd0c9895644f32b7322cfb9108fa440bce9dd5a857bd711b72885?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="LinkedIn" className="object-contain shrink-0 aspect-square w-[38px]" />
        </div>
      </div>
      <div className="flex flex-col self-stretch leading-none">
        <div className="text-sm font-medium tracking-wider uppercase text-zinc-400">
          Category
        </div>
        <div className="flex flex-col mt-5 text-base text-slate-800">
          <div>Sofa</div>
          <div className="mt-3">Armchair</div>
          <div className="mt-3">Wing Chair</div>
          <div className="mt-3 text-cyan-700 underline decoration-auto decoration-solid underline-offset-auto">
            Desk Chair
          </div>
          <div className="mt-3">Wooden Chair</div>
          <div className="mt-3">Park Bench</div>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <div className="text-sm font-medium tracking-wider uppercase text-zinc-400">
          Support
        </div>
        <div className="flex flex-col mt-5 text-base text-slate-800">
          <div>Help & Support</div>
          <div className="mt-3">Terms & Conditions</div>
          <div className="mt-3">Privacy Policy</div>
          <div className="mt-3">Help</div>
        </div>
      </div>
      <NewsletterForm />
    </div>
  </div>
);

export default Footer;