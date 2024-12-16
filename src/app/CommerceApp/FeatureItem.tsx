import * as React from "react";

type FeatureItemProps = {
  title: string;
  price: string;
  oldPrice?: string;
  imgSrc: string;
  imgAlt: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  price,
  oldPrice,
  imgSrc,
  imgAlt,
}) => (
  <div className="flex flex-1 gap-3">
    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
      <div className={`text-base leading-tight ${oldPrice ? "" : "text-cyan-700"}`}>{title}</div>
      <div className="flex gap-1 items-center self-start mt-2.5 leading-none whitespace-nowrap">
        <div className="self-stretch my-auto text-lg font-semibold text-slate-800">{price}</div>
        {oldPrice && (
          <div className="self-stretch my-auto text-sm text-zinc-400">{oldPrice}</div>
        )}
      </div>
    </div>
    <img loading="lazy" src={imgSrc} alt={imgAlt} className="object-contain shrink-0 my-auto w-11 rounded-none aspect-square" />
  </div>
);

export default FeatureItem;