import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedText = ({text = ""}) => {
  const wordsRef = useRef([]);
  const words = text.split(' ');

  useEffect(() => {
    wordsRef.current.forEach((word, index) => {
      gsap.fromTo(
        word,
        { color: 'rgba(250, 250, 250, 0.5)' },
        {
            color: 'rgba(250, 250, 250, 1)',
          duration: 0.2,
          delay: index * 0.3,
        }
      );
    });
  }, []);

  return (
    <p className="font-bagoss text-center text-[22px]">
      {words.map((word, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) {
              wordsRef.current[index] = el;
            }
          }}
          className="inline-block rounded mr-1"
          style={{ color: 'rgba(250, 250, 250, 0.5)' }}
        >
          {word}{' '}
        </span>
      ))}

    </p>
  );
};

export default AnimatedText;