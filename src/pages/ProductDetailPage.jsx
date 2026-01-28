import React from 'react';

import ProductDetailHeader from '../components/ProductDetailHeader';
import ClientsSection from '../components/ClientsSection';
import ProductDetail from '../components/ProductDetail';
import ProductTabs from '../components/ProductTabs';
import DetailsBestseller from '../components/DetailsBestseller';

const ProductDetailPage = () => {
    return (
        <>
            <ProductDetailHeader />

            <ProductDetail />

            <ProductTabs />

            <DetailsBestseller />

            <ClientsSection />
        </>
    );
};

export default ProductDetailPage;