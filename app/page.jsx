import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import React from 'react';
import HoverEffect from './components/HoverEffect';
import AnimatedCursor from "react-animated-cursor"
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
      <head>
      <link rel="icon" href="@/public/favicon.ico" sizes="any" />
      </head>
      <AnimatedCursor 
        innerSize={12}
        outerSize={12}
        color='128, 128, 128'
        outerAlpha={0.8}
        innerScale={1.4}
        outerScale={6}
      />
      <HoverEffect>
        <HeroSection />
      </HoverEffect>
      <HoverEffect>
        <AboutMe />
      </HoverEffect>
      <HoverEffect>
        <Contact />
      </HoverEffect>
    </>
  );
}
