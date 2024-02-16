import React, { useState } from 'react'
import PanelLayout from '@/Layouts/PanelLayout'
import { Link } from '@inertiajs/react'

const Admins = ({admins}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAdmins = admins.filter((admin) => {
    return (
      admin.id.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <PanelLayout>
      <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='justify-between flex '>
              <h2 className='text-2xl'>Admins</h2>
              <Link className='py-2 px-14 bg-main-color rounded-md' href="/manage/admins/register">Cadastrar</Link>
            </div>
            <input
              className='mt-8 w-full rounded-md border-gray-200 border'
              type="text"
              placeholder='Pesquisar'
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </form>

          <div className='mt-10'>
            <div className='items-center container justify-between grid grid-cols-4 md:grid-cols-5 w-full p-5 bg-gray-200 rounded-md '>
                <div className='md:px-8 hidden md:block'>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg> */}
                </div>
                  <p className='font-semibold md:px-8'>ID</p>
                  <p className='font-semibold md:px-8'>Nome</p>
                  <p className='font-semibold md:px-8'>Email</p>
            </div>
            <div className='max-h-[650px] overflow-auto'>
            {filteredAdmins.map((admin) => (
                <Link href={`/manage/admins/${admin.id}`} key={admin.id} className='items-center container justify-between grid grid-cols-4 md:grid-cols-5 w-full p-5 rounded-md hover:bg-gray-100 cursor-pointer'>
                    <div className='md:px-8 hidden md:block'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <p className='md:px-8'>{admin.id}</p>
                    <p className='md:px-8 whitespace-nowrap overflow-hidden text-ellipsis'>{admin.name}</p>
                    <p className='md:px-8 whitespace-nowrap overflow-hidden text-ellipsis'>{admin.email}</p>
                    <div className='flex gap-4 md:px-8'>
                    <Link href={`/manage/admins/${admin.id}/edit`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                    </Link>
                    <Link method="delete" as='button' href={`/manage/admins/${admin.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </Link>
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </div>
    </PanelLayout>
  )
}

export default Admins