"use client";
import React from 'react';
import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function HoverEffect({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const textContainer = document.querySelector('.chakra-text');

    const handleHover = () => {
      gsap.to('.circle-background', { opacity: 1, scale: 1, duration: 0.3 });
      gsap.to('.text', { color: '#E6E6DD', duration: 0.3 });
      onClose();
    };

    const handleMouseLeave = () => {
      gsap.to('.circle-background', { opacity: 0, scale: 0, duration: 0.3 });
      gsap.to('.text', { color: '#776B5D', duration: 0.3 });
      onOpen();
    };

    if (textContainer) {
      textContainer.addEventListener('mouseenter', handleHover);
      textContainer.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        textContainer.removeEventListener('mouseenter', handleHover);
        textContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [onOpen, onClose]);

  return (
    <div className={`hover-effect-container ${isOpen ? 'hovered' : ''}`}>
      {children}
    </div>
  );
}
