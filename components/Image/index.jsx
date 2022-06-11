import { Image as BootstrapImage } from "react-bootstrap";

/**
 * An image with support for WebP format
 * @returns
 */
const Image = ({ src, useWebp = true, ...props }) => {
  const webpVersion = src.replace(/[.](png|jpg|jpeg)$/, ".webp");

  return useWebp === true ? (
    <picture>
      <source srcSet={webpVersion} type="image/webp" {...props} />
      <BootstrapImage src={src} {...props} />
    </picture>
  ) : (
    <BootstrapImage src={src} {...props} />
  );
};

export default Image;
