import React from 'react';
import ProductCard from '../components/ProductCard';
import ShopCard from '../components/ShopCard';
import HeroSlider from '../components/HeroSlider';
import BestsellerSection from '../components/BestsellerSection';

const HomePage = () => {
    return (

        //HeroSlider.jsx
        //ShopCard.jsx
        //ProductCard.jsx

        <div className='space-y-6'>
            <HeroSlider />

            <section className='space-y-4'>
                <ShopCard
                    badge='Your Space'
                    title='Unique Life'
                    subtitle='Explore Items'
                    image='/images/icecream.png'
                />

                <ShopCard
                    badge='Ends Today'
                    title='Elements Style'
                    subtitle='Explore Items'
                    image='/images/apple.jpg'
                />

                <ShopCard
                    badge='Ends Today'
                    title='Elements Style'
                    subtitle='Explore Items'
                    image='/images/steak.jpg'
                />
            </section>

            <section className='flex flex-col gap-4'>   

                <ProductCard
                    image='/images/icecream.png'
                    title='Graphic Design'
                    department='English Department'
                    oldPrice="16.48"
                    price="6.48"
                />

                <ProductCard
                    image='/images/apple.jpg'
                    title='Graphic Design'
                    department='English Department'
                    oldPrice="16.48"
                    price="6.48"
                />

                <ProductCard
                    image='/images/steak.jpg'
                    title='Graphic Design'
                    department='English Department'
                    oldPrice="16.48"
                    price="6.48"
                />
                
            </section>

            <BestsellerSection />
        </div>
    );
};

export default HomePage;