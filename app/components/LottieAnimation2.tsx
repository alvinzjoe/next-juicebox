import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Make sure to register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LottieAnimation2 = () => {
  const containerRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    // Load Lottie animation
    lottieRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './lottie.json' // Make sure this is in your public folder
    });

    // Wait for the animation to load
    lottieRef.current.addEventListener('DOMLoaded', () => {
      // Set up ScrollTrigger
      ScrollTrigger.create({
        //trigger: containerRef.current,
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const quarterProgress = (self.progress * 5) % 1;
          const frame = Math.floor(quarterProgress * lottieRef.current.totalFrames);
          lottieRef.current.goToAndStop(frame, true);
        }
      });
    });

    // Cleanup function
    return () => {
      lottieRef.current.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className='fixed top-1/2 -translate-y-2/4 -mt-16 left-1/2 -translate-x-1/2 w-full max-w-xs -z-10 pointer-events-none'>
    </div>
  );
};

export default LottieAnimation2;

