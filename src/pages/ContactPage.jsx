import ContactHeader from '../components/ContactHeader';
import ContactLocations from '../components/ContactLocations';

const ContactPage = () => {
    return (
        <section className='relative min-h-screen px-6 py-12 flex flex-col lg:flex-row lg:items-center lg:justify-around bg-cover bg-center'
                 style={{ backgroundImage: "url('/images/contact-bg.png')" }} 
        >

            <div className='absolute inset-0 bg-gradient-to-r from-black/50 lg:from-black/70 via-black/40 to-transparent' />

            <div className='relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-around w-full'>
                <ContactHeader />

                <ContactLocations />
            </div>
        </section>
    );
};

export default ContactPage;