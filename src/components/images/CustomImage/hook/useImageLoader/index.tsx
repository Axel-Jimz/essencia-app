import { useState, useEffect } from "react";

const useImageLoader = (src: string) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [errorCount, setErrorCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (src !== "") {
      if (errorCount < 3 && !hasError) {
        const img = new Image();
        img.src = src;

        img.onload = () => {
          setImageSrc(src);
        };

        img.onerror = () => {
          setErrorCount((prevCount) => prevCount + 1);
        };
      } else {
        setHasError(true);
      }
    }
  }, [src, errorCount, hasError]);

  return { imageSrc, hasError };
};

export default useImageLoader