import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCards,
    selectCard
} from '../../store/card/cardReducer';
import CardForm from './CardForm';

const PaymentSection = ({ selectedInstallment, onSelectInstallment }) => {
    const dispatch = useDispatch();
    const { list, selectedCardId, loading } = useSelector(
        state => state.card
    );

    const [showForm, setShowForm] = useState(false);

    const INSTALLMENTS = [
        { id: 1, label: "Tek Çekim", multiplier: 1 },
        { id: 3, label: "3 Taksit", multiplier: 1.05 },
        { id: 6, label: "6 Taksit", multiplier: 1.10 },
    ]

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    return (
        <div className='bg-white p-6 rounded-lg shadow space-y-6'>

            <h2 className='text-xl font-bold text-[#F27A1A]'>
                Kart ile Öde
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className='space-y-4'>

                    {loading && (
                        <p className='text-sm text-[#737373]'>Kartlar yükleniyor...</p>
                    )}

                    {!loading && list.length === 0 && (
                        <p className='text-sm text-[#737373]'>
                            Kayıtlı kart bulunamadı.
                        </p>
                    )}

                    {list.map(card => (
                        <div
                            key={card.id}
                            className={`
                                border rounded-lg p-4 cursor-pointer
                                    ${selectedCardId === card.id
                                        ? "border-[#F27A1A]"
                                        : "border-[#252B42]"
                                    }
                            `}
                            onClick={() => dispatch(selectCard(card.id))}
                        >
                            <p className="font-semibold">
                                **** **** **** {card.card_no.slice(-4)}
                            </p>

                            <p className='text-sm text-[#737373]'>
                                {card.expire_month}/{card.expire_year}
                            </p>
                        </div>
                    ))}

                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="border-2 border-dashed rounded-lg p-4 text-center text-[#236AF0]"
                    >
                        + Yeni Kart Ekle
                    </button>

                    {showForm && (
                        <CardForm onClose={() => setShowForm(false)} />
                    )}

                </div>

                <div className='border rounded-lg p-4'>
                    <h3 className='font-semibold mb-4'>
                        Taksit Seçenekleri
                    </h3>

                    {!selectedCardId && (
                        <p className='text-sm text-[#737373]'>
                            Lütfen bir kart seçin.
                        </p>
                    )}

                    {selectedCardId && (
                        <div className='space-y-2'>
                            {INSTALLMENTS.map(inst => (
                                <label
                                    key={inst.id}
                                    className={`
                                        flex items-center justify-between border p-3 rounded cursor-pointer
                                        ${selectedInstallment === inst.id
                                            ? "border-[#F27A1A] bg-[#FFF4EC]"
                                            : "border-[#252B42]"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="installment"
                                        checked={selectedInstallment === inst.id}
                                        onChange={() => onSelectInstallment(inst.id)}
                                    />

                                    <span>{inst.label}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default PaymentSection;