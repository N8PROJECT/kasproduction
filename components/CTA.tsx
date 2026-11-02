import { site } from "@/lib/site";
import { delay } from "@/lib/anim";
import { Arrow } from "./Icons";

export default function CTA() {
  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <h2 id="cta-title" data-reveal>
        Let&apos;s Build Your Next Event
      </h2>
      <p data-reveal style={delay(100)}>
        Tell us what your event needs. Our team will help you plan the right
        production setup, equipment, and technical support.
      </p>
      <div className="acts" data-reveal style={delay(200)}>
        <a
          className="btn white"
          href={`https://wa.me/6281234567890?text=Halo%20${encodeURIComponent(site.name)},%20saya%20ingin%20request%20quote%20untuk%20event.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Request a Quote <Arrow />
        </a>
        <a
          className="btn black"
          href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
        >
          Call {site.phone}
        </a>
      </div>
    </section>
  );
}
