"use client"
import Lottie from 'lottie-react';
import lottieAnimation from '../../public/lottie.json';

const LottieAnimation = () => {
    return (
      <Lottie 
        animationData={lottieAnimation} 
        loop={true} // Set to false if you don't want the animation to loop
      />
    );
  };
  
  export default LottieAnimation;