import React from 'react';

import ShopHeader from '../components/ShopHeader';
import CategoryCard from '../components/CategoryCard';
import ShopToolbar from '../components/ShopToolbar';
import ProductCard from '../components/ProductCard';
import ClientsSection from '../components/ClientsSection';
import Pagination from '../components/Pagination';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryUrl } from '../utils/categoryHelpers';
import { fetchProducts } from '../store/product/productThunks';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { setCategoryId, setSort, setFilter, setOffset, setLimit } from '../store/product/productReducer';

const ShopPage = () => {

    const dispatch = useDispatch();
    const { categoryId } = useParams();

    const location = useLocation();
    const history = useHistory();

    const { categories, fetchState } = useSelector(
        (state) => state.category || { categories: [], fetchState: "idle" }
    );

    const { productList, fetchState: productFetchState, } = useSelector(
        (state) => state.product || initialState
    );

    const { categoryId: cat, sort, filter, offset, limit } = useSelector(
        (state) => state.product
    );

    useEffect(() => {
        dispatch(setCategoryId(categoryId ? Number(categoryId) : null));
    }, [categoryId, dispatch]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        const urlSort = params.get("sort") || "";
        const urlFilter = params.get("filter") || "";
        const urlLimit = params.get("limit");
        const urlOffset = params.get("offset");

        if (urlSort !== sort) dispatch(setSort(urlSort));
        if (urlFilter !== filter) dispatch(setFilter(urlFilter));

        if (urlLimit !== null && Number(urlLimit) !== limit)
            dispatch(setLimit(Number(urlLimit)));

        if (urlOffset !== null && Number(urlOffset) !== offset)
            dispatch(setOffset(Number(urlOffset)));

    }, [location.search]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        params.set("limit", limit);
        params.set("offset", offset);

        if (sort) params.set("sort", sort);
        else params.delete("sort");

        if (filter) params.set("filter", filter);
        else params.delete("filter");

        history.replace({
            pathname: location.pathname,
            search: params.toString(),
        });
    }, [sort, filter, limit, offset]);


    useEffect(() => {
        dispatch(setOffset(0));
    }, [cat, sort, filter])

    useEffect(() => {
        dispatch(fetchProducts());
    }, [cat, sort, filter, offset, limit, dispatch]);


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
                {productFetchState === "FETCHING" && (
                    <div className='col-span-full flex justify-center py-16'>
                        <div className='w-10 h-10 border-4 border-gray-200 border-t-[#236AF0] rounded-full animate-spin' />
                    </div>
                )}

                {productFetchState === "FETCHED" && 
                    productList.map((product, i) => (
                        <div key={product.id} className={i >= 4 ? 'hidden lg:block' : ''}>
                            <ProductCard
                                variant="popular"
                                image={product.images?.[0]?.url}
                                title={product.name}
                                department={product.category?.title || ""}
                                oldPrice={product.old_price}
                                price={product.price}
                                sales={product.sell_count}
                                colors={product.colors || []}
                            />
                        </div>
                ))}

                {productFetchState === "FETCHED" && productList.length === 0 && (
                    <div className="col-span-full text-center py-16 text-gray-500">
                        No products found in this category.
                    </div>
                )}
            </div>

            <Pagination />

            <ClientsSection />
        </>
    );
};

export default ShopPage;

