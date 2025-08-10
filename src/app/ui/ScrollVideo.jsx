"use client";

import { useEffect, useMemo, useRef } from "react";
import { useScroll } from "framer-motion";

const FRAME_COUNT = 300;
const frameSrc = (i) => `/images/drone_video/${i}.webp`;

export default function ScrollVideo({ overlay }) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  // Only compute urls on render (safe for SSR)
  const frames = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, i) => frameSrc(i + 1)),
    []
  );

  // simple in-memory cache of loaded Images
  const cacheRef = useRef({}); // { [index]: HTMLImageElement }

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const draw = (idx) => {
      const i = Math.max(0, Math.min(FRAME_COUNT - 1, idx));
      let img = cacheRef.current[i];

      const renderImg = () => {
        // set intrinsic size once to avoid blurring
        if (
          canvas.width !== img.naturalWidth ||
          canvas.height !== img.naturalHeight
        ) {
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      };

      if (img && img.complete) {
        renderImg();
        return;
      }

      img = new window.Image();
      img.src = frames[i]; // e.g. /images/drone_video/1.webp
      img.onload = () => {
        cacheRef.current[i] = img;
        renderImg();
      };
    };

    // draw first frame immediately
    draw(0);

    const unsub = scrollYProgress.on("change", (p) => {
      const idx = Math.round(p * (FRAME_COUNT - 1));
      draw(idx);
    });

    return () => unsub?.();
  }, [frames, scrollYProgress]);

  return (
    <div ref={wrapperRef} className="h-[2000px]">
      <div className="sticky top-0">
        <canvas
          ref={canvasRef}
          className="w-full h-[1000px]"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <p className="text-white text-9xl font-semibold text-center drop-shadow">
              {overlay}
            </p>
        </div>
      </div>
    </div>
  );
}
