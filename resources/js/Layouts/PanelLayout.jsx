import { useState } from 'react'
import Sidebar from '@/Components/Sidebar'
import AdminNavbar from '@/Components/AdminNavbar'

const PanelLayout = ({children, user}) => {
    const [showMenu, setShowMenu] = useState(false)

    return (
            <>
                <Sidebar showMenu={showMenu} setShowMenu={setShowMenu}/>
                <div className='flex flex-col lg:left-[260px] w-full lg:w-[calc(100%-260px)] relative min-h-screen bg-light-gray'>
                    <AdminNavbar showMenu={showMenu} setShowMenu={setShowMenu} user={user}/>
                    <div className='px-8 lg:px-24 xl:px-48 py-8'>
                        {children}
                    </div>
                </div>
            </>
        )
}

export default PanelLayout