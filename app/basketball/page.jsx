import React from 'react';
import BasketballHeroSection from "../components/BasketballHeroSection";
import HoverEffect from '../components/HoverEffect';
import AnimatedCursor from "react-animated-cursor"
import BasketballAboutMe from '../components/BasketballAboutMe';
import Contact from '../components/Contact';

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
        <BasketballHeroSection/>
      </HoverEffect>
      <HoverEffect>
        <BasketballAboutMe/>
      </HoverEffect>
      <HoverEffect>
        <Contact/>
      </HoverEffect>
    </>
  );
}
