import { memo } from "react";
import { twMerge } from "tailwind-merge";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const DEFAULT_CLASS_NAME = "w-full h-full object-cover rounded-md";
export const Image = memo(
  ({ alt = "default magic image", src, className, ...rest }: ImageProps) => {
    return (
      <img
        className={twMerge(DEFAULT_CLASS_NAME, className)}
        src={src}
        alt={alt}
        {...rest}
      />
    );
  }
);
