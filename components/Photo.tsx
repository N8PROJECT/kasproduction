import Image from "next/image";

type Props = { src: string | null; alt: string; tone?: string; label?: string; priority?: boolean };

/** Real photo (next/image) when `src` exists, otherwise a dark placeholder tile. */
export default function Photo({ src, alt, tone = "", label, priority }: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 767px) 80vw, (max-width: 1023px) 50vw, 33vw"
        className="photo"
        style={{ objectFit: "cover" }}
      />
    );
  }
  return (
    <div className={`ph ${tone}`} role="img" aria-label={`${alt} (photo placeholder)`}>
      {label ? <span>{label}</span> : null}
    </div>
  );
}
