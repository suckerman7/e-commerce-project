import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategoryUrl } from '../../utils/categoryHelpers';
import { ChevronDown, ChevronUp } from "lucide-react";

const ShopDropdown = ({ women, men }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(o => !o)}
                className="inline-flex items-center gap-1 hover:text-[#252B42]"
            >
                Shop
                {open ? <ChevronUp size={14} className='mt-0.5' /> : <ChevronDown size={14} className='mt-0.5' />}
            </button>

            {open && (
                <div className="
                    absolute left-0 top-full mt-4
                    bg-white shadow-xl rounded-lg
                    p-6 gap-12 z-50 flex
                ">
                    <div className="min-w-40">
                        <h4 className="font-bold mb-3">Kadın</h4>
                        <ul className="space-y-2">
                            {women.map(cat => (
                                <li key={cat.id}>
                                    <Link to={getCategoryUrl(cat)}>
                                        {cat.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="min-w-40">
                        <h4 className="font-bold mb-3">Erkek</h4>
                        <ul className="space-y-2">
                            {men.map(cat => (
                                <li key={cat.id}>
                                    <Link to={getCategoryUrl(cat)}>
                                        {cat.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopDropdown;