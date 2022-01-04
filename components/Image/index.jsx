import { Image as BootstrapImage } from "react-bootstrap";

/**
 * An image with support for WebP format
 * @returns
 */
const Image = ({ src, ...props }) => {
  const webpVersion = src.replace(/[.](png|jpg|jpeg)$/, ".webp");

  return (
    <picture>
      <source srcSet={webpVersion} type="image/webp" />
      <BootstrapImage src={src} {...props} />
    </picture>
  );
};

export default Image;
