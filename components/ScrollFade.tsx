
import React, { useRef, useState, useEffect } from 'react';

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollFade: React.FC<ScrollFadeProps> = ({ children, className = "" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [transform, setTransform] = useState('translateY(20px)');

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate the distance from the center of the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
      
      // Determine fade intensity (fade starts outside this radius)
      const fadeThreshold = windowHeight * 0.7; 
      const rawOpacity = 1 - (distanceFromCenter / fadeThreshold);
      const newOpacity = Math.max(0, Math.min(1, rawOpacity));
      
      // Subtle parallax shift
      const shift = (distanceFromCenter / fadeThreshold) * 30;
      const isAbove = elementCenter < viewportCenter;
      
      setOpacity(newOpacity);
      setTransform(`translateY(${isAbove ? -shift : shift}px)`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`transition-all duration-700 ease-out ${className}`}
      style={{ opacity, transform }}
    >
      {children}
    </div>
  );
};

export default ScrollFade;
