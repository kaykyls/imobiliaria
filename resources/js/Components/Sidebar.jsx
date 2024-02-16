import { useState, useEffect, useRef } from 'react'
import SidebarItem from './SidebarItem'
import { Link } from '@inertiajs/react'

const Sidebar = ({ showMenu, setShowMenu }) => {
    const [path, setPath] = useState('')
    const sidebarRef = useRef(null)

    useEffect(() => {
        const getPath = () => {
            setPath(window.location.pathname)
        }
        getPath()

        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setShowMenu(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [setShowMenu])

    return (
        <div ref={sidebarRef} className={`${showMenu ? "w-80" : "hidden"} lg:flex flex-col fixed top-0 left-0 h-screen lg:w-72 bg-white text-gray-800 m-0 justify-between border-r border-medium-gray z-50`}>
            <div className='flex flex-col gap-12'>
                <div className='flex justify-between items-center'>
                    <Link href={"/"} className='flex text-2xl items-center font-medium px-10 py-4 gap-1'>
                        Lyks Imóveis
                    </Link>
                    {showMenu &&
                        <svg onClick={() => setShowMenu(!showMenu)} className="mr-4 block lg:hidden cursor-pointer w-6 h-6 stroke-black text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                </div>

                <div>
                    <SidebarItem
                        title='Dashboard'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        }
                        href='/manage'
                        isActive={path === '/manage'}
                    />
                    <SidebarItem
                        title='Imóveis'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                        </svg>
                        }
                        href='/manage/properties'
                        isActive={path.startsWith('/manage/properties')}
                    />
                    <SidebarItem
                        title='Admins'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                        }
                        href='/manage/admins'
                        isActive={path.startsWith('/manage/admins')}
                    />
                </div>

            </div>

        </div>
    )
}

export default Sidebar
