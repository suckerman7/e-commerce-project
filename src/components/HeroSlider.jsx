import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
    return (
        <section className='relative bg-red-700 rounded-2xl overflow-hidden text-white font-montserrat'>
            <div className='p-6'>
                <h2 className='font-bold text-[40px] mb-2'>
                    GROCERIES DELIVERY
                </h2>

                <h4 className='text-xl opacity-90 mb-4'>
                    We know how large objects will act,
                    but things on a small scale.
                </h4>

                <button className='bg-[#23A6F0] text-white text-2xl font-bold px-4 py-2 rounded-lg'>
                    Start Now
                </button>
            </div>

            <button className='absolute left-2 top-1/2 -translate-y-1/2'>
                <ChevronLeft />
            </button>

            <button className='absolute right-2 top-1/2 -translate-y-1/2'>
                <ChevronRight />
            </button>
        </section>
    );
};

export default HeroSlider;