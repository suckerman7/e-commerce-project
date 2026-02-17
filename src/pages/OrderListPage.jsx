import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../store/order/OrderReducer';

const OrderListPage = () => {
    const dispatch = useDispatch();
    const { orders, loading } = useSelector(state => state.order);

    const [openOrderId, setOpenOrderId] = useState(null);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const toggleOrderList = (id) => {
        setOpenOrderId(prev => prev === id ? null : id);
    };

    return (
        <div className="max-w-6xl mx-auto py-12 px-4">

            <h1 className='text-3xl font-bold mb-8 text-[#252B42]'>
                Siparişlerim
            </h1>

            {loading && (
                <p className='text-[#737373]'>
                    Siparişler yükleniyor...
                </p>
            )}

            {!loading && orders.length === 0 && (
                <p className='text-[#737373]'>
                    Henüz siparişiniz bulunmuyor.
                </p>
            )}

            {!loading && orders.length > 0 && (
                <div className='bg-white rounded-lg shadow overflow-hidden'>

                    <div className='grid grid-cols-5 bg-[#252B42] p-4 font-semibold text-sm'>
                        <span>ID</span>
                        <span>Tarih</span>
                        <span>Ürün Sayısı</span>
                        <span>Toplam</span>
                        <span></span>
                    </div>

                    {orders.map(order => (
                        <div key={order.id} className='border-t'>
                            <div className='grid grid-cols-5 p-4 items-center text-sm'>

                                <span>#{order.id}</span>

                                <span>
                                    {new Date(order.order_date).toLocaleDateString()}
                                </span>

                                <span>
                                    {order.products.length}
                                </span>

                                <span className='font-semibold'>
                                    ${Number(order.price || 0).toFixed(2)}
                                </span>

                                <button
                                    onClick={() => toggleOrderList(order.id)}
                                    className="text-[#236AF0]"
                                >
                                    {openOrderId === order.id
                                        ? "Gizle"
                                        : "Detay"
                                    }
                                </button>
                            </div>

                            {openOrderId === order.id && (
                                <div className='bg-gray-50 p-4 space-y-2 text-sm'>

                                        {order.products?.map(product => (
                                            <div
                                                key={product.product_id}
                                                className='flex justify-between'
                                            >
                                                <span>
                                                    Ürün ID: {product.product_id}
                                                    {" - "}
                                                    {product.detail}
                                                    {" x "}
                                                    {product.count}
                                                </span>

                                                <span>
                                                    ${(product.count * product.price)?.toFixed(2)}
                                                </span>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderListPage;