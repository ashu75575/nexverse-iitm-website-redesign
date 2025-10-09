"use client";
import ReactLenis from "lenis/react";
function SmoothScrolling({ children }) {

  return (
    <ReactLenis root
  // options={{ lerp: .01, duration: 1.5, smoothTouch: true }}
  className="max-w-screen overflow-x-hidden relative"
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;