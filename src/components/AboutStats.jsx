const AboutStats = ({ customerTotal, visitorTotal, countryTotal, partnerTotal }) => {
    return (
        <div className="bg-white px-6 py-12">
            <div className="grid grid-cols-1 gap-10 text-center lg:grid-cols-4">

                <div className="font-bold">
                    <h1 className="text-[#252B42] text-6xl">{customerTotal}</h1>
                    <h5 className="text-sm text-[#737373]">Happy Customers</h5>
                </div>

                <div className="font-bold">
                    <h1 className="text-[#252B42] text-6xl">{visitorTotal}</h1>
                    <h5 className="text-sm text-[#737373]">Monthly Visitors</h5>
                </div>

                <div className="font-bold">
                    <h1 className="text-[#252B42] text-6xl">{countryTotal}</h1>
                    <h5 className="text-sm text-[#737373]">Countries Worldwide</h5>
                </div>

                <div className="font-bold">
                    <h1 className="text-[#252B42] text-6xl">{partnerTotal}</h1>
                    <h5 className="text-sm text-[#737373]">Top Partners</h5>
                </div>

            </div>
        </div>
    );
};

export default AboutStats;