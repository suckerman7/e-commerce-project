import {FaHooli, FaLyft, FaStripe, FaPiedPiperHat, FaAws, FaRedditAlien} from 'react-icons/fa';

const ClientsSection = () => {
    const iconClass = "text-[#737373] text-6xl";

    return (
        <section className='flex flex-col items-center gap-10 py-12'>
            <FaHooli className={iconClass} />
            <FaLyft className={iconClass} />
            <FaPiedPiperHat className={iconClass} />
            <FaStripe className={iconClass} />
            <FaAws className={iconClass} />
            <FaRedditAlien className={iconClass} />
        </section>
    );
};

export default ClientsSection;