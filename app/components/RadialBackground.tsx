"use client"
import { useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
  useEffect(() => {
    // Animate the background position infinitely
    gsap.to('.radial-gradient-bg', {
      top: "25%",
      duration: 1,
      repeat: -1,
    //   repeat: 0,
    yoyo: true,
      ease: 'ease-in',
    });
  }, []);

  return (
    <div className="absolute top-0 -z-10 w-full h-full">
      <div
        className="radial-gradient-bg absolute left-0 top-1/2"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, #222737 0%, #0C0D10 60%)',
          backgroundSize: '100% 100%',
          backgroundPosition: '0% 0%',
        }}
      >
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default AnimatedBackground;