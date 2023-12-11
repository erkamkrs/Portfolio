import { Box, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

const BasketballCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [intervalTime, setIntervalTime] = useState(3000);
    
    const images = [       
        "./carousel-image-1.jpg",
         "./dunk-video.mp4",
        "./carousel-image-2.jpg",
        "./carousel-image-3.jpg",
        "./carousel-image-4.jpg",
        "./carousel-image-5.jpg",
    ];

    const videoRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [intervalTime]);

    useEffect(() => {
        if (videoRef.current) {
            if (currentSlide === 1) {
                videoRef.current.play();
                setIntervalTime(8000);
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
                setIntervalTime(3000);
            }
        }
    }, [currentSlide]);

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
                        {image.endsWith(".mp4") ? (
                            <video
                                ref={videoRef}
                                src={image}
                                width={"100%"}
                                alt={`Slide ${index + 1}`}
                                style={{
                                    display: index === currentSlide ? "block" : "none",
                                    objectFit: "cover",
                                }}
                                autoPlay
                                loop
                                muted
                            />
                        ) : (
                            <Image
                                src={image}
                                width={"100%"}
                                alt={`Slide ${index + 1}`}
                                display={index === currentSlide ? "block" : "none"}
                            />
                        )}
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
};

export default BasketballCarousel;
