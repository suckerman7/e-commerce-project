import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductSlider = ({ images = [], currentImage, setCurrentImage }) => {

    if (!images.length) {
        return (
            <div className="w-full h-125 flex items-center justify-center bg-gray-100 rounded-2xl text-gray-400">
                No image
            </div>
        );
    }

    const prevImage = () => {
        setCurrentImage(prev =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentImage(prev =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImage(prev =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length, setCurrentImage]);

    const activeImage = images[currentImage]?.url;

    return (
        <section className="relative rounded-2xl overflow-hidden">
            <img
                src={activeImage}
                alt="Product"
                className="w-full h-112.5 lg:h-137.5 object-contain bg-white transition duration-500"
            />

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
                    >
                        <ChevronRight />
                    </button>
                </>
            )}
        </section>
    );
};

export default ProductSlider;