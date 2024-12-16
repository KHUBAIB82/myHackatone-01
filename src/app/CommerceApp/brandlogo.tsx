import * as React from "react";

type BrandLogoProps = {
  src: string;
  alt: string;
  className?: string;
};

const BrandLogo: React.FC<BrandLogoProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className || ""} />
);

export default BrandLogo;