import {LayoutGrid, List} from 'lucide-react';

const ShopToolbar = () => {
    return (
        <div className='px-4 mt-10 font-montserrat'>
            <h6 className='text-sm font-bold text-center text-[#737373] mt-4'>
                Showing all 12 results
            </h6>

            <div className='flex items-center justify-between gap-4'>
                <div className='flex gap-2'>
                    <h6 className='text-[#737373] text-sm'>Views:</h6>
                    <button className='p-2 border-rounded'>
                        <LayoutGrid size={16} />
                    </button>
                    <button className='p-2 border-rounded'>
                        <List size={16} />
                    </button>
                </div>

                <div className='flex gap-2'>
                    <select className='border border-[#DDDDDD] text-[#737373] rounded px-3 py-2 text-sm'>
                        <option>Popularity</option>
                    </select>

                    <button className='bg-[#23A6F0] text-white px-4 py-2 rounded text-sm font-bold'>
                        Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopToolbar;