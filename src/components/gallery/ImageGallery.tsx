import { Lightbox, type LightboxProps } from "./Lightbox";

export function ImageGallery({ items }: { items: LightboxProps[] }) {
  return <div className="image-gallery">{items.map((item) => <figure key={item.src}><Lightbox {...item} />{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}</div>;
}
