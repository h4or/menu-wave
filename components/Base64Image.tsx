import React from "react";

interface Base64ImageProps {
  base64String: string;
  alt?: string;
  className?: string;
  height?: string;
  width?: string;
}

const Base64Image: React.FC<Base64ImageProps> = ({
  base64String,
  alt = "Base64 Image",
  className,
  height = "auto",
  width = "auto",
}) => {
  return (
    <img
      src={`${base64String}`}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
};

export default Base64Image;
