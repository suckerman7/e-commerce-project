import { useSelector, useDispatch } from "react-redux";
import { 
    removeFromCart, 
    increaseCount, 
    decreaseCount, 
    toggleChecked, 
    toggleAllChecked
} from "../store/cart/cartReducer";

const ShoppingCartPage = () => {

    const dispatch = useDispatch();

    const cart = useSelector(
        state => state.cart.cart
    );

    const allChecked = cart.length >= 0 && cart.every(item => item.checked);

    const selectedTotal = cart
        .filter(item => item.checked)
        .reduce((acc, item) => acc + item.product.price * item.count, 0);

    const totalCount = cart.reduce((acc, item) => acc + item.count, 0);

    const selectedItems = cart.filter(item => item.checked)

    const productTotal = selectedItems.reduce(
        (acc, item) => acc + item.product.price * item.count, 0
    );

    const SHIPPING_FEE = 29.99;
    const FREE_SHIPPING_LIMIT = 150;

    const shippingCost = 
        productTotal >= FREE_SHIPPING_LIMIT || productTotal === 0
            ? 0
            : SHIPPING_FEE;

    const discount = 0;

    const grandTotal = productTotal + shippingCost - discount;

    if (cart.length === 0) {
        return (
            <div className='max-w-6xl mx-auto py-16 px-4'>
                <h2 className='text-2xl font-semibold'>Your cart is empty.</h2>
            </div>
        );
    }

    return (
        <div className='max-w-6xl mx-auto py-12 px-4'>
            <h1 className='text-3xl font-bold mb-8'>
                My Cart ({totalCount} Products)
            </h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                <div className='lg:col-span-2'>

                    <div className='flex items-center mb-4'>
                        <input
                            type='checkbox'
                            checked={allChecked}
                            onChange={(e) => dispatch(toggleAllChecked(e.target.checked))}
                            className='w-4 h-4 mr-2'
                        />
                        <span>Select All</span>
                    </div>

                    <div className='bg-white shadow rounded-lg divide-y'>

                        {cart.map(item => (
                            <div
                                key={item.product.id}
                                className='flex items-center gap-6 p-6'
                            >
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => dispatch(toggleChecked(item.product.id))}
                                    className='w-5 h-5'
                                />

                                <img
                                    src={item.product.images[0]?.url}
                                    alt={item.product.name}
                                    className='w-24 h-24 object-cover rounded'
                                />

                                <div className='flex-1'>
                                    <h3 className='font-semibold'>
                                        {item.product.name}
                                    </h3>

                                    <p className='text-sm text-[#737373] mt-1'>
                                        Price: ${item.product.price}
                                    </p>
                                </div>
                                

                                <div className='flex items-center border rounded'>
                                    <button
                                        onClick={() => dispatch(decreaseCount(item.product.id))}
                                        disabled={item.count === 1}
                                        className='px-3 py-1 disabled:opacity-30'
                                    >
                                        -
                                    </button>

                                    <span className='px-4'>
                                        {item.count}
                                    </span>

                                    <button
                                        onClick={() => dispatch(increaseCount(item.product.id))}
                                        className='px-3 py-1'
                                    >
                                        +
                                    </button>
                                </div> 

                                <div className='w-28 text-right font-semibold'>
                                    ${(item.product.price * item.count).toFixed(2)}
                                </div>

                                <button
                                    onClick={() => dispatch(removeFromCart(item.product.id))}
                                    className='text-[#E74040] ml-4'
                                >
                                    Remove
                                </button>   
                            </div>
                        ))}
                    </div>
                </div>

                <div className='lg:col-span-1'>
                    <div className='sticky top-24 bg-white border rounded-lg p-6 shadow'>

                        <h3 className='text-xl font-bold mb-6'>
                            Order Summary
                        </h3>

                        <div className='flex justify-between mb-3 text-sm'>
                            <span>Products Total</span>
                            <span>${productTotal.toFixed(2)}</span>
                        </div>

                        <div className='flex justify-between mb-3 text-sm'>
                            <span>Shipping</span>
                            <span>
                                {shippingCost === 0
                                    ? "Free"
                                    : `$ ${shippingCost.toFixed(2)}`
                                }
                            </span>
                        </div>

                        {discount > 0 && (
                            <div className='flex justify-between mb-3 text-sm text-[#2DC071]'>
                                <span>Discount</span>
                                <span>-${discount.toFixed(2)}</span>
                            </div>
                        )}

                        <div className='border-t pt-4 flex justify-between font-bold text-lg'>
                            <span>Total</span>
                            <span>${grandTotal.toFixed(2)}</span>
                        </div>

                        <button
                            className='w-full mt-6 bg-[#F27A1A] hover:bg-[#D96A14] text-white py-3 rounded-lg font-semibold'
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShoppingCartPage;