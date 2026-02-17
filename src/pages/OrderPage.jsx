import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import OrderAddressPage from './OrderAddressPage';
import PaymentSection from '../components/order/PaymentSection';
import { submitOrder } from '../store/order/OrderReducer';
import { clearCart } from '../store/cart/cartReducer';

const OrderPage = () => {
    const cart = useSelector(state => state.cart.cart);
    const selectedAddressId = useSelector(state => state.address.selectedAddressId);
    const selectedCardId = useSelector(state => state.card.selectedCardId);

    const [selectedInstallment, setSelectedInstallment] = useState(null);

    const selectedItems = cart.filter(item => item.checked);

    const productTotal = selectedItems.reduce(
        (acc, item) => acc + item.product.price * item.count, 0
    );

    const isPaymentDisabled = !selectedAddressId || !selectedCardId || !selectedInstallment;

    const formatPrice = (price) =>
        `$${price.toFixed(2)}`;

    const dispatch = useDispatch();
    const { list: cards } = useSelector(state => state.card);

    const { success } = useSelector(state => state.order);

    if (success) {
        return (
            <div className="max-w-4xl mx-auto py-20 text-center">
                <h2 className='text-3xl font-bold text-[#2DC071] mb-4'>
                    🎉 Siparişiniz Alındı!
                </h2>
                <p className='text-[#737373]'>
                    Siparişiniz başarıyla oluşturuldu. Teşekkür ederiz.
                </p>
            </div>
        );
    }

    if (selectedItems.length === 0) {
        return (
            <div className='max-w-4xl mx-auto py-20 text-center'>
                <h2 className='text-2xl text-[#737373] font-semibold'>
                    Sepette ürün bulunamadı.
                </h2>
            </div>
        );
    }

    const handlePayment = async () => {

        const selectedCard = cards.find(c => c.id === selectedCardId)

        const payload = {
            address_id: selectedAddressId,
            order_date: new Date().toISOString(),
            card_no: Number(selectedCard.card_no),
            card_name: selectedCard.name_on_card,
            card_expire_month: selectedCard.expire_month,
            card_expire_year: selectedCard.expire_year,
            card_ccv: 321,
            price: productTotal,
            products: selectedItems.map(item => ({
                product_id: item.product.id,
                count: item.count,
                detail: item.product.detail || ""
            }))
        };

        const result = await dispatch(submitOrder(payload));

        if (submitOrder.fulfilled.match(result)) {
            dispatch(clearCart());
        }
    };

    return (
        <div className="max-w-7xl mx-auto py-12 px-4">

            <h1 className='text-3xl font-bold text-[#252B42] mb-8'>
                Checkout
            </h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                <div className='lg:col-span-2 space-y-8'>
                    <OrderAddressPage />
                    <PaymentSection
                        selectedInstallment={selectedInstallment}
                        onSelectInstallment={setSelectedInstallment}
                    />
                </div>

                <div className='bg-white p-6 rounded-lg shadow h-fit'>

                    <h3 className='font-bold text-lg mb-6'>
                        Sipariş Özeti
                    </h3>

                    <div className='space-y-3 text-sm'>
                        {selectedItems.map(item => (
                            <div
                                key={item.product.id}
                                className='flex justify-between'
                            >
                                <span>
                                    {item.product.name} x {item.count}
                                </span>
                                <span>
                                    {formatPrice(item.product.price * item.count)}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className='border-t mt-6 pt-4 flex justify-between font-bold'>
                        <span>Toplam</span>
                        <span>{formatPrice(productTotal)}</span>
                    </div>

                    {isPaymentDisabled &&(
                        <p className='text-sm text-[#E74040] mt-3'>
                            Lütfen adres, kart, taksit seçimi yapın.
                        </p>
                    )}

                    <button 
                        disabled={isPaymentDisabled}
                        onClick={handlePayment}
                        className={`
                            w-full mt-6 py-3 rounded-lg font-semibold
                            ${isPaymentDisabled
                                ? "bg-[#252B42] text-[#737373] cursor-not-allowed"
                                : "bg-[#F27A1A] hover:bg-[#D96A14] text-white"
                        }`}
                    >
                        Ödeme Yap
                    </button>
                    
                </div>
            </div>

        </div>
    );
};

export default OrderPage;