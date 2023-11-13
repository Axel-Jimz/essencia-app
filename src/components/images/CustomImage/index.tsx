import React from "react";
import { ImageProps } from "./props";
import useImageLoader from "./hook/useImageLoader";
import WarningIcon from "../../icons/WarningIcon";

import "./styles/index.css";
import "./styles/theme.css";


const CustomImage: React.FC<ImageProps> = ({ src, alt, id }) => {
  const classes = ["image"];

  const { imageSrc, hasError } = useImageLoader(src);

  src === "" && classes.push("skeleton");
  hasError && classes.push("error");

  return (
    <div className={classes.join(" ")} id={id}>
      {src !== '' && hasError ? <WarningIcon /> : <img src={imageSrc} alt={alt} />}
    </div>
  );
};

export default CustomImage;
