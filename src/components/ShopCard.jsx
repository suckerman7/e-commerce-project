import React from "react";
import { Link } from 'react-router-dom';

const ShopCard = ({
    badge,
    title,
    subtitle,
    image,
    link = "/products",
}) => {
    return (
        <Link to={link}>
            <div className='bg-[#FAFAFA] rounded-2xl p-4 flex items-center justify-between shadow-sm font-montserrat'>
                <div>
                    {badge && (
                        <p className='text-sm text-[#737373] mb-1'>
                            {badge}
                        </p>
                    )}
                    <h3 className='font-bold text-2xl text-[#252B42]'>
                        {title}
                    </h3>
                    <p className='text-xs text-[#252B42] mt-1'>
                        {subtitle}
                    </p>
                </div>

                <div className='ml-4'>
                    <img
                        src={image}
                        alt={title}
                        className='h-20 w-20 object-contain'
                    />
                </div>
            </div>
        </Link>
    );
};

export default ShopCard;