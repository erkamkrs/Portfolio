import { TypeAnimation } from 'react-type-animation';
import { useBreakpointValue } from "@chakra-ui/react";


export default function BasketballTypingAnimation() {
  const fontSize = useBreakpointValue({ base: '32px', md: '42px', lg: '48px' });

  return (
    <TypeAnimation
      sequence={[
        'Basketball Player',
        1000,
        'All-Around Forward',
        1000,
        'Software Developer',
        1000,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize:fontSize, display: 'inline-block'}}
      repeat={Infinity}
    />
  );
};
