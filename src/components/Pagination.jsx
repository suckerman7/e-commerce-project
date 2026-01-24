const Pagination = () => {
    return (
        <div className='flex justify-center mt-10 font-montserrat'>
            <div className='flex border rounded overflow-hidden text-sm'>
                <button className='px-4 py-2 border-[#BDBDBD] bg-[#F3F3F3] text-[#BDBDBD]'>First</button>
                <button className='px-4 py-2 border-[#E9E9E9] bg-white text-[#23A6F0]'>1</button>
                <button className='px-4 py-2 border-[#E9E9E9] bg-[#23A6F0] text-white'>2</button>
                <button className='px-4 py-2 border-[#E9E9E9] bg-white text-[#23A6F0]'>3</button>
                <button className='px-4 py-2 border-[#E8E8E8] bg-white text-[#23A6F0]'>Next</button>
            </div>
        </div>
    );
};

export default Pagination;