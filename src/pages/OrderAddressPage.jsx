import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchAddresses,
    selectAddress
} from '../store/address/addressReducer';
import AddressForm from '../components/order/AddressForm';

const OrderAddressPage = () => {
    const dispatch = useDispatch();
    const { list, selectedAddressId } = useSelector(
        state => state.address
    );

    const [showForm, setShowForm] = useState(false);
    const [editAddress, setEditAddress] = useState(null);

    useEffect(() => {
        dispatch(fetchAddresses());
    }, [dispatch]);

    const cart = useSelector(state => state.cart.cart);
    
    const selectedItems = cart.filter(item => item.checked);

    return (
        <div className='max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2 space-y-6'>

                <h2 className='text-2xl text-[#252B42] font-bold'>
                    Delivery Address
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {list.map(address => (
                        <div
                            key={address.id}
                            className={`border rounded-lg p-4 cursor-pointer
                                ${selectedAddressId === address.id
                                    ? "border-[#F27A1A] bg-[#B75D14]"
                                    : "border-[#252B42]"
                                }`}
                            onClick={() =>
                                dispatch(selectAddress(address.id))
                            }
                        >
                            <h4 className='font-semibold text-[#252B42]'>
                                {address.title}
                            </h4>
                            <p className='text-sm'>
                                {address.name} {address.surname}
                            </p>
                            <p className='text-sm'>
                                {address.city} / {address.district}
                            </p>

                            <button
                                className='text-sm text-[#236AF0] mt-2'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setEditAddress(address);
                                    setShowForm(true);
                                }}
                            >
                                Edit
                            </button>
                        </div>
                    ))}

                    <button
                        onClick={() => {
                            setEditAddress(null);
                            setShowForm(true);
                        }}className='border-2 border-dashed rounded-lg p-6 text-center text-[#236AF0]'
                    >
                        + Add New Address
                    </button>
                </div>

                {showForm && (
                    <AddressForm
                        editAddress={editAddress}
                        onClose={() => setShowForm(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default OrderAddressPage;