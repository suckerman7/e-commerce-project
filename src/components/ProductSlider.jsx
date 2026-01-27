import React, {useState, useEffect} from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderImages = [
    {
        image: "/images/product-slider-1.jpg"
    },
    {
        image: "/images/product-slider-2.jpg"
    },
]

const ProductSlider = ({ currentImage, setCurrentImage }) => {

    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                prev === sliderImages.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [setCurrentImage]);

    const sliderImage = sliderImages[currentImage];

    return (
        <section className='relative rounded-2xl overflow-hidden flex items-center min-h-75 lg:min-h-125 bg-cover bg-center' style={{ backgroundImage: `url(${sliderImage.image})`}}>
            <div className='absolute inset-0 bg-black/30' />

            <button onClick={prevImage} className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full'>
                <ChevronLeft />
            </button>

            <button onClick={nextImage} className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full'>
                <ChevronRight />
            </button>
        </section>
    );
};

export default ProductSlider;