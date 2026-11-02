import Photo from "./Photo";
import { Arrow } from "./Icons";
import { projects } from "@/lib/data";
import { delay } from "@/lib/anim";

export default function Projects() {
  return (
    <section className="sec" id="portfolio" aria-labelledby="proj-title">
      <div className="wrap">
        <div className="phead">
          <div data-reveal>
            <span className="eyebrow">Selected projects</span>
            <h2 id="proj-title">
              Real Setups. Real Venues.
              <br />
              Real Production.
            </h2>
          </div>
          <div data-reveal style={delay(120)}>
            <a className="btn line" href="#portfolio">
              See Portfolio <Arrow />
            </a>
          </div>
        </div>
        <div className="pgrid">
          {projects.map((p, i) => (
            <article className="proj" key={`${p.name}-${i}`} data-reveal style={delay(i * 120)}>
              <a href="#portfolio">
                <div className="im">
                  <Photo src={p.image} alt={`${p.name} event setup`} tone={p.tone} label="Add event photo" />
                </div>
                <h3>{p.name}</h3>
                <p className="m">{p.meta}</p>
                <p className="s">{p.services}</p>
              </a>
              <a className="arrow" href="#portfolio">
                View Project <Arrow />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
