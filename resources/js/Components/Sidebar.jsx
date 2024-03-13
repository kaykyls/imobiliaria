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
        <div ref={sidebarRef} className={`${showMenu ? "w-80 shadow-2xl lg:shadow-none border-none" : "hidden"} lg:flex flex-col fixed top-0 left-0 h-screen lg:w-[260px] bg-white text-gray-800 m-0 justify-between lg:border-r z-50`}>
            <div className='flex flex-col gap-10'>
                <div className='flex justify-between items-center'>
                    <Link href={"/"} className='flex text-xl items-center font-semibold px-10 py-4 gap-1'>
                        Lyks Imóveis
                    </Link>
                    {showMenu &&
                        <svg onClick={() => setShowMenu(!showMenu)} className="mr-4 block lg:hidden cursor-pointer w-6 h-6 stroke-black text-black" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                </div>

                <div>
                    <div className='mx-5 px-5 mb-2'>
                        <span className='uppercase text-xs font-medium'>Menu Principal</span>
                    </div>
                    <SidebarItem
                        title='Dashboard'
                        icon={<svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        }
                        href='/manage'
                        isActive={path === '/manage'}
                    />
                    <SidebarItem
                        title='Imóveis'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                            </svg>                      
                        }
                        href='/manage/properties'
                        isActive={path.startsWith('/manage/properties')}
                    />
                    <SidebarItem
                        title='Financeiro'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                            </svg>
                        }
                        href='/manage/#'
                        isActive={path.startsWith('/manage/finances')}
                    />
                    <SidebarItem
                        title='Relatórios'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>                      
                        }
                        href='/manage/#'
                        isActive={path.startsWith('/manage/relatories')}
                    />
                    <SidebarItem
                        title='Tarefas'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                            </svg>               
                        }
                        href='/manage/#'
                        isActive={path.startsWith('/manage/tasks')}
                    />
                    <div className='mx-5 px-5 mt-4 mb-2'>
                        <span className='uppercase text-xs font-medium'>Admin</span>
                    </div>
                    <SidebarItem
                        title='Admins'
                        icon={<svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
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
