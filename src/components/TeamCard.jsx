const TeamCard = ({ image, position, name, description }) => {
    return (
        <div className='flex flex-col justify-center items-center bg-white px-10 py-8'>
            <div className='rounded-lg h-full mt-10'>
                <img
                    src={image}
                    alt={name}
                    className='h-40 object-contain rounded-full'
                />
            </div>

            <div className='font-montserrat text-center mt-3'>
                <div className='font-bold'>
                    <h6 className='text-[#23A6F0] text-sm mb-4'>{position}</h6>
                    <h5 className='text-[#252B42] mb-4'>{name}</h5>
                </div>

                <p className='text-[#737373] text-sm mb-4 font-semibold'>{description}</p>
            </div>
        </div>
    );
};

export default TeamCard;