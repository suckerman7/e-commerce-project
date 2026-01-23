import React from "react";
import ProductCard from './ProductCard';

const benefits = [
    {
        id: 1,
        title: "Easy to use",
        text: "Things on a very small that you have any direct",
    },
    {
        id: 2,
        title: "Easy to use",
        text: "Things on a very small that you have any direct",
    },
    {
        id: 3,
        title: "Easy to use",
        text: "Things on a very small that you have any direct",
    },
    {
        id: 4,
        title: "Easy to use",
        text: "Things on a very small that you have any direct",
    },
];

const MostPopularSection = () => {
    return (
        <section className='bg-[#FAFAFA] font-montserrat'>

            <div className='max-w-6xl mx-auto px-4 py-12'>

                <div className='flex flex-col gap-6 lg:flex-row lg:gap-12 lg:items-center'>
                    <div className='w-full'>
                        <img
                            src='/images/mostpopular.png'
                            alt="Most Popular"
                            className='w-full h-100 lg:h-130 rounded-2xl object-cover'
                        />
                    </div>

                    <div className="flex flex-col gap-8 lg:max-w-md">
                        <div>
                            <h3 className="font-bold text-2xl text-[#252B42]">
                                MOST POPULAR
                            </h3>
                            <p className="text-[#737373] text-sm mt-2 max-w-md">
                                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                            </p>
                        </div>

                        <ProductCard
                            image="/images/premium_meat.png"
                            department="English Department"
                            oldPrice="16.48"
                            price="6.48"
                            sales={15}
                            colors={["#23A6F0", "#23856D", "#E77C40", "#252B42"]}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-6 lg:flex-row mt-10'>
                    {benefits.map((item) => (
                        <div key={item.id} className='flex gap-4'>
                            <span className='text-[#E74040] font-bold text-[40px] leading-none'>
                                {item.id}.
                            </span>
                            <div>
                            <h6 className='font-bold text-[#252B42] text-sm'>
                                {item.title}
                            </h6>
                            <p className='text-xs text-[#737373] max-w-xs'>
                                {item.text}
                            </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MostPopularSection;

