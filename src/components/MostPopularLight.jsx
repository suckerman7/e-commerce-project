import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { getTopRatedProducts } from "../utils/productSelectors";

const MostPopularLight = () => {
  const products = useSelector(state => state.product.productList);
  const [product] = getTopRatedProducts(products, 1);

  if (!product) return null;

  const image =
    product.images?.[0]?.url ||
    product.images?.[0] ||
    "/placeholder.jpg";

  return (
    <section className="font-montserrat bg-[#FAFAFA] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">

          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div>
              <h3 className="font-bold text-2xl text-[#252B42]">
                MOST POPULAR
              </h3>
              <p className="text-[#737373] text-sm mt-2">
                We focus on ergonomics and meeting you where you work.
                It's only a keystroke away.
              </p>
            </div>

            <div className="lg:hidden">
              <ProductCard product={product} />
            </div>

            <div className="hidden lg:block max-w-sm">
              <ProductCard product={product} />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={image}
              alt={product.name}
              className="w-full h-100 lg:h-130 rounded-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MostPopularLight;