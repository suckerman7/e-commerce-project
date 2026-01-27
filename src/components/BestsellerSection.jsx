import React from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BestsellerSection = () => {
    return (
        <section className='font-montserrat max-w-6xl mx-auto px-4'>
            <div className='flex flex-col items-center gap-4 mb-8 lg:flex-row lg:justify-between'>
                <h3 className='text-2xl lg:text-base font-bold mb-4 text-[#252B42] text-center lg:text-left'>
                     BESTSELLER PRODUCTS
                </h3>

                <div className='flex gap-10 text-sm font-bold text-[#737373]'>
                    <button className='text-[#23A6F0]'>Men</button>
                    <button>Women</button>
                    <button>Accessories</button>
                </div>


                <div className='flex gap-3'>
                    <button className='w-12 h-12 rounded-full border flex items-center justify-center'>
                        <ChevronLeft />
                    </button>
                    <button className='w-12 h-12 rounded-full border flex items-center justify-center'>
                        <ChevronRight />
                    </button>
                </div>
            </div>

            <div className="w-full h-px bg-[#ECECEC] my-6" />

                <div className='flex flex-col gap-6 pb-4 overflow-x-auto lg:flex-row lg:flex-wrap lg:overflow-visible lg:justify-between'>
                    <div className='w-full lg:w-[48%]'>
                        <ProductCard
                            image='/images/icecream.png'
                            title='Graphic Design'
                            department='English Department'
                            oldPrice="16.48"
                            price="6.48"
                        />
                    </div>
                    
                    <div className='min-w-60 lg:min-w-0 lg:w-[48%]'>
                        <ProductCard
                            image='/images/apple.jpg'
                            title='Graphic Design'
                            department='English Department'
                            oldPrice="16.48"
                            price="6.48"
                        />
                    </div>

                    <div className='min-w-60 lg:min-w-0 lg:w-[48%]'>
                        <ProductCard
                            image='/images/steak.jpg'
                            title='Graphic Design'
                            department='English Department'
                            oldPrice="16.48"
                            price="6.48"
                        />
                    </div>

                    <div className='min-w-60 lg:min-w-0 lg:w-[48%]'>
                        <ProductCard
                            image='/images/icecream.png'
                            title='Graphic Design'
                            department='English Department'
                            oldPrice="16.48"
                            price="6.48"
                        />
                    </div>
                    
                    <div className='min-w-60 lg:min-w-0 lg:w-[48%]'>
                        <ProductCard
                            image='/images/apple.jpg'
                            title='Graphic Design'
                            department='English Department'
                            oldPrice="16.48"
                            price="6.48"
                        />
                    </div>

                    <div className='min-w-60 lg:min-w-0 lg:w-[48%]'>
                        <ProductCard
                            image='/images/steak.jpg'
                            title='Graphic Design'
                            department='English Department'
                            oldPrice="16.48"
                            price="6.48"
                        />
                    </div>
                </div>
        </section>
    );
};

export default BestsellerSection;