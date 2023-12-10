import { Box, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const BasketballCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        "./carousel-image-1.jpg",
        "./carousel-image-2.jpg",
        "./carousel-image-3.jpg",
        "./carousel-image-4.jpg",
        "./carousel-image-5.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
        position={'relative'}
          rounded={'full'}
          boxShadow={'2xl'}
          height={{base: '200px', sm: '200px', lg: '400px'}}
          width={{base: '300px', sm: '300px', lg: '600px'}}
          overflow={'hidden'}
          bg={'#E6E6DD'}
          >
            <Wrap spacing={0}>
                {images.map((image, index) => (
                    <WrapItem key={index}>
                        <Image
                            src={image}
                            width={"100%"}
                            alt={`Slide ${index + 1}`}
                            display={index === currentSlide ? "block" : "none"}
                        />
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
};

export default BasketballCarousel;
