import { Download } from 'lucide-react';
import React from 'react';
import {Link} from 'react-router-dom';

const ProductCard = ({
    product,
    variant = "default",
}) => {

    if (!product) return null;

    const {
        id,
        name,
        price,
        old_price,
        sell_count,
        images,
        colors = [],
        category
    } = product;

    const image = images?.[0]?.url;
    const department = category?.title;

    const productUrl = `/product/${id}`;

    const baseClass = 'bg-white rounded-2xl shadow-sm p-4 w-full';

    const variantClasses = {
        default: "",
        bestseller: "border border-blue-500",
        popular: "shadow-md"
    };

    return (
        <Link to={productUrl} className="block h-full cursor-pointer hover:shadow-lg transition">
            <div className={`${baseClass} ${variantClasses[variant]}`}>
                <div className="flex justify-center mb-4">
                    <img
                        src={image}
                        alt={name}
                        className='h-40 object-contain'
                    />
                </div>

                <div className="text-center">
                    <h3 className='font-bold text-[#252B42]'>
                        {name}
                    </h3>

                    {department && (
                        <p className='text-sm text-[#737373] mt-1 font-bold'>
                            {department}
                        </p>
                    )}

                    {variant === "popular" && sell_count && (
                        <div className='flex items-center justify-center gap-1 text-sm text-[#737373] font-bold mt-2'>
                            <Download size={16} />
                            <span>{sell_count} Sales</span>
                        </div>
                    )}

                    <div className="flex justify-center items-center gap-2 mt-2">
                        {old_price && (
                            <h5 className='text-[#BDBDBD] line-through'>
                                ${old_price}
                            </h5>
                        )}
                        <h5 className='text-[#23856D] font-bold'>
                            ${price}
                        </h5>
                    </div>

                    {variant === "popular" && colors.length > 0 && (
                        <div className='flex justify-center gap-2 mt-3'>
                            {colors.map((color, index) => (
                                <span
                                    key={index}
                                    className='w-4 h-4 rounded-full'
                                    style={{backgroundColor: color}}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;