import React from 'react'
import Sidebar from '@/Components/Sidebar'

const PanelLayout = ({children}) => {
    return (
            <>
                <Sidebar />
                <div className='flex flex-col left-72 w-[calc(100%-288px)] relative bg-light-gray min-h-screen px-8 mt-8'>
                    {children}
                </div>
            </>
        )
}

export default PanelLayout