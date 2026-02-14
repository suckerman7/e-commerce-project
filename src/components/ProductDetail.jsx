import { useState, useEffect } from "react";
import RatingStars from './RatingStars';
import ProductSlider from "./ProductSlider";
import { Heart, ShoppingCart, Eye} from 'lucide-react';

import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/product/productThunks";
import { clearSelectedProduct } from "../store/product/productReducer";

const slugify = (text) =>
    text
        ?.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

const ProductDetail = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const { productId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const { selectedProduct, detailFetchState } = useSelector(
        state => state.product
    )

    const categories = useSelector(state => state.category.categories);
    const productCategory = selectedProduct
        ? categories.find(c => c.id === selectedProduct.category_id)
        : null;

    useEffect(() => {
        dispatch(fetchProductById(productId));

        return () => {
            dispatch(clearSelectedProduct());
        }
    }, [productId, dispatch])

    useEffect(() => {
        if (!selectedProduct || !productCategory) return;

        const seoUrl = `/shop/${productCategory.gender}/${slugify(productCategory.title)}/${productCategory.id}/${slugify(selectedProduct.name)}/${selectedProduct.id}`;

        history.replace(seoUrl);

    }, [selectedProduct, productCategory, history])

    useEffect(() => {
        setCurrentImage(0);
    }, [selectedProduct]);

    if (detailFetchState === "FETCHING" || !selectedProduct) {
        return (
            <div className='flex justify-center py-24'>
                <div className='w-12 h-12 border-4 border-gray-200 border-t-[#236AF0] rounded-full animate-spin' />
            </div>
        );
    }

    const sliderImages = selectedProduct.images || [];

    const ratingValue = Number(selectedProduct.rating) || 0;

    return (
        <section className='font-montserrat max-w-6xl mx-auto px-4'>

            <button
                onClick={() => history.goBack()}
                className='text-sm font-bold text-[#236AF0] mb-4'

            >
                ← Back
            </button>

            <div className='flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-12'>

                <div>
                    <ProductSlider
                        images={sliderImages}
                        currentImage={currentImage} 
                        setCurrentImage={setCurrentImage}
                    />

                    <div className='flex gap-3 mt-4 justify-center lg:justify-start'>
                        {sliderImages.map((item, index) => (
                            <button key={index} onClick={() => setCurrentImage(index)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                                index === currentImage
                                ? 'border-[#23A6F0]'
                                : 'border-gray-200'
                            }`}
                            >
                                <img
                                    src={item.url}
                                    alt=""
                                    className='w-full h-full object-cover'
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-bold text-[#252B42]'>
                        {selectedProduct.name}
                    </h2>

                    <div className='flex items-center gap-2 mt-2'>
                        <RatingStars
                            value={ratingValue}
                            size={18}
                        />
                        <span className='text-sm font-bold text-[#737373]'>
                            {ratingValue.toFixed(1)} / 5 . 10 Reviews
                        </span>
                    </div>

                    <p className='text-2xl font-bold text-[#252B42] mt-4'>
                        ${selectedProduct.price}
                    </p>

                    <p className='text-sm mt-3'>
                        Availability : 
                        <span className='text-[#23A6F0] font-bold'> 
                            {selectedProduct.stock > 0 ? " In Stock " : "Out of Stock"}
                        </span>
                    </p>

                    <p className='text-sm text-[#737373] mt-4 leading-relaxed'>
                        {selectedProduct.description}
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