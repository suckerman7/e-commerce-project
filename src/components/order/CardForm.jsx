import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCard, editCard } from '../../store/card/cardReducer';

const CardForm = ({ card, onClose }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  useEffect(() => {
    if (card) {
      setForm({
        card_no: card.card_no || "",
        expire_month: card.expire_month || "",
        expire_year: card.expire_year || "",
        name_on_card: card.name_on_card || "",
      });
    }
  }, [card]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!form.card_no || !form.expire_month || !form.expire_year) return;

    const payload = {
      card_no: form.card_no.replace(/\s/g, ""),
      expire_month: Number(form.expire_month),
      expire_year: Number(form.expire_year),
      name_on_card: form.name_on_card,
    };

    if (card) {
      await dispatch(editCard({ id: card.id, data: payload }));
    } else {
      await dispatch(addCard(payload));
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#6b749d] p-6 rounded-lg space-y-3">
      <h3 className="font-semibold text-[#252B42]">
        {card ? "Kartı Düzenle" : "Yeni Kart"}
      </h3>

      <input
        name="card_no"
        placeholder="Kart Numarası"
        value={form.card_no}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <div className="flex gap-4">
        <input
          name="expire_month"
          placeholder="Ay"
          value={form.expire_month}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="expire_year"
          placeholder="Yıl"
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
        <button type="button" onClick={onClose} className="bg-[#E74040] px-4 py-2 rounded">
          İptal
        </button>
        <button type="submit" className="bg-[#236AF0] text-white px-4 py-2 rounded">
          Kaydet
        </button>
      </div>
    </form>
  );
};

export default CardForm;
