import React from 'react'
import Sidebar from '@/Components/Sidebar'

const PanelLayout = ({children}) => {
    return (
            <>
                <Sidebar />
                <div className='flex flex-col left-72 w-[calc(100%-288px)] relative min-h-screen px-48 py-8'>
                    {children}
                </div>
            </>
        )
}

export default PanelLayout