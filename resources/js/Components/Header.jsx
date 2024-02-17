import React, { useState, useEffect, useRef } from 'react';
import { router, Link } from '@inertiajs/react';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target[0].value;
        router.get(`/search?q=${search}`);
    };

    return (
        <header className='sticky top-0 left-0 bg-white w-full z-50'>
            <div className="border-b border-gray-300 py-6">
                <div className="container mx-auto flex justify-between items-end">
                    <Link href="/">
                        Lyks Imóveis
                    </Link>
                    <form className='hidden md:block' onSubmit={handleSubmit}>
                        <input id="search" name="search" placeholder="Pesquisar..." className="w-[300px] lg:w-[700px] h-8 rounded-md border-gray-300" type="text" />
                    </form>
                    <div className="hidden md:flex items-end gap-4">
                        {/* Ícones */}
                    </div>
                    <svg onClick={() => setShowMenu(!showMenu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block md:hidden cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            <div className="border-b border-gray-300">
                <nav className="container mx-auto py-6">
                    <ul ref={menuRef} className={`${showMenu ? "flex flex-col absolute top-0 right-0 shadow-2xl bg-white h-screen w-3/4 items-center justify-center" : "hidden md:flex"} gap-4`}>
                        <li><Link className="hover:text-main-color" href="/">Home</Link></li>
                        <li><Link className="hover:text-main-color" href="/#properties">Imóveis</Link></li>
                        <li><Link className="hover:text-main-color" href="/#about">Sobre</Link></li>
                        <li><Link className="hover:text-main-color" href="/#contact">Contato</Link></li>
                        {showMenu &&
                            <svg onClick={() => setShowMenu(!showMenu)} className="absolute right-4 cursor-pointer top-6 z-50 w-6 h-6 stroke-black text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        }
                    </ul>
                    <form className='block md:hidden' onSubmit={handleSubmit}>
                        <input id='search-mobile' name='search-mobile' placeholder="Pesquisar..." className="w-full h-8 rounded-md border-gray-300" type="text" />
                    </form>
                </nav>
            </div>     
        </header>
    );
};

export default Header;
    