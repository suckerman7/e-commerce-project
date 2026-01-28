import ProductCard from "./ProductCard";

const products = Array.from({ length: 8 });

const DetailsBestseller = () => {
    return (
        <section className='font-montserrat max-w-6xl mx-auto px-4 mt-16'>
            <h3 className='text-2xl font-bold mb-6 text-[#252B42] text-center lg:text-left'>
                BESTSELLER PRODUCTS
            </h3>

            <div className="w-full h-px bg-[#ECECEC] my-6" />

            <div className='flex flex-col gap-6 lg:grid lg:grid-cols-4'>
                {products.map((_, index) => (
                    <div
                        key={index}
                        className={index >= 4 ? 'hidden lg:block' : ''}
                    >
                        <ProductCard
                            image={`/images/description-bestseller-${(index % 4) + 1}.png`}
                            title='Graphic Design'
                            department='English Department'
                            price='16.48'
                            oldPrice='6.48'
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DetailsBestseller;