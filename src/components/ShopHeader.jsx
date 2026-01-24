import { Link } from "react-router-dom";

const ShopHeader = () => {
    return (
        <div className='py-10 text-center font-montserrat'>
            <h3 className='text-2xl font-bold text-[#252B42] mb-2'>
                Shop
            </h3>

            <div className='text-sm text-[#737373] flex justify-center gap-2'>
                <Link to='/' className='font-bold text-[#252B42]'>
                    Home
                </Link>
                <span>{'>'}</span>
                <span>Shop</span>
            </div>
        </div>
    );
};

export default ShopHeader;