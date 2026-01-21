import React from 'react';

const ProductCard = ({
    image,
    title,
    department,
    price,
    oldPrice,
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-4 w-full font-montserrat">
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
                    <p className='text-sm text-[#737373] mt-1'>
                        {department}
                    </p>
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
            </div>
        </div>
    );
};

export default ProductCard;