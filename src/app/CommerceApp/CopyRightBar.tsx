import * as React from "react";
import BrandLogo from "./brandlogo";

const CopyrightBar: React.FC = () => (
  <div className="flex flex-wrap gap-10 justify-between items-center self-stretch px-72 py-6 w-full text-sm bg-white shadow-sm text-slate-800 max-md:px-5 max-md:max-w-full">
    <div className="self-stretch my-auto">
      @ 2021 - Blogy - Designed & Develop by{" "}
      <span className="text-slate-800">Zakirsoft</span>
    </div>
    <BrandLogo src="https://cdn.builder.io/api/v1/image/assets/TEMP/c045856198636f4085b930bfacb6e8017ef5aae7324653b6f7c2c0ef9af67249?placeholderIfAbsent=true&apiKey=f010e8afe38e440d80d81a8573a5aab0" alt="Payment methods" className="object-contain shrink-0 self-stretch my-auto aspect-[8.4] w-[227px]" />
  </div>
);

export default CopyrightBar;