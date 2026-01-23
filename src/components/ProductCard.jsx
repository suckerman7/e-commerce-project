import { Download } from 'lucide-react';
import React from 'react';

const ProductCard = ({
    image,
    title,
    department,
    price,
    oldPrice,
    variant = 'default',
    sales,
    colors = []
}) => {

    const baseClass = 'bg-white rounded-2xl shadow-sm p-4 w-full';

    const variantClasses = {
        default: "",
        bestseller: "border border-blue-500",
        popular: "shadow-md"
    };

    return (
        <div className={`${baseClass} ${variantClasses[variant]}`}>
            <div className="flex justify-center mb-4">
                <img
                    src={image}
                    alt={title}
                    className='h-40 object-contain'
                />
            </div>

            <div className="text-center">
                <h3 className='font-bold text-[#252B42]'>
                    {title}
                </h3>

                {department && (
                    <p className='text-sm text-[#737373] mt-1 font-bold'>
                        {department}
                    </p>
                )}

                {variant === "popular" && sales && (
                    <div className='flex items-center justify-center gap-1 text-sm text-[#737373] font-bold mt-2'>
                        <Download size={16} />
                        <span>{sales} Sales</span>
                    </div>
                )}

                <div className="flex justify-center items-center gap-2 mt-2">
                    {oldPrice && (
                        <h5 className='text-[#BDBDBD] line-through'>
                            ${oldPrice}
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
    );
};

export default ProductCard;