import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SingleFloatingText = ({ text, start = "80% top", end = "bottom bottom", className="" }) => {
  const textRef = useRef();

  useEffect(() => {
    // const totalTexts = textRefs.current.length;

    ScrollTrigger.create({
        //trigger: textRef.current,
        trigger: "body",
        start: start, // Start showing at each stage
        end: end,
        scrub: true,
        onUpdate: (self) => {
          gsap.to(textRef.current, {
            opacity: self.progress,
            duration: 0.3,
          });
        },
      });
    
    // // Create scroll trigger for each text element
    // textRefs.current.forEach((text, index) => {
      
    // });
  }, []);

  return (
    <div>
      <div
          className={`text-white opacity-0 ${className}`}
          ref={textRef}
        >
          {text}
        </div>
    </div>
  );
};

export default SingleFloatingText;