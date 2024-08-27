"use client"
import React, { useEffect } from 'react';
import Header from "../components/Header";
import Slider from '../components/Slider';
import LottieAnimation from "../components/LottieAnimation";
import { useRouter } from 'next/navigation'

export default function WalkthroughPage() {
  const router = useRouter()
  const handleSubmit = (value) => {
    alert(value)
    console.log('Submit with value:', value);
  };

  useEffect(() => {
  });
  return (
      <>
        <main className="flex h-screen flex-col items-center px-5 max-w-6xl mx-auto">
          <div className="fixed w-full px-5">
            <Header showBackButton onBackClick={() => router.push('/')} />
          </div>
          <div className='fixed top-1/2 -translate-y-2/4 -mt-16 left-1/2 -translate-x-1/2 w-full max-w-56 -z-10 pointer-events-none'>
            <LottieAnimation />
          </div>
        </main>
        
        <div className='absolute bottom-0 px-5 pb-6 flex flex-col w-full'>
          <Slider />
        </div>
      </>
  )
}
