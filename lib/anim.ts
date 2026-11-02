import type { CSSProperties } from "react";

/** Stagger helper: <div data-reveal style={delay(120)}> */
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
