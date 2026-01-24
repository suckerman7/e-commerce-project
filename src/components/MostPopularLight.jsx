import ProductCard from "./ProductCard";

const MostPopularLight = () => {
    return (
        <section className='font-montserrat bg-[#FAFAFA] py-12'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center'>

                    <div className='flex flex-col gap-6 order-2 lg:order-1'>
                        <div>
                             <h3 className='font-bold text-2xl text-[#252B42]'>
                                MOST POPULAR
                            </h3>
                            <p className='text-[#737373] text-sm mt-2'>
                                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                            </p> 
                        </div>

                        <div className='lg:hidden mb-4'>
                            <ProductCard
                                image="/images/cashews.png"
                                department="English Department"
                                oldPrice="16.48"
                                price="6.48"
                            />
                        </div>

                        <div className='hidden lg:block max-w-sm'>
                             <ProductCard
                                image='/images/cashews.png'
                                department='English Department'
                                oldPrice='16.48'
                                price='6.48'
                                variant='popular'
                                sales={15}
                                colors={["#23A6F0", "#23856D", "#E77C40", "#252B42"]}
                            />
                        </div>
                    </div>

                    <div className='order-1 lg:order-2'>
                        <img
                            src='/images/mostpopularlight.png'
                            alt="Most Popular Light"
                            className='w-full rounded-2xl'
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MostPopularLight;