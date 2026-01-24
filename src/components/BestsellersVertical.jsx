import ProductCard from "./ProductCard";

const BestsellersVertical = () => {
    return (
        <section className='font-montserrat'>
            <h3 className='font-bold text-2xl text-[#252B42] uppercase mb-6'>
                Bestseller Products
            </h3>

            <div className='flex flex-col gap-6 lg:grid lg:grid-cols-4 lg:gap-8'>
                    <ProductCard
                        image='/images/bestseller-cover.png'
                        title='Graphic Design'
                        department='English Department'
                        oldPrice="16.48"
                        price="6.48"
                        className="h-40 lg:h-64 object-contain"
                    />
                
                    <ProductCard
                        image='/images/bestseller-cover-2.png'
                        title='Graphic Design'
                        department='English Department'
                        oldPrice="16.48"
                        price="6.48"
                        className="h-40 lg:h-64 object-contain"
                    />

                    <ProductCard
                        image='/images/bestseller-cover-3.png'
                        title='Graphic Design'
                        department='English Department'
                        oldPrice="16.48"
                        price="6.48"
                        className="h-40 lg:h-64 object-contain"
                    />

                    <ProductCard
                        image='/images/bestseller-cover-4.png'
                        title='Graphic Design'
                        department='English Department'
                        oldPrice="16.48"
                        price="6.48"
                        className="h-40 lg:h-64 object-contain"
                    />
            </div>
        </section>
    );
};

export default BestsellersVertical;

