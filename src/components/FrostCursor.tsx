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
    
    const handleMouseMove = (e: MouseEvent) => {
      setIsMoving(true);
      
      // Clear previous timeout
      clearTimeout(moveTimeout);
      
      // Add new snowflakes
      const newFlakes = Array.from({ length: 3 }, () => createSnowFlake(e.clientX, e.clientY));
      
      setSnowFlakes(prev => [...prev, ...newFlakes].slice(-50)); // Keep max 50 flakes
      
      // Stop creating snow after movement stops
      moveTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimeout);
    };
  }, [createSnowFlake]);

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