// components/FloatingText.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FloatingText = () => {
  const textRefs = useRef([]);

  useEffect(() => {
    const totalTexts = textRefs.current.length;
    
    // Create scroll trigger for each text element
    textRefs.current.forEach((text, index) => {
      ScrollTrigger.create({
        trigger: "body",
        start: `${(index / totalTexts) * 100}% top`, // Start showing at each stage
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          gsap.to(text, {
            opacity: 1,
            duration: 0.3,
          });
        },
      });
    });
  }, []);

  return (
    <div>
      {["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"].map((text, index) => (
        <div
          key={index}
          className="floating-text"
          ref={(el) => (textRefs.current[index] = el)}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default FloatingText;