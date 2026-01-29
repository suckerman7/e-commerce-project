const LocationCard = ({ city, address, postCode, phoneNumber, faxNumber}) => {
    return (
        <div className='font-montserrat text-white flex flex-col justify-center items-center'>
            <h3 className='font-bold text-2xl mb-4'>{city}</h3>
            <h4 className='text-xl mb-2'>{address}</h4>

            <div className="w-14.5 h-px bg-[#23A6F0] my-6 self-start" />
            
            <div className='font-bold mb-3'>
                <h5>{postCode} {city}</h5>
                <h5>Phone: {phoneNumber}</h5>
                <h5>Fax: {faxNumber}</h5>
            </div>
        </div>
    );
};

export default LocationCard;