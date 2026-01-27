import { useRef, useEffect, useState } from 'react';
import createGlobe from 'cobe';

const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setDimensions({ width, height: width });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: dimensions.width * 2,
      height: dimensions.height * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 0.8, 0.1], // Gold color for markers
      glowColor: [1, 1, 1],
      markers: [
        // Business locations
        // { location: [25.2684, 55.2962], size: 0.1 }, // Dubai
        // { location: [24.4539, 54.3773], size: 0.1 }, // Abu Dhabi
        // { location: [29.3759, 47.9774], size: 0.1 }, // Kuwait
        { location: [25.449696471351807, 55.683335319442065], size: 0.1 }
      ],
      onRender: (state: any) => {
        // Only update phi if not paused
        if (!isPausedRef.current) {
          state.phi = phi;
          phi += 0.01;
        }
      },
    });

    const handleStart = () => {
      isPausedRef.current = true;
    };

    const handleEnd = () => {
      isPausedRef.current = false;
    };

    // Add event listeners for both mouse and touch events
    if (canvasRef.current) {
      canvasRef.current.addEventListener('mousedown', handleStart);
      canvasRef.current.addEventListener('mouseup', handleEnd);
      canvasRef.current.addEventListener('mouseleave', handleEnd);
      canvasRef.current.addEventListener('touchstart', handleStart);
      canvasRef.current.addEventListener('touchend', handleEnd);
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('mousedown', handleStart);
        canvasRef.current.removeEventListener('mouseup', handleEnd);
        canvasRef.current.removeEventListener('mouseleave', handleEnd);
        canvasRef.current.removeEventListener('touchstart', handleStart);
        canvasRef.current.removeEventListener('touchend', handleEnd);
      }
      globe.destroy();
    };
  }, [dimensions]);

  return (
    <div ref={containerRef} className="w-full flex items-center justify-center hover:cursor-pointer">
      <canvas
        ref={canvasRef}
        style={{ 
          width: dimensions.width,
          height: dimensions.height,
          maxWidth: "100%",
          cursor: "inherit"
        }}
        className={`${className} select-none touch-none`}
      />
    </div>
  );
};

export default Globe;
