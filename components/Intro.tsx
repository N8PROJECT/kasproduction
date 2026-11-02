import Photo from "./Photo";
import { Arrow } from "./Icons";
import { gallery } from "@/lib/data";
import { delay } from "@/lib/anim";

export default function Intro() {
  return (
    <section className="sec intro" id="about" aria-labelledby="intro-title">
      <div className="wrap">
        <span className="eyebrow" data-reveal>
          Event equipment rental &amp; production support
        </span>
        <h2 id="intro-title" data-reveal style={delay(80)}>
          Complete Event Production &amp; Equipment Solutions
        </h2>
        <p className="lead" data-reveal style={delay(160)}>
          Event infrastructure, equipment rental and technical production in one team. We set up the tents, stages,
          sound and power your event runs on, and support it on site.
        </p>
        <div data-reveal style={delay(240)}>
          <a className="btn" href="#services">
            Explore Services <Arrow />
          </a>
        </div>
        <div className="gallery">
          {gallery.map((g, i) => (
            <div key={g.label} data-reveal="scale" style={delay(i * 100)}>
              <Photo src={g.image} alt={g.alt} tone={g.tone} label={g.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
