import React from 'react';

import ShopHeader from '../components/ShopHeader';
import CategoryCard from '../components/CategoryCard';
import ShopToolbar from '../components/ShopToolbar';
import ProductCard from '../components/ProductCard';
import ClientsSection from '../components/ClientsSection';
import Pagination from '../components/Pagination';

import { useSelector } from 'react-redux';
import { getCategoryUrl } from '../utils/categoryHelpers';

const ShopPage = () => {

    const { categories, fetchState } = useSelector(
        (state) => state.category || { categories: [], fetchState: "idle" }
    );

    const topCategories = categories
        .slice()
        .sort((a,b) => b.rating - a.rating)
        .slice(0, 5);

    if (fetchState === "loading") {
        return null;
    }

    return (
        <>
            <ShopHeader />

            <div className='flex flex-col gap-4.75 px-4 lg:flex-row lg:gap-6 lg:px-8 lg:flex-wrap'>
                {topCategories.map((category) => (
                    <div key={category.id} className='lg:w-[18%]'>
                        <CategoryCard
                            title={category.title}
                            image={category.img}
                            count={5}
                            to={getCategoryUrl(category)}
                        />
                    </div>
                ))}
            </div>

            <ShopToolbar />

            <div className='grid grid-cols-2 gap-4 px-4 mt-8 lg:grid-cols-3 lg:px-8'>
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className={i >= 4 ? 'hidden lg:block' : ''}>
                        <ProductCard
                            key={i}
                            variant="popular"
                            image="/images/cashews.png"
                            title="Graphic Design"
                            department="English Department"
                            oldPrice="16.48"
                            price="6.48"
                            sales={15}
                            colors={["#23A6F0", "#23856D", "#E77C40", "#252B42"]}
                        />
                    </div>
                ))}
            </div>

            <Pagination />

            <ClientsSection />
        </>
    );
};

export default ShopPage;

