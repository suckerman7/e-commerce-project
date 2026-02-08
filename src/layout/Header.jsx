import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, Heart} from 'lucide-react';

import { useSelector} from 'react-redux';

import HeaderAuth from '../components/header/HeaderAuth';

const NAV_LINKS = [
    {to: "/", label: "Home" },
    {to: "/shop", label: "Shop" },
    {to: "/about", label: "About" },
    {to: "/blog", label: "Blog" },
    {to: "/contact", label: "Contact" },
    {to: "/team", label: "Team" },
]

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const user = useSelector(state => state.client.user);

    return (
        <header className='bg-white shadow-sm font-montserrat'>
            <div className='flex items-center justify-between px-4 py-4'>
                <Link to='/' className='text-2xl font-bold text-[#252B42]'>
                    Bandage
                </Link>

                <nav className='hidden lg:flex gap-6 text-sm font-bold text-[#737373]'>
                    {NAV_LINKS.map(link => (
                        <Link key={link.to} to={link.to}>
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className='hidden lg:flex items-center gap-4'>

                    <HeaderAuth user={user} size="sm"/>

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
                <nav className='flex flex-col items-center gap-6 py-6 border-t text-3xl font-medium text-[#737373]'>
                    {NAV_LINKS.map(link => (
                        <Link 
                            key={link.to} 
                            to={link.to}
                            onClick={() => setOpenMenu(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <HeaderAuth
                        user={user}
                        size="lg"
                        vertical
                        onAction={() => setOpenMenu(false)}
                    />

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