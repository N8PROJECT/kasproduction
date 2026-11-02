import Photo from "./Photo";
import { Arrow } from "./Icons";
import { services } from "@/lib/data";
import { delay } from "@/lib/anim";

export default function Services() {
  return (
    <section className="sec services" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="shead" data-reveal>
          <span className="eyebrow">Services</span>
          <h2 id="services-title">Our Event Production Services</h2>
        </div>
        <div className="sgrid">
          {services.map((s, i) => (
            <a key={s.title} className="svc" href="#contact" data-reveal style={delay((i % 4) * 90)}>
              <div className="im">
                <Photo src={s.image} alt={s.title} tone={s.tone} />
              </div>
              <div className="b">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <span className="arrow">
                  Explore Service <Arrow />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
