import { useState } from "react";
import RatingStars from './RatingStars';
import ProductSlider from "./ProductSlider";
import { Heart, ShoppingCart, Eye} from 'lucide-react';

const sliderImages = [
    {
        image: "/images/product-slider-1.jpg"
    },
    {
        image: "/images/product-slider-2.jpg"
    },
]

const ProductDetail = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [rating, setRating] = useState(4);

    return (
        <section className='font-montserrat max-w-6xl mx-auto px-4'>
            <div className='flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-12'>

                <div>
                    <ProductSlider
                        currentImage={currentImage} 
                        setCurrentImage={setCurrentImage}
                    />

                    <div className='flex gap-4 mt-4 justify-center lg:justify-start'>
                        {sliderImages.map((item, index) => (
                            <button key={index} onClick={() => setCurrentImage(index)} className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${
                                index === currentImage
                                ? 'border-[#23A6F0]'
                                : 'border-transparent'
                            }`}
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className='w-full h-full object-cover'
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-bold text-[#252B42]'>
                        Floating Phone
                    </h2>

                    <div className='flex items-center gap-2 mt-2'>
                        <RatingStars
                            value={rating}
                            onChange={setRating}
                            size={18}
                        />
                        <span className='text-sm font-bold text-[#737373]'>
                            {rating} / 5 . 10 Reviews
                        </span>
                    </div>

                    <p className='text-2xl font-bold text-[#252B42] mt-4'>
                        $1,139.33
                    </p>

                    <p className='text-sm mt-3'>
                        Availability : 
                        <span className='text-[#23A6F0] font-bold'> In Stock</span>
                    </p>

                    <p className='text-sm text-[#737373] mt-4 leading-relaxed'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT Mollie.
                    </p>

                    <div className="w-full h-px bg-[#BDBDBD] my-6" />

                    <div className="flex gap-3 mt-6">
                        <button className="w-8 h-8 rounded-full bg-[#23A6F0]" />
                        <button className="w-8 h-8 rounded-full bg-[#2DC071]" />
                        <button className="w-8 h-8 rounded-full bg-[#E77C40]" />
                        <button className="w-8 h-8 rounded-full bg-[#252B42]" />
                    </div>

                    <div className='flex items-center gap-4 mt-10'>
                        <button className='bg-[#23A6F0] text-white px-6 py-3 rounded-lg text-sm font-bold'>
                            Select Options
                        </button>

                        <button className='w-10 h-10 border rounded-full flex items-center justify-center'>
                            <Heart size={18} />
                        </button>

                        <button className='w-10 h-10 border rounded-full flex items-center justify-center'>
                            <ShoppingCart size={18} />
                        </button>

                        <button className='w-10 h-10 border rounded-full flex items-center justify-center'>
                            <Eye size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;