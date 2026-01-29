import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, Heart, User } from 'lucide-react';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

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

                    <span className='flex items-center gap-1 text-sm font-bold text-[#23A6F0]'>
                        <User size={16} />
                        Login / Register
                    </span>

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
                        {openMenu ? (
                            <Menu className='w-5.75 h-3.5 text-[#252B42]'/>
                        ) : (
                            <Menu className='w-5.75 h-3.5 text-[#252B42]'/>
                        )}
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

                    <span className='flex items-center gap-1 text-3xl font-bold text-[#23A6F0]'>
                        <User size={28} />
                        Login / Register
                    </span>

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