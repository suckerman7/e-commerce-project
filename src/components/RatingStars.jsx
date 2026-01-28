import { Star } from "lucide-react";
import { useState } from 'react';

const RatingStars = ({
    max = 5,
    value = 0,
    onChange,
    size = 20,
}) => {
    const [hover, setHover] = useState(null);

    return (
        <div className='flex gap-1'>
            {Array.from({ length: max}).map((_, index) => {
                const ratingValue = index + 1;

                const isActive =
                    hover !== null
                        ? ratingValue <= hover
                        : ratingValue <= value;

                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => onChange?.(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        className='cursor-pointer'
                    >
                        <Star
                            size={size}
                            className={
                                isActive
                                    ? "fill-yellow-400 stroke-yellow-400"
                                    : "stroke-yellow-400"
                            }
                        />
                    </button>
                );
            })}
        </div>
    );
};

export default RatingStars; 