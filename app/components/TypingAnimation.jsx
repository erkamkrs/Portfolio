import { TypeAnimation } from 'react-type-animation';
import { useBreakpointValue } from "@chakra-ui/react";


export default function TypingAnimation() {
  const fontSize = useBreakpointValue({ base: '42px', md: '42px', lg: '48px' });

  return (
    <TypeAnimation
      sequence={[
        'Python Developer',
        1000,
        'Web Developer',
        1000,
        'Back End Developer',
        1000,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize:fontSize, display: 'inline-block'}}
      repeat={Infinity}
    />
  );
};
