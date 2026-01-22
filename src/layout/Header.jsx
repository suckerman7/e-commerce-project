import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu } from 'lucide-react';

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
                    <Link to='/products'>Shop</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>

                <div className='flex items-center gap-4'>
                    <span className='hidden lg:flex text-sm text-[#23A6F0]'>
                        Login / Register
                    </span>
                    <Search className='w-6 h-6 text-[#252B42]'/>
                    <ShoppingCart className='w-[23.5px] h-4.5 text-[#252B42]'/>

                    <button 
                        onClick={
                            () => setOpenMenu(!openMenu)
                        }
                        aria-label="Menu"
                    >
                        {openMenu ? (
                            <Menu className='w-5.75 h-3.5 text-[#252B42]'/>
                        ) : (
                            <Menu className='w-5.75 h-3.5 text-[#252B42]'/>
                        )}
                    </button>
                </div>
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
                        to='/products'
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
                </nav>
            )}
        </header>
    );
};

export default Header;