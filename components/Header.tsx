"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { Chevron, MenuIcon } from "./Icons";
import { nav } from "@/lib/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const ddRef = useRef<HTMLLIElement>(null);

  // Compact dark header after scrolling past the top of the hero.
  useEffect(() => {
    const onScroll = () => document.body.classList.toggle("stuck", window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("stuck");
    };
  }, []);

  // Close dropdown on outside click, close menus on Escape.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDdOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      {/* Layout: [ nav (left) ]  [ logo (center) ]  [ button (right) ] */}
      <header>
        <div className="hleft">
          <button
            type="button"
            className="icon-btn burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mnav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuIcon />
          </button>

          <nav className="desk" aria-label="Primary">
            <ul>
              {nav.map((item) =>
                item.children ? (
                  <li key={item.label} ref={ddRef} className={`dd${ddOpen ? " open" : ""}`}>
                    <button
                      type="button"
                      className="nl"
                      aria-haspopup="true"
                      aria-expanded={ddOpen}
                      onClick={(e) => {
                        e.stopPropagation();
                        setDdOpen((o) => !o);
                      }}
                    >
                      {item.label} <Chevron />
                    </button>
                    <ul className="menu">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a href={c.href} onClick={() => setDdOpen(false)}>
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a href={item.href} aria-current={item.label === "Home" ? "page" : undefined}>
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>

        <Logo />

        <div className="tools">
          <a className="btn" href="#contact">
            Request a Quote
          </a>
        </div>
      </header>

      <div id="mnav" className={`mnav${menuOpen ? " open" : ""}`}>
        {nav.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn" href="#contact" onClick={() => setMenuOpen(false)}>
          Request a Quote
        </a>
      </div>
    </>
  );
}
