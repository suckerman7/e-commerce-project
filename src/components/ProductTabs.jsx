import {useState} from 'react';
import { ChevronRight } from "lucide-react";

const ProductTabs = ({ product }) => {

    const [activeTab, setActiveTab] = useState("description");

    if (!product) return null;

    const {
        description,
        images = [],
    } = product;

    const mainImage = images[0]?.url;

    const tabs = [
        { id: "description", label: "Description" },
        { id: "addinfo", label: "Additional Information" },
        { id: "review", label: "Reviews (0)" },
    ];

    return (
        <section className='mt-12 font-montserrat'>
            <div className='flex justify-center gap-8 border-b border-[#ECECEC]'>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-4 text-sm font-semibold transition ${
                            activeTab === tab.id
                            ? "underline text-[#252B42] border-b-2 border-[#23A6F0]"
                            : "text-[#737373]"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className='mt-8 max-w-6xl mx-auto px-4'>
                {activeTab === "description" && (
                    <div className='flex flex-col gap-8 lg:flex-row lg:items-start'>

                        <div className='lg:w-3/5'>
                            <img
                                src={mainImage}
                                alt={product.name}
                                className='rounded-xl w-full object-cover'
                            />
                        </div>

                        <div className='lg:w-2/5'>
                            <h3 className='font-bold text-2xl text-[#252B42] mb-4'>
                                Product Description
                            </h3>

                            <p className='text-sm text-[#737373] leading-relaxed mb-4 whitespace-pre-line'>
                                {description || "No description available."}
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === "addinfo" && (
                    <div className='space-y-4 lg:items-center'>
                        <h3 className='font-bold text-2xl text-[#252B42]'>
                            Additional Information
                        </h3>

                        <ul className='font-bold space-y-2 text-sm text-[#737373]'>
                            <li className='flex items-center gap-2'>
                                <ChevronRight size={20}/> 
                                <span>Stock: {product.stock}</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <ChevronRight size={20}/> 
                                <span>Rating: {product.rating}</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <ChevronRight size={20}/> 
                                <span>Sold: {product.sell_count}</span>
                            </li>
                        </ul>
                    </div>
                )}

                {activeTab === "review" && (
                    <p className='text-sm text-center text-[#737373]'>
                        There are no reviews yet.
                    </p>
                )}
            </div>
        </section>
    );
};

export default ProductTabs;