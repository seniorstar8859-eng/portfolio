"use client";

import { useEffect, useRef } from "react";

interface OceanBackgroundProps {
  className?: string;
  opacity?: number;
}

export default function OceanBackground({
  className = "",
  opacity = 0.35,
}: OceanBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const postCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const postCanvas = postCanvasRef.current;
    if (!canvas || !postCanvas) return;

    const c = canvas.getContext("2d");
    const postctx = postCanvas.getContext("2d");
    if (!c || !postctx) return;

    // Effect properties
    const vertexCount = 7000;
    const vertexSize = 3;
    const oceanWidth = 204;
    const oceanHeight = -80;
    const gridSize = 32;
    const waveSize = 16;
    const perspective = 100;

    const depth = (vertexCount / oceanWidth) * gridSize;
    let frame = 0;
    let animationId: number;
    const { sin, cos, PI } = Math;

    // Generate vertices
    const vertices: number[][] = [];
    for (let i = 0; i < vertexCount; i++) {
      const x = i % oceanWidth;
      const y = 0;
      const z = (i / oceanWidth) >> 0;
      const offset = oceanWidth / 2;
      vertices.push([(-offset + x) * gridSize, y * gridSize, z * gridSize]);
    }

    let oldTimeStamp = performance.now();

    const handleResize = () => {
      const parent = postCanvas.parentElement;
      if (!parent) return;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      canvas.width = postCanvas.width = w;
      canvas.height = postCanvas.height = h;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const loop = (timeStamp: number) => {
      const dt = (timeStamp - oldTimeStamp) / 1000;
      oldTimeStamp = timeStamp;
      frame += dt * 50;

      const rad = sin(frame / 100) * (PI / 20);
      const rad2 = sin(frame / 50) * (PI / 10);

      c.fillStyle = "hsl(200deg, 100%, 2%)";
      c.fillRect(0, 0, canvas.width, canvas.height);
      c.save();
      c.translate(canvas.width / 2, canvas.height / 2);

      c.beginPath();
      vertices.forEach((vertex, i) => {
        let x = vertex[0] - (frame % (gridSize * 2));
        let z =
          vertex[2] -
          ((frame * 2) % gridSize) +
          (i % 2 === 0 ? gridSize / 2 : 0);
        const wave =
          cos(frame / 45 + x / 50) -
          sin(frame / 20 + z / 50) +
          sin(frame / 30 + (z * x) / 10000);
        let y = vertex[1] + wave * waveSize;
        const a = Math.max(0, 1 - Math.sqrt(x ** 2 + z ** 2) / depth);

        y -= oceanHeight;

        // Rotation Y
        let tx = x * cos(rad) + z * sin(rad);
        let tz = -x * sin(rad) + z * cos(rad);
        x = tx;
        z = tz;

        // Rotation Z
        tx = x * cos(rad) - y * sin(rad);
        let ty = x * sin(rad) + y * cos(rad);
        x = tx;
        y = ty;

        // Rotation X
        ty = y * cos(rad2) - z * sin(rad2);
        tz = y * sin(rad2) + z * cos(rad2);
        y = ty;
        z = tz;

        x /= z / perspective;
        y /= z / perspective;

        if (a < 0.01) return;
        if (z < 0) return;

        c.globalAlpha = a;
        c.fillStyle = `hsl(${180 + wave * 20}deg, 100%, 50%)`;
        c.fillRect(
          x - (a * vertexSize) / 2,
          y - (a * vertexSize) / 2,
          a * vertexSize,
          a * vertexSize
        );
        c.globalAlpha = 1;
      });
      c.restore();

      // Post-processing
      postctx.drawImage(canvas, 0, 0);
      postctx.globalCompositeOperation = "screen";
      postctx.filter = "blur(16px)";
      postctx.drawImage(canvas, 0, 0);
      postctx.filter = "blur(0)";
      postctx.globalCompositeOperation = "source-over";

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity }}
    >
      {/* Hidden offscreen canvas for rendering */}
      <canvas ref={canvasRef} className="hidden" />
      {/* Visible post-processed canvas */}
      <canvas
        ref={postCanvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
