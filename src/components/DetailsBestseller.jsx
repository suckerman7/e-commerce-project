import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const DetailsBestseller = ({ currentProduct }) => {

    const { productList } = useSelector(state => state.product);

    if (!currentProduct) return null;

    const bestSellerProducts = productList
        .filter(p =>
            p.category_id === currentProduct.category_id &&
            p.id !== currentProduct.id
        )
        .sort((a,b) => b.sell_count - a.sell_count)
        .slice(0,8);

    if (!bestSellerProducts.length) return null;

    return (
        <section className='font-montserrat max-w-6xl mx-auto px-4 mt-16'>
            <h3 className='text-2xl font-bold mb-6 text-[#252B42] text-center lg:text-left'>
                BESTSELLER PRODUCTS
            </h3>

            <div className="w-full h-px bg-[#ECECEC] my-6" />

            <div className='flex flex-col gap-6 lg:grid lg:grid-cols-4'>
                {bestSellerProducts.map((product, index) => (
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