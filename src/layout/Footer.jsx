import {Facebook, Instagram, Twitter, Youtube, Phone, MapPin, Mail} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#252B42] text-white mt-16 font-montserrat">
            <div className="px-6 py-12 border-b border-slate-700 flex flex-col items-center text-center gap-6 lg:flex-row lg:justify-around lg:text-left">
                <div>
                    <h3 className='text-2xl font-bold mb-2'>
                        Consulting Agency For Your Business
                    </h3>
                    <p className='text-sm mb-6'>
                        the quick fox jumps over the lazy dog
                    </p>
                </div>

                <Link to='/contact'>
                    <button className='text-sm bg-[#23A6F0] hover:bg-[#1a78ae] hover:text-gray-300 transition-colors duration-300 font-bold text-white px-6 py-3 rounded-lg '>
                        Contact Us
                    </button>
                </Link>
            </div>

            <div className='px-6 py-12 flex flex-col gap-10 lg:grid lg:grid-cols-5 lg:gap-8'>
                <div>
                    <h5 className='font-bold mb-4'>Company Info</h5>
                    <ul className='flex flex-col gap-2 text-sm font-bold'>
                        <li>
                            <Link to='/aboutus' className='hover:text-[#23A6F0] transition'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to='/team' className='hover:text-[#23A6F0] transition'>
                                Our Team
                            </Link>
                        </li>
                        <li>
                            <Link to='/careers' className='hover:text-[#23A6F0] transition'>
                                We are hiring
                            </Link>
                        </li>
                        <li>
                            <Link to='/blog' className='hover:text-[#23A6F0] transition'>
                                Blog
                            </Link>
                        </li>
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
                    <h5 className='font-bold mb-4'>Contact Us</h5>
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

                <div>
                    <h5 className='font-bold mb-4'>Get In Touch</h5>

                    <div className='flex w-full'>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className='w-full lg:flex-1 px-4 py-3 text-sm border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] outline-none' 
                        />

                        <button className='bg-[#23A6F0] text-white font-bold px-6 py-3 text-sm'>
                            Subscribe
                        </button>
                    </div>

                    <p className='text-xs text-[#737373] mt-4'>
                        Lore imp sum dolor Amit
                    </p>
                </div>
            </div>

            <div className='px-6 py-6 border-t border-slate-700 flex flex-col gap-4 items-center text-sm text-white lg:flex-row lg:justify-around'>
                <div className='flex flex-col lg:flex-row lg:gap-2 font-bold'>
                    <h6>Made With Love By Finland</h6>
                    <h6>All Right Reserved</h6>
                </div>

                <div className='flex gap-4'>
                    <Facebook className='text-[#335BF5] lg:text-[#23A6F0]' size={24} />
                    <Instagram className='text-[#E51F5A] lg:text-[#23A6F0]' size={24} />
                    <Twitter className='text-[#21A6DF] lg:text-[#23A6F0]' size={24} />
                    <Youtube className='text-[#E42F08] lg:text-[#23A6F0]' size={24} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;