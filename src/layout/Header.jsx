import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, Heart, ChevronUp, ChevronDown} from 'lucide-react';

import { useSelector } from 'react-redux';
import { getCategoryUrl } from '../utils/categoryHelpers';

import HeaderAuth from '../components/header/HeaderAuth';
import ShopDropdown from '../components/header/ShopDropdown';

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
    const [openShop, setOpenShop] = useState(false);

    const user = useSelector(state => state.client.user);

    const categories = useSelector(state => state.category?.categories || []);

    const womenCategories = categories.filter(c => c.gender === "k");
    const menCategories = categories.filter(c => c.gender === "e");

    return (
        <header className='bg-white shadow-sm font-montserrat'>
            <div className='flex items-center justify-between px-4 py-4'>
                <Link to='/' className='text-2xl font-bold text-[#252B42]'>
                    Bandage
                </Link>

                <nav className='hidden lg:flex gap-6 text-sm font-bold text-[#737373]'>
                    {NAV_LINKS.map(link => {
                        if (link.label === "Shop") {
                            return (
                                <ShopDropdown
                                    key="shop"
                                    women={womenCategories}
                                    men={menCategories}
                                />
                            );
                        }

                        return (
                            <Link key={link.to} to={link.to}>
                                {link.label}
                            </Link>
                        )
                    })}
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

                    <Link to="/" onClick={() => setOpenMenu(false)}>Home</Link>

                    <button
                        onClick={() => setOpenShop(prev => !prev)}
                        className='flex items-center gap-2'
                    >
                        Shop {openShop ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
                    </button>

                    {openShop && (
                        <div className="w-full px-6 text-left text-xl grid grid-cols-2 gap-6">
                            <div className="mb-4">
                            <h4 className="font-bold mb-2">Kadın</h4>
                            <div className="flex flex-col gap-2">
                                {womenCategories.map(cat => (
                                <Link
                                    key={cat.id}
                                    to={getCategoryUrl(cat)}
                                    onClick={() => {
                                    setOpenMenu(false);
                                    setOpenShop(false);
                                    }}
                                    className="text-[#737373]"
                                >
                                    {cat.title}
                                </Link>
                                ))}
                            </div>
                            </div>

                            <div>
                            <h4 className="font-bold mb-2">Erkek</h4>
                            <div className="flex flex-col gap-2">
                                {menCategories.map(cat => (
                                <Link
                                    key={cat.id}
                                    to={getCategoryUrl(cat)}
                                    onClick={() => {
                                    setOpenMenu(false);
                                    setOpenShop(false);
                                    }}
                                    className="text-[#737373]"
                                >
                                    {cat.title}
                                </Link>
                                ))}
                            </div>
                            </div>
                        </div>
                    )}

                    <Link to="/about" onClick={() => setOpenMenu(false)}>About</Link>
                    <Link to="/blog" onClick={() => setOpenMenu(false)}>Blog</Link>
                    <Link to="/contact" onClick={() => setOpenMenu(false)}>Contact</Link>
                    <Link to="/team" onClick={() => setOpenMenu(false)}>Team</Link>

                    <HeaderAuth
                        user={user}
                        size="lg"
                        vertical
                        onAction={() => {
                            setOpenMenu(false);
                            setOpenShop(false);
                        }}
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