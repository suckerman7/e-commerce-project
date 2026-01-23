import React from "react";
import {Link} from 'react-router-dom';

const CategoryBanner = ({
    title,
    itemCount,
    image,
    link = "/products",
}) => {
    return (
        <Link to={link} className="block h-full">
            <div className="relative w-full h-full min-h-105 rounded-2xl overflow-hidden font-montserrat">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-10 p-6 lg:p-8">
                    <h6 className="text-[#252B42] text-sm font-bold uppercase">
                        {title}
                    </h6>
                    <h6 className="text-sm font-bold text-[#737373]">
                        {itemCount} Items
                    </h6>
                </div>
            </div>
        </Link>
    );
};

export default CategoryBanner;

