import { site } from "@/lib/site";

/** Uses the real KAS logo when `site.logoSrc` is set; otherwise shows a labelled slot. */
export default function Logo() {
  return (
    <a className="logo" href="#home" aria-label={`${site.name} home`}>
      {site.logoSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={site.logoSrc} alt={site.name} />
      ) : (
        <span className="slot">KAS logo here</span>
      )}
    </a>
  );
}
