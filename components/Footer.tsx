import Logo from "./Logo";
import { Instagram } from "./Icons";
import { site } from "@/lib/site";
import { serviceNames } from "@/lib/data";
import { delay } from "@/lib/anim";

const company = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div data-reveal>
            <Logo />
            <p className="tag">{site.tagline}</p>
            <a className="ig" href={site.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram /> {site.instagramHandle}
            </a>
          </div>
          <div data-reveal style={delay(80)}>
            <h4>Company</h4>
            <ul>
              {company.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={delay(160)}>
            <h4>Services</h4>
            <ul>
              {serviceNames.map((n) => (
                <li key={n}>
                  <a href="#services">{n}</a>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={delay(240)}>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li className="tag" style={{ margin: 0 }}>
                {site.location}
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© {site.name}</span>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
