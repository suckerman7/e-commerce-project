import TeamHeader from "../components/TeamHeader";
import TeamMembers from "../components/TeamMembers";
import ClientsSection from "../components/ClientsSection";

import AboutUsHeader from "../components/AboutUsHeader";
import AboutStats from "../components/AboutStats";

const AboutUsPage = () => {
    return (
        <section className='flex flex-col px-6 py-12 bg-white font-montserrat'>
            <AboutUsHeader />

            <AboutStats
                customerTotal='15K'
                visitorTotal='150K'
                countryTotal='15'
                partnerTotal='100+'
            />

            <div className='flex justify-center items-center my-20'>
                <img
                    src='/images/video_card.png'
                    alt='Video Card Example'
                    className="w-full max-w-lg lg:max-w-2xl xl:max-w-3xl"
                />
            </div>

            <TeamHeader />

            <TeamMembers />
            
            <div className='text-[#737373] text-center items-center'>
                <h2 className='text-[#252B42] text-[40px] font-bold mt-2 mb-2'>
                    Big Companies Are Here
                </h2>

                <p className='text-sm mt-4'>
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                </p>

                <ClientsSection />
            </div>

            <section className='flex flex-col lg:flex-row ig:items-stretch mt-20'>
                <div className='bg-[#2A7CC7] text-white flex flex-col justify-center text-center items-center gap-8 px-8 py-16 lg:items-start lg:text-left lg:w-1/2'>
                    <h5 className='uppercase tracking-wide'>Work With Us</h5>

                    <h2 className='font-bold text-5xl'>Now Let’s grow Yours</h2>

                    <p className='text-sm max-w-md'>
                        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                    </p>

                    <button className='px-10 py-4 hover:bg-[#21629f] transition hover:text-gray-400 border border-white rounded-lg'>Button</button>
                </div>

                <div className='hidden lg:block lg:w-1/2'>
                    <img
                        src='/images/about_us-2.png'
                        alt='About Me 2'
                        className='w-full h-full object-cover'
                    />
                </div>
            </section>

        </section>
    );
};

export default AboutUsPage;