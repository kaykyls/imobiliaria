import React, { useState, useEffect } from 'react'
import { Link } from '@inertiajs/react'

const SidebarItem = ({title, icon, href, isActive}) => {
    return (
        <Link href={href} className="group">
            <div  className={`${isActive ? "text-main-color-dark" : "text-dark-gray font-normal"} group-hover:bg-gray-100 group-hover:rounded-lg mx-5 flex items-center text-xl px-5 py-3 gap-3`}>
                <div className='text-3xl'>
                    {icon}
                </div>
                <span className='text-lg'>{title}</span>
                {
                    isActive && <span className='absolute right-0 h-8 rounded-l-full w-1 bg-main-color'></span>
                }  
            </div>
        </Link>
    )
}

export default SidebarItem