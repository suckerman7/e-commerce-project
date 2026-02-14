import { Link } from "react-router-dom";

const ProductDetailHeader = ({product, category}) => {

    if (!product || !category) return null;

    const slugify = (text) =>
    text
        ?.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

    const categoryUrl = `/shop/${category.gender}/${slugify(category.title)}/${category.id}`;

    return (
        <div className='py-10 text-center font-montserrat flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between'>
            <div className='text-sm text-[#737373] flex justify-center gap-3'>
                <Link to="/" className="hover:text-[#23A6F0]">
                    Home
                </Link>

                <span>/</span>

                <Link to="/shop" className="hover:text-[#23A6F0]">
                    Shop
                </Link>

                <span>/</span>

                <Link to={categoryUrl} className="hover:text-[#23A6F0]">
                    {category.title}
                </Link>

                <span>/</span>

                <span className="text-[#252B42] font-semibold">
                    {product.name}
                </span>
            </div>
        </div>
    );
};

export default ProductDetailHeader;