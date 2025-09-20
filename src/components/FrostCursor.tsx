import { useEffect, useState, useCallback } from 'react';

interface SnowFlake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export const FrostCursor = () => {
  const [snowFlakes, setSnowFlakes] = useState<SnowFlake[]>([]);
  const [isMoving, setIsMoving] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const createSnowFlake = useCallback((x: number, y: number) => {
    return {
      id: Math.random(),
      x: x + (Math.random() - 0.5) * 100,
      y: y,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 4 + 3,
      opacity: Math.random() * 0.8 + 0.2,
    };
  }, []);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;
    
    const createSnowflakesAtPosition = (x: number, y: number) => {
      setIsMoving(true);
      
      // Clear previous timeout
      clearTimeout(moveTimeout);
      
      // Add new snowflakes (more on mobile for better effect)
      const flakeCount = isMobile ? 5 : 3;
      const newFlakes = Array.from({ length: flakeCount }, () => createSnowFlake(x, y));
      
      setSnowFlakes(prev => [...prev, ...newFlakes].slice(isMobile ? -80 : -50)); // Keep max 80 flakes on mobile, 50 on desktop
      
      // Stop creating snow after movement stops
      moveTimeout = setTimeout(() => {
        setIsMoving(false);
      }, isMobile ? 200 : 100); // Longer timeout on mobile
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) { // Only handle mouse on non-mobile devices
        createSnowflakesAtPosition(e.clientX, e.clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent scrolling interference
      
      // Handle multiple touch points
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        createSnowflakesAtPosition(touch.clientX, touch.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      // Create initial snowflakes on touch start
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        createSnowflakesAtPosition(touch.clientX, touch.clientY);
      }
    };

    // Add event listeners
    if (isMobile) {
      document.addEventListener('touchstart', handleTouchStart, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      // Remove event listeners
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(moveTimeout);
    };
  }, [createSnowFlake, isMobile]);

  // Animate snowflakes
  useEffect(() => {
    const animationFrame = setInterval(() => {
      setSnowFlakes(prev => 
        prev
          .map(flake => ({
            ...flake,
            y: flake.y + flake.speed,
            opacity: flake.opacity - 0.01,
          }))
          .filter(flake => flake.y < window.innerHeight && flake.opacity > 0)
      );
    }, 16);

    return () => clearInterval(animationFrame);
  }, []);

  return (
    <div className="snow-container">
      {snowFlakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.x,
            top: flake.y,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
          }}
        />
      ))}
    </div>
  );
};