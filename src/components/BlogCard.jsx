import { ArrowRight, AlarmClock, ChartArea} from "lucide-react";

const BlogCard = ({image, title, text, date, comments, isNew = false,}) => {
    return (
        <div className='bg-white rounded-2xl shadow-sm overflow-hidden relative font-montserrat'>
            <div className='relative'>
                <img
                    src={image}
                    alt={title}
                    className='w-full h-48 object-cover'
                />

                {isNew && (
                    <span className='absolute top-3 left-3 bg-[#E74040] text-white text-sm font-bold px-2 py-1 rounded'>
                        NEW
                    </span>
                )}
            </div>

            <div className='p-4'>
                <h4 className='text-xl'>
                    {title}
                </h4>

                <p className='text-[#737373] text-sm mt-2'>
                    {text}
                </p>

                <div className='flex justify-between text-xs text-[#737373] mt-4'>
                    <span className='flex items-center gap-1'><AlarmClock className='text-[#23A6F0]' size={14} /> {date}</span>
                    <span className='flex items-center gap-1'><ChartArea className='text-[#23856D]' size={14} /> {comments} comments</span>
                </div>

                <button className='flex items-center gap-1 text-[#737373] text-sm mt-4'>
                    Learn More <ArrowRight className='text-[#23A6F0]' size={14} />
                </button>
            </div>
        </div>
    );
};

export default BlogCard;