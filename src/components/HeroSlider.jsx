import React, {useState, useEffect} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliders = [
    {
        title: "GROCERIES DELIVERY",
        description: "We know how large objects will act, but things on a small scale.",
        image: '/images/slider-image-1.jpg',
        cta: "Start Now"
    },
    {
        title: "BLACK FRIDAY",
        description: "We know how large objects will act, but things on a small scale.",
        image: '/images/slider-image-2.jpg',
        cta: "Start Now"
    },
]

const HeroSlider = () => {

    const [currentSlider, setCurrentSlider] = useState(0);

    const prevSlider = () => {
        setCurrentSlider((prev) => (prev === 0 ? sliders.length - 1 : prev - 1));
    };

    const nextSlider = () => {
        setCurrentSlider((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlider((prev) =>
                prev === sliders.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const slider = sliders[currentSlider];

    return (
        <section className='relative rounded-2xl overflow-hidden text-white font-montserrat flex items-center min-h-75 lg:min-h-125 bg-cover bg-center' style={{ backgroundImage: `url(${slider.image})` }}>

            <div className='absolute inset-0 bg-black/30' />
            
            <div className='relative p-6 lg:p-16 max-w-xl'>
                <h2 className='font-bold text-[40px] mb-4 lg:text-[58px]'>
                    {slider.title}
                </h2>

                <h4 className='text-xl opacity-90 mb-6'>
                    {slider.description}
                </h4>

                <button className='bg-[#23A6F0] text-white text-2xl font-bold px-6 py-3 rounded-lg'>
                    {slider.cta}
                </button>
            </div>

            <button onClick={prevSlider} className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full'>
                <ChevronLeft />
            </button>

            <button onClick={nextSlider} className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full'>
                <ChevronRight />
            </button>

            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
                {sliders.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlider(index)}
                        className={`w-3 h-3 rounded-full transition ${
                            index === currentSlider
                            ? 'bg-white'
                            : "bg-white/40"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;