import {LayoutGrid, List} from 'lucide-react';

const ShopToolbar = () => {
    return (
        <div className='px-4 mt-10 font-montserrat flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
            <h6 className='text-sm font-bold text-center text-[#737373] mt-4 lg:text-left lg:w-1/3'>
                Showing all 12 results
            </h6>

            <div className='flex items-center gap-2 justify-center lg:w-1/3'>
                <h6 className='text-[#737373] text-sm'>Views:</h6>
                <button className='p-2 border-rounded'>
                    <LayoutGrid size={16} />
                </button>
                <button className='p-2 border-rounded'>
                    <List size={16} />
                </button>
            </div>

            <div className='flex gap-4 justify-center lg:justify-end lg:w-1/3'>
                <select className='border border-[#DDDDDD] text-[#737373] rounded px-3 py-2 text-sm'>
                    <option>Popularity</option>
                    <option>Most Popular</option>
                    <option>Least Popular</option>
                </select>

                <button className='bg-[#23A6F0] text-white px-4 py-2 rounded text-sm font-bold'>
                    Filter
                </button>
            </div>
        </div>
    );
};

export default ShopToolbar;