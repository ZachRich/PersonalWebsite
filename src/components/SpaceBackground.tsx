import { useEffect, useState } from "react";

const SpaceBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="stars-container">
      {/* Animated Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Flying Spaceships */}
      <div className="spaceship" style={{ color: 'hsl(var(--accent))' }}>🚀</div>
      <div className="spaceship" style={{ color: 'hsl(var(--primary))' }}>🛸</div>
      <div className="spaceship" style={{ color: 'hsl(var(--accent))' }}>🛰️</div>

      {/* Shooting Stars */}
      <div 
        className="shooting-star" 
        style={{ 
          top: '20%', 
          '--delay': '2s' 
        } as React.CSSProperties}
      />
      <div 
        className="shooting-star" 
        style={{ 
          top: '60%', 
          '--delay': '8s' 
        } as React.CSSProperties}
      />
      <div 
        className="shooting-star" 
        style={{ 
          top: '40%', 
          '--delay': '15s' 
        } as React.CSSProperties}
      />
    </div>
  );
};

export default SpaceBackground;