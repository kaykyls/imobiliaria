    import { useState, useRef, useEffect } from 'react'
    import { Link } from '@inertiajs/react'

    const AdminNavbar = ({showMenu, setShowMenu}) => {
        const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
        const dropdownRef = useRef(null);

        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownIsOpen(false);
            }
        };
        
        useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
        }, []);

        return (
            <div className='bg-white border-b border-medium-gray px-8 py-4 flex justify-between w-full sticky top-0 left-72 z-0'>
                <div>
                    <svg onClick={() => setShowMenu(!showMenu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block lg:hidden cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='cursor-pointer' onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {dropdownIsOpen && <div ref={dropdownRef} className='absolute p-4 bg-white right-8 shadow top-12'>
                            <div className='flex flex-col'>
                                {/* <Link href={"/profile"} className='flex gap-4 py-2 border-b'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <span>Your Profile</span>
                                </Link> */}
                                <Link href='/logout' method='POST' className='flex gap-4 py-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                    <span>Sair</span>
                                </Link>
                            </div>  
                        </div>}
                    </div>
                </div>
            </div>
        )
    }

    export default AdminNavbar