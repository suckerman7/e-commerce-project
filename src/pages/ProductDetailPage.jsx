import React from 'react';

import ClientsSection from '../components/ClientsSection';
import ProductDetail from '../components/ProductDetail';

import { useHistory } from "react-router-dom";

const ProductDetailPage = () => {

    const history = useHistory();

    return (
        <>

            <button
                onClick={() => history.goBack()}
                className='text-sm font-bold text-[#236AF0] mb-4'

            >
                ← Back
            </button>

            <ProductDetail />

            <ClientsSection />
        </>
    );
};

export default ProductDetailPage;