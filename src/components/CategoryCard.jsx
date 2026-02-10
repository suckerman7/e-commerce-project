import { Link } from "react-router-dom";

const CategoryCard = ({ title, count, image, to }) => {

    const Wrapper = to ? Link : "div";

    return (
        <Wrapper
            to={to}
            className='block h-55 rounded-xl overflow-hidden font-montserrat'
        >
            <div 
                className='h-full flex flex-col items-center justify-center text-white bg-[#8EC2F2]'
                style={
                    image
                        ? {
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }
                        : {}
                }
            >
                {image && (
                    <div className='absolute inset-0 bg-black/30' />
                )}
                <div className='relative z-10 text-center'>
                    <h3 className='text-base font-bold'>{title}</h3>

                    {count !== undefined && (
                        <p className='text-sm mt-1'>{count} Items</p>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default CategoryCard;