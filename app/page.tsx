"use client"
import React, { useEffect, useRef } from 'react';

import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "./components/Header";
gsap.registerPlugin(ScrollTrigger);
import SmoothScrolling from "./components/SmoothScrolling";
import LottieAnimation2 from "./components/LottieAnimation2";
import SingleFloatingText from "./components/SingleFloatingText";
import Button from './components/Button';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const handleSubmit = (value) => {
    alert(value)
    console.log('Submit with value:', value);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  });
  return (
      <SmoothScrolling>
        <main className="flex h-screen flex-col items-center px-5 max-w-6xl mx-auto">
          <div className="fixed w-full px-5">
            <Header showBackButton={false} />
          </div>
          <div className="h-[100vh]"></div>
          <div className="max-w-48  relative">
            <LottieAnimation2 />
          </div>
          <div className="fixed w-full top-1/2 -translate-y-1/2 px-5 -mt-10">
            <div className="max-w-2xl relative w-full lg:w-2/3 h-72 block mx-auto font-sohne text-xs">
              <SingleFloatingText text="WA businesses feel confident about future growth " start="10% top" end="12% bottom" className="absolute  top-0 -translate-y-1/2 left-0"  />
              <SingleFloatingText text="AI cant replace creativity" start="12% top" end="18% top" className="absolute top-[15%] -translate-y-1/2 right-0"  />
              <SingleFloatingText text="Sales measure true success" start="25% top" end="28% top" className="absolute top-[30%] -translate-y-1/2 left-0"  />
              <SingleFloatingText text="Human connection drives WA business" start="50% top" end="75% top" className="absolute  top-[55%] -translate-y-1/2 right-0"  />
              <SingleFloatingText text="The primary barrier to digital transformation is financial investment" start="55% top" end="80% top" className="absolute w-[220px] top-[80%] -translate-y-1/2 left-0"  />
            </div>
          </div>
          <div className="h-[500vh]"></div>
        </main>
        <div className='fixed bottom-0 px-5 pb-6 w-full'>
          <div className="max-w-2xl mx-auto">
            <h2 className='text-[28px] text-white font-bagoss mb-10 text-center'>Compare your thoughts on <span className="inline-block"
                      style={{
                        background: 'linear-gradient(to right, #FABBFF 0%, #B179FF 40%, #6DDDFF 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '200% 100%',
                        backgroundPosition: 'left',
                      }}>technology</span> with current industry opinions.
                    </h2>
            <Button variant="primary" onClick={() => router.push('/walkthrough')} className="mb-4">
              Get a reality check
            </Button>
          </div>
          
        </div>
      </SmoothScrolling>
  )
}
