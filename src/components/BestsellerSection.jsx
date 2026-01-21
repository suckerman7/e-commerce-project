import React from "react";
import ProductCard from "./ProductCard";

const BestsellerSection = () => {
    return (
        <section className='font-montserrat'>
            <h3 className='text-2xl font-bold mb-4'>
                BESTSELLER PRODUCTS
            </h3>

            <div className='flex gap-4 overflow-x-auto pb-2'>
                <div className='min-w-60'>
                    <ProductCard
                        image='/images/icecream.png'
                        title='Graphic Design'
                        department='English Department'
                        oldPrice="16.48"
                        price="6.48"
                    />
                </div>
                
                <div className='min-w-60'>
                    <ProductCard
                        image='/images/apple.jpg'
                        title='Graphic Design'
                        department='English Department'
                        oldPrice="16.48"
                        price="6.48"
                    />
                </div>

                <div className='min-w-60'>
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