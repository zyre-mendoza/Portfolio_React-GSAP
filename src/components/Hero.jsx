import React, { useEffect, useRef } from 'react';
import './styles/main.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const sectionElement = sectionRef.current;

    // Moves the text to the right based on window width
    gsap.to(textElement, {
      xPercent: -100, // Moves the text to the right
      ease: "power1.inOut", // Adds a smooth ease-in and ease-out effect
      scrollTrigger: {
        trigger: sectionElement,
        start: "top top", // Start the animation when the top of the section is at the top of the viewport
        end: () => `+=${textElement.offsetWidth}`, // End after the text has fully moved
        scrub: 4, // Smooth scrolling
        pin: true, // Pin the section while scrolling
        anticipatePin: 1,
        markers: true // Set to true to debug, false in production
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="hero-section">

        <div className="text-container">
          <div class="marquee">
              <div class="marquee-content">
                coffee • web development • ui/ux design • coffee • web development • ui/ux design •
              </div>
           </div>

            <h1 ref={textRef} className="scroll-text">ZYRE MENDOZA

              
            </h1>
            </div>
      </section>

      <section className="hero-section2">
        <h2>Next Section</h2>
      </section>
    </>
  );
};

export default Hero;
