import * as React from "react";
import ProductCard from "./ProductCard";
import BrandLogo from "./brandlogo";
import FeatureItem from "./FeatureItem";

const MainContent: React.FC = () => {
  const featureItems = [
    {
      title: "Library Stool Chair",
      price: "$20",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bceed32bad627e49107325de91b44cbcf31b75ecc743f024f466507e3c3a1d13",
      imgAlt: "Library Stool Chair",
    },
    {
      title: "Library Stool Chair",
      price: "$20",
      oldPrice: "$39",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d4ebb803d839f868416ccd2981101a69ec9cff349067e9b566edc27ed824a38",
      imgAlt: "Library Stool Chair",
    },
    {
      title: "Library Stool Chair",
      price: "$20",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdab30b864094cb2c2c5871e0dae57fe1652b56ee4bac3708766197be47f0b84",
      imgAlt: "Library Stool Chair",
    },
    {
      title: "Library Stool Chair",
      price: "$20",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdab30b864094cb2c2c5871e0dae57fe1652b56ee4bac3708766197be47f0b84",
      imgAlt: "Library Stool Chair",
    },
  ];

  const brands = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3452af49f42ccb59ab3bd5ade6ebeb848d4a10cd04a2934d996fcf0514d4f16",
      alt: "Brand 1",
      className: "object-contain shrink-0 self-stretch my-auto aspect-[0.98] w-[85px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/435c2f760b740d2167049bfadfecad23a20a592115b1cb29ddefc54dec3e555b",
      alt: "Brand 2",
      className: "object-contain shrink-0 self-stretch my-auto aspect-[0.98] w-[107px]",
    },
    // Additional brand items...
  ];

  return (
    <div className="flex flex-col justify-center items-start px-16 py-32 max-w-full bg-gray-100 rounded-none w-[1321px] max-md:px-5 max-md:py-24">
      {/* Welcome Section */}
      <div className="mb-0 max-w-full w-[1141px] max-md:mb-2.5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[56%] max-md:w-full">
            <div className="flex flex-col text-slate-800 capitalize">
              <div className="text-sm tracking-widest leading-none uppercase">Welcome to Chairy</div>
              <h1 className="mt-6 text-6xl font-bold leading-[66px] max-md:text-4xl max-md:leading-[49px]">
                Best Furniture Collection for your Interior
              </h1>
              <button className="flex items-center gap-5 px-6 py-3.5 mt-12 text-white bg-cyan-600 rounded-lg max-md:px-5 max-md:mt-10">
                <span>Shop Now</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5b980cad6dbc5f68e1971de8f18b67c8aa7f7a56cb31739d3ea860d1bf439f8"
                  alt="Arrow Icon"
                  className="w-6"
                />
              </button>
            </div>
          </div>
          <div className="flex justify-center w-[44%] max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e4d5dd5f9332945b3e49b6b21b180a2d7095cd5fe4d41bb94d479db01ec63fe"
              alt="Furniture"
              className="object-contain w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap gap-10 justify-between items-center mt-14 w-full">
        {brands.map((brand, index) => (
          <BrandLogo key={index} src={brand.src} alt={brand.alt} className={brand.className} />
        ))}
      </div>

      {/* Featured Products */}
      <div className="flex flex-wrap gap-10 justify-between items-center mt-10">
        {featureItems.map((item, index) => (
          <FeatureItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
