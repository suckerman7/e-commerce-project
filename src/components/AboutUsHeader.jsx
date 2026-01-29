const AboutUsHeader = () => {
    return (
        <section className='font-montserrat flex flex-col gap-16'>

            <div className='flex flex-col items-center text-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:text-left'>

                <div className='flex flex-col items-center lg:items-start lg:max-w-md'>
                    <h5 className='font-bold uppercase hidden lg:block mb-2'>About Company</h5>

                    <h2 className='text-[40px] font-bold text-[#252B42] uppercase mb-4'>
                        About Us
                    </h2>

                    <h4 className='text-[#737373] text-[20px] mb-6'>
                        We know how large objects will act, but things on a small scale just do not act that way.
                    </h4>

                    <button className='bg-[#23A6F0] text-sm text-white px-10 py-4 rounded-lg mb-10'>
                        Get Quote Now
                    </button>
                </div>

                <div>
                    <img
                        src='/images/about_us.png'
                        alt='About us'
                        className='w-full max-w-lg lg:max-w-xl xl:max-w-2xl'
                    />
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-[#737373] grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

                <div>
                    <p className='text-sm text-[#E74040] mb-5 text-center lg:text-left'>
                        Problems trying
                    </p>

                    <h3 className='text-2xl text-[#252B42] font-bold'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </h3>
                </div>

                <div className="lg:mt-11">
                    <p className='text-sm text-center lg:items-center'>
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
            </div>

        </section>
    );
};

export default AboutUsHeader;