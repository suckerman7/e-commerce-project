import React from 'react';

import ProductDetailHeader from '../components/ProductDetailHeader';
import ClientsSection from '../components/ClientsSection';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
    return (
        <>
            <ProductDetailHeader />

            <ProductDetail />

            

            <ClientsSection />
        </>
    );
};

export default ProductDetailPage;