import BlogCard from './BlogCard';

const BlogSection = () => {
    return (
        <section className='flex flex-col gap-6'>
            <div className='text-center'>
                <h6 className='text-sm text-[#23A6F0] font-bold'>
                    Practice Advice
                </h6>
                <h2 className='text-[40px] font-bold text-[#252B42] mt-1'>
                    Featured Products
                </h2>
            </div>

            <div className='flex flex-col gap-6 lg:flex-row lg:gap-8'>
                <BlogCard
                    image='/images/blog_image-1.png'
                    title= "Loudest à la Madison #1 (L'integral)"
                    text="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                    date='22 April 2021'
                    comments={10}
                    isNew
                />

                <BlogCard
                    image='/images/blog_image-3.png'
                    title= "Loudest à la Madison #1 (L'integral)"
                    text="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                    date='22 April 2021'
                    comments={10}
                    isNew
                />

                <BlogCard
                    image='/images/blog_image-2.png'
                    title= "Loudest à la Madison #1 (L'integral)"
                    text="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                    date='22 April 2021'
                    comments={10}
                    isNew
                />
            </div>
        </section>
    );
};

export default BlogSection;