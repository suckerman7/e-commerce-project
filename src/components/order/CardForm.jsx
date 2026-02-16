import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/card/cardReducer';

const CardForm = ({ onClose }) => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        card_no: "",
        expire_month: "",
        expire_year: "",
        name_on_card: "",
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (!form.card_no || !form.expire_month || !form.expire_year) {
            return;
        }

        await dispatch(addCard({
            ...form,
            expire_month: Number(form.expire_month),
            expire_year: Number(form.expire_year),
        })).unwrap();

        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-[#6b749d] p-6 rounded-lg space-y-3">

            <h3 className="font-semibold text-[#252B42]">
                Kart Bilgileri
            </h3>

            <input
                name="card_no"
                placeholder="Kart Numarası"
                value={form.card_no}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <div className='flex gap-4'>
                <input
                    name="expire_month"
                    placeholder="Ay"
                    value={form.expire_month}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                <input
                    name="expire_year"
                    placeholder="Kart Numarası"
                    value={form.expire_year}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
            </div>

            <input
                name="name_on_card"
                placeholder="Kart Üzerindeki İsim"
                value={form.name_on_card}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-[#E74040] px-4 py-2 rounded"
                >
                    İptal
                </button>

                <button
                    type="submit"
                    className="bg-[#236AF0] text-white px-4 py-2 rounded"
                >
                    Kaydet
                </button>
            </div>

        </form>
    );
};

export default CardForm;