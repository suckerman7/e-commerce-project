import {Phone, Mail, Facebook, Instagram, Twitter, Youtube} from 'lucide-react';

const TopBar = () => {
    return (
        <div className='hidden lg:flex items-center justify-around px-8 py-2 bg-[#23856D] text-white text-sm font-montserrat'>
            <div className='flex gap-6 text-xs'>
                <Phone size={16} />
                    (225) 555-0118
                <Mail size={16} />
                    michelle.rivera@example.com
            </div>

            <div className='font-bold'>
                Follow Us and get a chance to win 80% off
            </div>

            <div className='flex gap-4'>
                <span>Follow us: </span>
                <Instagram size={16} />
                <Youtube size={16} />
                <Facebook size={16} />
                <Twitter size={16} />
            </div>
        </div>
    );
};

export default TopBar;