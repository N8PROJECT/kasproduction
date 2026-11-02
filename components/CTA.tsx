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
        Tell us what your event needs. Our team will help you plan the right production setup, equipment, and
        technical support.
      </p>
      <div className="acts" data-reveal style={delay(200)}>
        <a className="btn white" href={`mailto:${site.email}?subject=Quote%20Request`}>
          Request a Quote <Arrow />
        </a>
        <a className="btn black" href={`mailto:${site.email}?subject=Talk%20to%20${encodeURIComponent(site.name)}`}>
          Talk to Our Team
        </a>
      </div>
    </section>
  );
}
