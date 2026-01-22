import ProductCard from "./ProductCard";

const MostPopularLight = () => {
    return (
        <section className='flex flex-col gap-6 font-montserrat'>
            <img
                src='/images/mostpopularlight.png'
                alt="Most Popular Light"
                className='w-full rounded-2xl'
            />

            <div className='text-center px-4'>
                <h3 className='font-bold text-2xl text-[#252B42]'>
                    MOST POPULAR
                </h3>
                <p className='text-[#737373] text-sm mt-2'>
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p> 
            </div>

            <ProductCard
                image='/images/cashews.png'
                department='English Department'
                oldPrice='16.48'
                price='6.48'
            />
        </section>
    );
};

export default MostPopularLight;