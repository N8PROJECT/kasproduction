import { site } from "@/lib/site";
import { delay } from "@/lib/anim";
import Photo from "./Photo";
import HeroVideo from "./HeroVideo";
import { Arrow } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label={site.name}>
      <div className="hmedia">
        <div className="hbg">
          <Photo src={site.heroImage} alt="Event stage setup" tone="g3" priority />
        </div>
        {site.heroVideo ? <HeroVideo src={site.heroVideo} poster={site.heroPoster} /> : null}
      </div>

      <div className="hc">
        <div className="wrap">
          <div>
            <h1 data-hero style={delay(200)}>
              Complete Event Production,
              <br />
              Built to Perform.
            </h1>
            <span className="bar" data-hero style={delay(450)} />
          </div>
          <div className="hdesc">
            <p data-hero style={delay(500)}>
              From venue infrastructure to technical production, KAS Production provides the equipment and on-site
              support needed to deliver events with confidence.
            </p>
            <div className="acts" data-hero style={delay(650)}>
              <a className="btn" href="#services">
                Explore Our Services <Arrow />
              </a>
              <a className="btn ghost" href="#portfolio">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
