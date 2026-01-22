import {Facebook, Instagram, Twitter, Youtube, Phone, MapPin, Mail} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#252B42] text-white mt-16 font-montserrat">
            <div className="px-6 py-12 text-center border-b border-slate-700">
                <h3 className='text-2xl font-bold mb-2'>
                    Consulting Agency For Your Business
                </h3>
                <p className='text-sm mb-6'>
                    the quick fox jumps over the lazy dog
                </p>

                <button className='text-sm bg-[#23A6F0] font-bold text-white px-6 py-3 rounded-lg'>
                    Contact Us
                </button>
            </div>

            <div className='px-6 py-12 flex flex-col gap-10'>
                <div>
                    <h5 className='font-bold mb-4'>Company Info</h5>
                    <ul className='flex flex-col gap-2 text-sm font-bold'>
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <h5 className='font-bold mb-4'>Legal</h5>
                    <ul className='flex flex-col gap-2 text-sm font-bold'>
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <h5 className='font-bold mb-4'>Features</h5>
                    <ul className='flex flex-col gap-2 text-sm font-bold'>
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>

                <div>
                    <h5 className='font-bold mb-4'>Resources</h5>
                    <ul className='flex flex-col gap-2 text-sm font-bold'>
                        <li>IOS & Android</li>
                        <li>Watch a Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </ul>
                </div>

                <div>
                    <h5 className='font-bold mb-4'>Get In Touch</h5>
                    <ul className='flex flex-col gap-4 text-sm font-bold'>
                        <li className='flex items-center gap-2 text-[#8EC2F2]'>
                            <Phone size={24} />
                            (480) 555-0103
                        </li>
                        <li className='flex items-center gap-2 text-[#8EC2F2]'>
                            <MapPin size={24} />
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </li>
                        <li className='flex items-center gap-2 text-[#8EC2F2]'>
                            <Mail size={24} />
                            debra.holt@example.com
                        </li>
                    </ul>
                </div>
            </div>

            <div className='px-6 py-6 border-t border-slate-700 flex flex-col gap-4 items-center text-sm text-white'>
                <h6>Made With Love By Finland</h6>
                <h6>All Right Reserved</h6>

                <div className='flex gap-4 text-white'>
                    <Facebook size={24} />
                    <Instagram size={24} />
                    <Twitter size={24} />
                    <Youtube size={24} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;