import React from "react";
import ProductCard from "./ProductCard";

const BestsellerSection = () => {
    return (
        <section className='font-montserrat'>
            <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold mb-4'>
                    BESTSELLER PRODUCTS
                </h3>

                <div className='hidden lg:flex gap-6 text-sm font-bold text-[#737373]'>
                    <button className='text-[#23A6F0]'>Men</button>
                    <button>Women</button>
                    <button>Accessories</button>
                </div>
            </div>

            <div className='flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:gap-6 lg-overflow-visible'>
                <div className='min-w-60 lg:min-w-0'>
                    <ProductCard
                        image='/images/icecream.png'
                        title='Graphic Design'
                        department='English Department'
                        oldPrice="16.48"
                        price="6.48"
                    />
                </div>
                
                <div className='min-w-60 lg:min-w-0'>
                    <ProductCard
                        image='/images/apple.jpg'
                        title='Graphic Design'
                        department='English Department'
                        oldPrice="16.48"
                        price="6.48"
                    />
                </div>

                <div className='min-w-60 lg:min-w-0'>
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