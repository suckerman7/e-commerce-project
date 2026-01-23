import React from 'react';

import ShopCard from '../components/ShopCard';
import HeroSlider from '../components/HeroSlider';
import BestsellerSection from '../components/BestsellerSection';
import MostPopularSection from '../components/MostPopularSection';
import CategoryBanner from '../components/CategoryBanner';
import MostPopularLight from '../components/MostPopularLight';
import BestsellersVertical from '../components/BestsellersVertical';
import ClientsSection from '../components/ClientsSection';
import BlogSection from '../components/BlogSection';
import BestsellerReverse from '../components/BestsellerReverse';

const HomePage = () => {
    return (

        <div className='space-y-10'>
            <HeroSlider />

            <section className='grid gap-4 lg:grid-cols-3 lg:gap-6'>
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

            <section className='flex flex-col lg:flex-row gap-6'>
                <div className='grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start'>
                    <CategoryBanner
                        title="Furniture"
                        itemCount={5}
                        image="/images/card-cover-2.jpg"
                    />

                    <BestsellerSection />
                </div>
            </section>
            
            <MostPopularSection />

            <div className='flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-stretch'>
                <BestsellerReverse />

                <CategoryBanner
                    title="Furniture"
                    itemCount={5}
                    image="/images/card-cover.jpg"
                />
            </div>

            <MostPopularLight />

            <BestsellersVertical />

            <ClientsSection />

            <BlogSection />

        </div>
    );
};

export default HomePage;