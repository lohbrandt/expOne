import React from "react";

export type ImageData = {
  src: string;
};
type ImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> &
  ImageData;

const Image = ({ ...props }: ImageProps) => {
  return <img {...props} />;
};

export default Image;
