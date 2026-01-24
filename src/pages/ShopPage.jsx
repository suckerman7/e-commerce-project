import React from 'react';

import ShopHeader from '../components/ShopHeader';
import CategoryCard from '../components/CategoryCard';
import ShopToolbar from '../components/ShopToolbar';
import ProductCard from '../components/ProductCard';
import ClientsSection from '../components/ClientsSection';
import Pagination from '../components/Pagination';

const ShopPage = () => {
    return (
        <>
            <ShopHeader />

            <div className='flex flex-col gap-4.75 px-4 lg:flex-row lg:gap-6 lg:px-8 lg:flex-wrap'>
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className='lg:w-[18%]'>
                        <CategoryCard title='CLOTHS' count={5} />
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

