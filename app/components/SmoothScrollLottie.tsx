"use client"

import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import lottieAnimation from '../../public/lottie.json';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollLottie = () => {
  const lottieWrapperRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Integrate Lenis with GSAP
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Set up ScrollTrigger for Lottie animation wrapper
    const lottieWrapper = lottieWrapperRef.current;

    if (lottieWrapper) {
      gsap.fromTo(
        lottieWrapper,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: lottieWrapper,
            start: 'top bottom-=100',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
    }

    // Clean up
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div ref={lottieWrapperRef}>
        <Lottie 
          animationData={lottieAnimation} 
          loop={true}
          style={{ width: 300, height: 300 }}
        />
      </div>
    </div>
  );
};

export default SmoothScrollLottie;