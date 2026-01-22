import ProductCard from "./ProductCard";

const BestsellersVertical = () => {
    return (
        <section className='flex flex-col gap-4 font-montserrat'>
            <h3 className='font-bold text-2xl text-[#252B42] uppercase'>
                Bestseller Products
            </h3>

            <ProductCard
                image='/images/bestseller-cover.png'
                title='Graphic Design'
                department='English Department'
                oldPrice="16.48"
                price="6.48"
            />

            <ProductCard
                image='/images/bestseller-cover-2.png'
                title='Graphic Design'
                department='English Department'
                oldPrice="16.48"
                price="6.48"
            />

            <ProductCard
                image='/images/bestseller-cover-3.png'
                title='Graphic Design'
                department='English Department'
                oldPrice="16.48"
                price="6.48"
            />

            <ProductCard
                image='/images/bestseller-cover-4.png'
                title='Graphic Design'
                department='English Department'
                oldPrice="16.48"
                price="6.48"
            />
        </section>
    );
};

export default BestsellersVertical;

