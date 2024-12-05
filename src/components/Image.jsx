import React from "react";
import { IKImage } from "imagekitio-react";

function Image({ src, classname, alt, w, h }) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      loading="lazy"
      path={src}
      alt={alt}
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
      className={classname}
    />
  );
}

export default Image;
