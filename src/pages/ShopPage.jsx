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

            <div className='flex flex-col gap-4.75 px-4'>
                <CategoryCard title='CLOTHS' count={5} />
                <CategoryCard title='CLOTHS' count={5} />
                <CategoryCard title='CLOTHS' count={5} />
                <CategoryCard title='CLOTHS' count={5} />
                <CategoryCard title='CLOTHS' count={5} />
            </div>

            <ShopToolbar />

            <div className='grid grid-cols-2 gap-4 px-4 mt-8'>
                <ProductCard variant='popular' />
                <ProductCard variant='popular' />
                <ProductCard variant='popular' />
                <ProductCard variant='popular' />
            </div>

            <Pagination />

            <ClientsSection />
        </>
    );
};

export default ShopPage;

