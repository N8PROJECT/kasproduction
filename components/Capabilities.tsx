import { Arrow } from "./Icons";
import { capabilities } from "@/lib/data";
import { delay } from "@/lib/anim";

export default function Capabilities() {
  return (
    <section className="dark" id="capabilities" aria-labelledby="cap-title">
      <div className="wrap">
        <span className="eyebrow" data-reveal>
          Our production capabilities
        </span>
        <h2 id="cap-title" data-reveal style={delay(80)}>
          From venue setup to technical production, we handle the infrastructure behind the event.
        </h2>
        <div className="acts" data-reveal style={delay(160)}>
          <a className="btn" href="#contact">
            Request a Quote <Arrow />
          </a>
          <a className="btn ghost" href="#services">
            View Our Services
          </a>
        </div>
        <div className="caps">
          {capabilities.map((c, i) => (
            <div key={c.title} data-reveal style={delay(i * 100)}>
              <div className="cap">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
