import React from "react";
import {Link} from 'react-router-dom';

const CategoryBanner = ({
    title,
    itemCount,
    image,
    link = "/products",
}) => {
    return (
        <Link to={link}>
            <div className='relative rounded-2xl overflow-hidden font-montserrat'>
                <img
                    src={image}
                    alt={title}
                    className='w-full h-64 lg:h-full object-cover'
                />

                <div className='absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded-lg'>
                    <h6 className='text-[#252b42] text-sm font-bold uppercase'>
                        {title}
                    </h6>
                    <h6 className='text-sm font-bold text-[#737373]'>
                        {itemCount} Items
                    </h6>
                </div>
            </div>
        </Link>
    );
};

export default CategoryBanner;

