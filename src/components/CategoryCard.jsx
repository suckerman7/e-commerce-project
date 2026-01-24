const CategoryCard = ({ title, count }) => {
    return (
        <div className='h-55 bg-[#8EC2F2] rounded-xl flex flex-col items-center justify-center text-white font-montserrat'>
            <h3 className='text-base font-bold'>{title}</h3>
            <p className='text-sm mt-1'>{count} Items</p>
        </div>
    );
};

export default CategoryCard;