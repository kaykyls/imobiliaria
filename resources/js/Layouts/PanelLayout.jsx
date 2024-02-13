import React from 'react'
import Sidebar from '@/Components/Sidebar'
import AdminNavbar from '@/Components/AdminNavbar'

const PanelLayout = ({children}) => {
    return (
            <>
                <Sidebar />
                <div className='flex flex-col left-72 w-[calc(100%-288px)] relative min-h-screen bg-light-gray'>
                    <AdminNavbar />
                    <div className='px-48 py-8'>
                        {children}
                    </div>
                </div>
            </>
        )
}

export default PanelLayout