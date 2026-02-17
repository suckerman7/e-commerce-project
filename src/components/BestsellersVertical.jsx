import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { getTopRatedProducts } from "../utils/productSelectors";

const BestsellersVertical = () => {

    const products = useSelector(state => state.product.productList);
    const bestsellers = getTopRatedProducts(products, 4);

    return (
        <section className='font-montserrat'>
            <h3 className='font-bold text-2xl text-[#252B42] uppercase mb-6'>
                Bestseller Products
            </h3>

            <div className='flex flex-col gap-6 lg:grid lg:grid-cols-4 lg:gap-8'>
                    {bestsellers.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
            </div>
        </section>
    );
};

export default BestsellersVertical;

