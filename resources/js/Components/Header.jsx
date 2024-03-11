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

        if(e.target[0].value === '') return

        const search = e.target[0].value;
        router.get(`/search?q=${search}`);
    };

    return (
        <header className='top-0 left-0 bg-white w-full z-50 shadow-lg'>
            <div className="border-b border-gray-300 py-6">
                <div className="container mx-auto flex justify-between items-end">
                    <Link href="/">
                        Lyks Imóveis
                    </Link>
                    <form className='hidden md:block' onSubmit={handleSubmit}>
                        <input id="search" name="search" placeholder="Pesquisar..." className="w-[300px] lg:w-[700px] h-8 rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color" type="text" />
                    </form>
                    <div className="hidden md:flex">
                        <div className='flex items-end gap-4'>
                            <a target='_blank' href='https://www.facebook.com'>
                                <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M2.63961 0.0695801H28.3291C29.2 0.0695801 29.9844 0.854004 29.9844 1.72481V27.4144C29.9844 28.2852 29.2 29.0696 28.3291 29.0696H2.63961C1.7688 29.0696 0.984375 28.2852 0.984375 27.4144V1.72481C0.984375 0.854004 1.7688 0.0695801 2.63961 0.0695801ZM21.5786 16.353H25.5844L25.7585 12.5214H21.5786V9.69166C21.5786 8.6035 21.796 7.99324 23.1893 7.99324H25.6275L25.7153 4.42223C25.7153 4.42223 24.6272 4.24807 23.0597 4.24807C19.2282 4.24807 17.5297 6.64314 17.5297 9.21237V12.5214H14.7V16.353H17.5297V26.9769H21.5786V16.353Z" fill="black"/>
                                </svg>
                            </a>
                            <a target='_blank' href='https://www.instagram.com'>
                                <svg width="24" height="23.2" viewBox="0 0 30 29" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M15.0067 7.02331C10.7492 7.02331 7.31507 10.3235 7.31507 14.4149C7.31507 18.5064 10.7492 21.8065 15.0067 21.8065C19.2642 21.8065 22.6983 18.5064 22.6983 14.4149C22.6983 10.3235 19.2642 7.02331 15.0067 7.02331ZM15.0067 19.2204C12.2554 19.2204 10.0061 17.0653 10.0061 14.4149C10.0061 11.7645 12.2487 9.60941 15.0067 9.60941C17.7647 9.60941 20.0073 11.7645 20.0073 14.4149C20.0073 17.0653 17.758 19.2204 15.0067 19.2204ZM24.807 6.72096C24.807 7.67949 24.0037 8.44502 23.0129 8.44502C22.0155 8.44502 21.2189 7.67305 21.2189 6.72096C21.2189 5.76886 22.0222 4.99689 23.0129 4.99689C24.0037 4.99689 24.807 5.76886 24.807 6.72096ZM29.9013 8.47075C29.7875 6.16128 29.2385 4.11556 27.478 2.43009C25.7241 0.744628 23.5953 0.217116 21.1921 0.101321C18.7153 -0.0337737 11.2914 -0.0337737 8.81457 0.101321C6.41805 0.210683 4.2893 0.738196 2.52873 2.42366C0.768158 4.10913 0.225929 6.15485 0.105433 8.46432C-0.0351445 10.8446 -0.0351445 17.9788 0.105433 20.3591C0.219235 22.6686 0.768158 24.7143 2.52873 26.3997C4.2893 28.0852 6.41136 28.6127 8.81457 28.7285C11.2914 28.8636 18.7153 28.8636 21.1921 28.7285C23.5953 28.6192 25.7241 28.0916 27.478 26.3997C29.2318 24.7143 29.7808 22.6686 29.9013 20.3591C30.0418 17.9788 30.0418 10.851 29.9013 8.47075ZM26.7014 22.913C26.1793 24.1739 25.1685 25.1453 23.8497 25.6535C21.8749 26.4062 17.189 26.2325 15.0067 26.2325C12.8244 26.2325 8.13176 26.3997 6.16367 25.6535C4.85161 25.1517 3.84079 24.1803 3.31195 22.913C2.52873 21.0153 2.70947 16.5121 2.70947 14.4149C2.70947 12.3177 2.53542 7.80815 3.31195 5.91682C3.8341 4.65594 4.84492 3.68454 6.16367 3.17633C8.13846 2.42366 12.8244 2.59735 15.0067 2.59735C17.189 2.59735 21.8816 2.43009 23.8497 3.17633C25.1618 3.67811 26.1726 4.64951 26.7014 5.91682C27.4847 7.81458 27.3039 12.3177 27.3039 14.4149C27.3039 16.5121 27.4847 21.0217 26.7014 22.913Z" fill="#1E1E1E"/>
                                </svg>
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/'>
                                <svg width="24" height="23.2" viewBox="0 0 30 29" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M27.8571 0H2.13616C0.957589 0 0 0.933109 0 2.07858V26.7513C0 27.8967 0.957589 28.8298 2.13616 28.8298H27.8571C29.0357 28.8298 30 27.8967 30 26.7513V2.07858C30 0.933109 29.0357 0 27.8571 0ZM9.06696 24.7113H4.62054V10.9528H9.07366V24.7113H9.06696ZM6.84375 9.07368C5.41741 9.07368 4.26562 7.96038 4.26562 6.59611C4.26562 5.23184 5.41741 4.11855 6.84375 4.11855C8.26339 4.11855 9.42187 5.23184 9.42187 6.59611C9.42187 7.96682 8.27009 9.07368 6.84375 9.07368ZM25.7344 24.7113H21.2879V18.0186C21.2879 16.4227 21.2545 14.3699 18.9777 14.3699C16.6607 14.3699 16.3058 16.1074 16.3058 17.9028V24.7113H11.8594V10.9528H16.125V12.8319H16.1853C16.7812 11.7507 18.2344 10.6117 20.3973 10.6117C24.8973 10.6117 25.7344 13.4625 25.7344 17.1692V24.7113Z" fill="#1E1E1E"/>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                    <svg onClick={() => setShowMenu(!showMenu)} xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block md:hidden cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            <div>
                <nav className="container mx-auto py-6">
                <ul ref={menuRef} className={`${showMenu ? "flex flex-col absolute top-0 right-0 shadow-2xl bg-white h-screen w-[300px] items-center justify-center -translate-x-0" : "md:flex sr-only md:not-sr-only absolute md:static -translate-x-[-100%] md:-translate-x-0"} transition-transform duration-300 md:duration-0 ease-in-out gap-4 z-50`}>
                        <li><Link className="hover:text-main-color" href="/">Home</Link></li>
                        <li><Link className="hover:text-main-color" href="/#properties">Imóveis</Link></li>
                        <li><Link className="hover:text-main-color" href="/#about">Sobre</Link></li>
                        <li><Link className="hover:text-main-color" href="/#contact">Contato</Link></li>
                        {showMenu &&
                            <svg onClick={() => setShowMenu(!showMenu)} className="absolute right-4 cursor-pointer top-6 z-50 w-6 h-6 stroke-black text-black" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        }
                    </ul>
                    <form className='block md:hidden' onSubmit={handleSubmit}>
                        <input id='search-mobile' name='search-mobile' placeholder="Pesquisar..." className="w-full h-8 rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color" type="text" />
                    </form>
                </nav>
            </div>     
        </header>
    );
};

export default Header;
    