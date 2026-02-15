import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart/cartReducer';

const cartDropdown = ({ cart, totalCount, isMobile = false}) => {
    const dispatch = useDispatch();

    return (
        <div
            className={`
                bg-white shadow-xl rounded-lg p-4 z-50 border
                ${isMobile
                    ? "fixed inset-x-4 top-24"
                    : "absolute right-0 mt-4 w-80"}
            `}
        >
            <h4 className='font-semibold text-[#252B42] mb-3'>
                Shopping Cart ({totalCount})
            </h4>

            {cart.length === 0 ? (
                <p className='text-sm text-[#737373]'>
                    Your cart is empty.
                </p>
            ) : (
                <>
                    <div className='flex flex-col gap-4 max-h-60 overflow-y-auto'>
                        {cart.map(item => (
                            <div
                                key={item.product.id}
                                className='flex items-center gap-3'
                            >
                                <img
                                    src={item.product.images[0]?.url}
                                    alt={item.product.name}
                                    className='w-14 h-14 object-cover rounded'
                                />

                                <div className='flex-1'>
                                    <p className='text-sm font-medium'>
                                        {item.product.name}
                                    </p>
                                    
                                    <p className='text-xs text-gray-500'>
                                        {item.count} x ${item.product.price}
                                    </p>
                                </div>

                                <button
                                    onClick={() => dispatch(removeFromCart(item.product.id))}
                                    className='text-[#E74040] text-sm'
                                >
                                    <X size={16}/>
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default cartDropdown;