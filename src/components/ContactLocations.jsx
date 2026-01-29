import LocationCard from "./LocationCard";

const ContactLocations = () => {
    return (
        <section className='flex flex-col gap-8 mt-12 justify-center items-center lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-16 lg:gap-y-12'>
            <LocationCard
                city='Paris'
                address='1901 Thorn ridge Cir.'
                postCode='75000'
                phoneNumber='+451 215 215'
                faxNumber='+451 215 215'
            />

            <LocationCard
                city='Berlin'
                address='4140 Parker Rd.'
                postCode='10119'
                phoneNumber='+451 215 215'
                faxNumber='+451 215 215'
            />

            <LocationCard
                city='New York'
                address='2715 Ash Dr. San Jose'
                postCode='07302'
                phoneNumber='+451 215 215'
                faxNumber='+451 215 215'
            />

            <LocationCard
                city='London'
                address='3517 W. Gray St. Utica'
                postCode='N19'
                phoneNumber='+451 215 215'
                faxNumber='+451 215 215'
            />
        </section>
    );
};

export default ContactLocations;