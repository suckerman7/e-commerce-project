import {FaHooli, FaLyft, FaStripe, FaPiedPiperHat, FaAws, FaRedditAlien} from 'react-icons/fa';

const ClientsSection = () => {
    const iconClass = "text-[#737373] text-6xl";

    return (
        <section>
            <div className='flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-around h-10 object-contain mx-auto lg:mx-0'>
                <FaHooli className={iconClass} />
                <FaLyft className={iconClass} />
                <FaPiedPiperHat className={iconClass} />
                <FaStripe className={iconClass} />
                <FaAws className={iconClass} />
                <FaRedditAlien className={iconClass} />
            </div>
        </section>
    );
};

export default ClientsSection;