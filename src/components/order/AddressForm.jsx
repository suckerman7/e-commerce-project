import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAddress, editAddress } from '../../store/address/addressReducer';

const AddressForm = ({ editAddress, onClose }) => {
    const dispatch = useDispatch();

    const ADDRESS_FIELDS = [
        {name: "title", label: "Address Title", type: "text" },
        {name: "name", label: "Name", type: "text" },
        {name: "surname", label: "Surname", type: "text" },
        {name: "phone", label: "Phone Number", type: "tel" },
        {name: "city", label: "City", type: "select" },
        {name: "district", label: "District", type: "text" },
        {name: "neighborhood", label: "Neighborhood / Address", type: "textarea" },
    ];

    const [form, setForm] = useState({
        title: editAddress?.title || "",
        name: editAddress?.name || "",
        surname: editAddress?.surname || "",
        phone: editAddress?.phone || "",
        city: editAddress?.city || "",
        district: editAddress?.district || "",
        neighborhood: editAddress?.neighborhood || "",
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (editAddress) {
            await dispatch(editAddress({ id: editAddress.id, ...form }));
        } else {
            await dispatch(addAddress(form));
        }

        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-xl font-bold mb-4 text-[#252B42]'>
                {editAddress ? "Edit Address" : "New Address"}
            </h3>

            {ADDRESS_FIELDS.map(field => {
                if (field.type === "textarea") {
                    return (
                        <textarea
                            key={field.name}
                            name={field.name}
                            type={field.type}
                            value={form[field.name]}
                            onChange={handleChange}
                            placeholder={field.label}
                            className='w-full border p-2 mb-3 rounded'
                            rows={3}
                        />
                    );
                }

                if (field.type === "select") {
                    return (
                        <select
                        key={field.name}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        className='w-full border p-2 mb-3 rounded'
                    >
                        <option value="">Select City</option>
                        <option value="istanbul">Istanbul</option>
                        <option value="ankara">Ankara</option>
                    </select>
                    );
                }

                return (
                    <input
                        key={field.name}
                        name={field.name}
                        type={field.type}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.label}
                        className='w-full border p-2 mb-3 rounded'
                    />
                );
            })}

            <div className="flex justify-end gap-4">
                <button type="button" onClick={onClose} className='text-white px-6 py-2 rounded bg-[#E74040]'>
                    Cancel
                </button>
                <button className='bg-[#F27A1A] text-white px-6 py-2 rounded'>
                    Save
                </button>
            </div>
        </form>
    );
};

export default AddressForm;