import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const DetailsBestseller = () => {

    const { productList } = useSelector(state => state.product);

    return (
        <section className='font-montserrat max-w-6xl mx-auto px-4 mt-16'>
            <h3 className='text-2xl font-bold mb-6 text-[#252B42] text-center lg:text-left'>
                BESTSELLER PRODUCTS
            </h3>

            <div className="w-full h-px bg-[#ECECEC] my-6" />

            <div className='flex flex-col gap-6 lg:grid lg:grid-cols-4'>
                {productList.slice(0,8).map((product, index) => (
                    <div
                        key={product.id}
                        className={index >= 4 ? 'hidden lg:block' : ''}
                    >
                        <ProductCard
                           product={product}
                           variant="default"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DetailsBestseller;