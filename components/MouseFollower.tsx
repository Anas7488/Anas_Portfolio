
import React, { useEffect, useRef } from 'react';

const MouseFollower: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Move dot immediately for responsiveness
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      // Faster lerp for the tactical ring
      const ringLerp = 0.2;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringLerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringLerp;

      // Much slower, smoother lerp for the "light shade" glow
      const glowLerp = 0.08;
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * glowLerp;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * glowLerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowPos.current.x}px, ${glowPos.current.y}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Light Shade (Large diffuse glow) */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none z-[9997] -ml-32 -mt-32 will-change-transform"
      />
      
      {/* Secondary Halo */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-500/20 rounded-full pointer-events-none z-[9998] -ml-5 -mt-5 will-change-transform"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-cyan-400/40"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-cyan-400/40"></div>
      </div>

      {/* Primary Dot (Tactical Core) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] -ml-[0.1875rem] -mt-[0.1875rem] shadow-[0_0_15px_#22d3ee,0_0_5px_#fff] transition-transform duration-75 ease-out"
      />
      
      {/* Tiny inner glow around dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transform-none"
        style={{
          left: mousePos.current.x,
          top: mousePos.current.y,
          width: '4px',
          height: '4px',
          marginLeft: '-2px',
          marginTop: '-2px',
          background: 'rgba(34, 211, 238, 0.5)',
          borderRadius: '50%',
          filter: 'blur(4px)',
        }}
      />
    </>
  );
};

export default MouseFollower;
