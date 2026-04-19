import Image from "next/image";

type ProductImageFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** Fixed 4:3 frame; image fills via object-cover (cropped, not stretched). */
export function ProductImageFrame({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className = "",
}: ProductImageFrameProps) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
