"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; poster?: string | null };

/**
 * Background video. Stays invisible (placeholder/image shows underneath)
 * until the first frame is ready, then fades in. If the file is missing
 * or fails to load, the fallback simply stays visible.
 */
export default function HeroVideo({ src, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Video may already be loaded before React attached the event listener.
    if (v.readyState >= 2) setReady(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={ref}
      className={`hvideo${ready ? " ready" : ""}`}
      src={src}
      poster={poster ?? undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      onLoadedData={() => setReady(true)}
      onError={() => setReady(false)}
    />
  );
}
