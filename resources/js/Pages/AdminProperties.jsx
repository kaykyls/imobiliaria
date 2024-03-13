import React, { useState } from 'react'
import PanelLayout from '@/Layouts/PanelLayout'
import { Link } from '@inertiajs/react'

const AdminProperties = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const auth = props.auth;

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProperties = props.properties.filter((property) => {
    return (
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.id.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <PanelLayout user={auth.user}>
      <>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='justify-between flex '>
              <h2 className='text-2xl'>Imóveis</h2>
              <Link className='py-2 px-14 bg-main-color hover:bg-main-color-dark font-semibold shadow-sm text-white transition rounded-md' href="/manage/properties/register">Cadastrar</Link>
            </div>
            <input
              className='mt-8 w-full rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color'
              id='search'
              name='search'
              value={searchQuery}
              onChange={handleSearchInputChange}
              type="text"
              placeholder='Pesquisar...'
            />
          </form>

          <table className='mt-10 w-full'>
            <thead>
              <tr className='items-center container justify-between flex flex-row w-full p-5 bg-gray-200 rounded-md '>
                <div className='w-14'></div>
                <p className='w-[60px] font-semibold'>ID</p>
                <p className='w-[100px] md:w-[150px] font-semibold'>Título</p>
                <p className='w-[80px] font-semibold'>Valor</p>
                <p className='w-[60px] hidden md:block font-semibold'>Ativo</p>
                <p className='w-[60px] hidden md:block font-semibold'>Tipo</p>
                <div className='flex gap-4'>
                  <div className='w-6 h-6'></div>
                  <div className='w-6 h-6'></div>
                </div>
              </tr>
                
            </thead>
            <tbody className='max-h-[500px] md:max-h-[600px] overflow-auto'>
            {filteredProperties.map((property) => (
                <Link href={`/manage/properties/${property.id}`} key={property.id} >
                  <tr className='items-center container rounded-md justify-between flex flex-row w-full p-5 hover:bg-white '>
                    <img className='w-10 h-10 md:w-14 md:h-14 rounded-md object-cover' src={property.images[0]} alt={property.title} />
                    <td className='w-[60px] ml-2 md:m-0'>{property.id}</td>
                    <td className='w-[100px] md:w-[150px] whitespace-nowrap overflow-hidden text-ellipsis'>{property.title}</td>
                    <td className='w-[80px] whitespace-nowrap overflow-hidden text-ellipsis'>R${property.price}</td>
                    <td className='w-[60px] hidden md:block whitespace-nowrap overflow-hidden text-ellipsis'>{property.status ? "Ativo" : "Inativo"}</td>
                    <td className='w-[60px] hidden md:block whitespace-nowrap overflow-hidden text-ellipsis'>{property.category ? "Casa" : "Apartamento"}</td>
                    <div className='flex gap-4'>
                      <Link href={`/manage/properties/${property.id}/edit`}>
                        <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"       strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                      </Link>
                      <Link method="delete" as="button" href={`/manage/properties/${property.id}`}>
                      <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                      </Link>
                    </div>
                  </tr>
                  
                </Link>
              ))}
              </tbody>
          </table>
      </>
    </PanelLayout>
  )
}

export default AdminProperties