import * as React from "react";

type ProductCardProps = {
  badgeText?: string;
  badgeColor?: string;
  backgroundImageSrc: string;
  altText: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  badgeText,
  badgeColor = "bg-emerald-600",
  backgroundImageSrc,
  altText,
}) => (
  <div className="flex relative flex-col items-start px-5 pt-5 pb-64 w-full text-sm font-medium leading-none text-white capitalize whitespace-nowrap rounded-md aspect-square max-md:pb-24 max-md:mt-6">
    <img loading="lazy" src={backgroundImageSrc} alt={altText} className="object-cover absolute inset-0 size-full" />
    {badgeText && (
      <div className={`relative gap-2.5 px-2.5 py-1.5 ${badgeColor} rounded`}>
        {badgeText}
      </div>
    )}
  </div>
);

export default ProductCard;