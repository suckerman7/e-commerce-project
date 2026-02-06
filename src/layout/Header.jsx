import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, Heart, User } from 'lucide-react';

import { useSelector, useDispatch } from 'react-redux';
import Gravatar from 'react-gravatar';
import { logoutUser } from "../store/client/clientThunks";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const user = useSelector(state => state.client.user);
    const dispatch = useDispatch();

    return (
        <header className='bg-white shadow-sm font-montserrat'>
            <div className='flex items-center justify-between px-4 py-4'>
                <Link to='/' className='text-2xl font-bold text-[#252B42]'>
                    Bandage
                </Link>

                <nav className='hidden lg:flex gap-6 text-sm font-bold text-[#737373]'>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/team'>Team</Link>
                </nav>

                <div className='hidden lg:flex items-center gap-4'>

                    {user ? (
                        <div className='flex items-center gap-2 text-sm font-bold text-[#236AF0]'>
                            <Gravatar
                                email={user.email || "example@example.com"}
                                size={24}
                                className='rounded-full'
                            />
                            <span>{user.name || user.email}</span>
                            <button
                                onClick={() => {
                                    dispatch(logoutUser());
                                    setOpenMenu(false);
                                }}
                                className='ml-2 text-xs text-red-500 hover:underline'
                            >
                                Logout
                            </button>
                        </div>
                        ) : (
                        <div className='flex items-center gap-2 text-sm font-bold'>
                            <User size={16} className="text-[#23A6F0]" />
                            <Link to="/login" className='text-[#23A6F0] hover:underline'>
                                Login
                            </Link>
                            <span className="text-[#737373]">/</span>
                            <Link to="/signup" className='text-[#23A6F0] hover:underline'>
                                Register
                            </Link>
                        </div>
                    )}

                    <Search className='w-4 h-4 text-[#23A6F0]'/>
                    <ShoppingCart className='w-4 h-4 text-[#23A6F0]'/>
                    <Heart className='w-4 h-4 text-[#23A6F0]' />
                </div>

                    <button 
                        onClick={
                            () => setOpenMenu(!openMenu)
                        }
                        aria-label="Menu"
                        className='lg:hidden'
                    >
                        <Menu className='w-5.75 h-3.5 text-[#252B42]' />
                    </button>
            </div>

            {openMenu && (
                <nav className='flex flex-col items-center gap-6 py-6 border-t'>
                    <Link 
                        to='/'
                        onClick={() => setOpenMenu(false)}
                        className='text-3xl text-[#737373]'
                    >
                        Home
                    </Link>

                    <Link 
                        to='/shop'
                        onClick={() => setOpenMenu(false)}
                        className='text-3xl text-[#737373]'
                    >
                        Product
                    </Link>

                    <Link 
                        to='/pricing'
                        onClick={() => setOpenMenu(false)}
                        className='text-3xl text-[#737373]'
                    >
                        Pricing
                    </Link>

                    <Link 
                        to='/contact'
                        onClick={() => setOpenMenu(false)}
                        className='text-3xl text-[#737373]'
                    >
                        Contact
                    </Link>

                    <Link 
                        to='/team'
                        onClick={() => setOpenMenu(false)}
                        className='text-3xl text-[#737373]'
                    >
                        Team
                    </Link>

                    {user ? (
                        <div className='flex items-center gap-2 text-3xl font-bold text-[#236AF0]'>
                            <Gravatar
                                email={user.email || "example@example.com"}
                                size={24}
                                className='rounded-full'
                            />
                            <span>{user.name || user.email}</span>
                            <button
                                onClick={() => {
                                    dispatch(logoutUser());
                                    setOpenMenu(false);
                                }}
                                className='ml-2 text-sm text-red-500 hover:underline'
                            >
                                Logout
                            </button>
                        </div>
                        ) : (
                        <div className='flex flex-col items-center gap-2 text-3xl font-bold'>
                            <User size={28} className="text-[#23A6F0]" />
                            <Link
                                to="/login"
                                onClick={() => setOpenMenu(false)}
                                className='text-[#23A6F0]'
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                onClick={() => setOpenMenu(false)}
                                className='text-[#23A6F0]'
                            >
                                Register
                            </Link>
                        </div>
                    )}

                    <div className='flex flex-col gap-6'>
                        <Search className='w-8.5 h-8.5 text-[#23A6F0]'/>
                        <ShoppingCart className='w-8.5 h-8.5 text-[#23A6F0]'/>
                        <Heart className='w-8.5 h-8.5 text-[#23A6F0]' />
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;