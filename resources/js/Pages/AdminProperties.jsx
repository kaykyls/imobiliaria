import React from 'react'
import PanelLayout from '@/Layouts/PanelLayout'
import { Link } from '@inertiajs/react'

const AdminProperties = (props) => {
  console.log(props)

  return (
    <PanelLayout>
      <div>
          <form>
            <div className='justify-between flex '>
              <h2 className='text-2xl'>Imóveis</h2>
              <Link className='py-2 px-14 bg-main-color rounded-md' href="/manage/properties/register">Cadastrar</Link>
            </div>
            <input className='mt-8 w-full rounded-md border-gray-200 border' type="text" placeholder='Pesquisar' />
          </form>

          <div className='mt-10 '>
            <div className='items-center container justify-between flex flex-row w-full p-5 bg-gray-200 rounded-md '>
                <div className='w-14 h-14'></div>
                <p className='w-[60px]'>id</p>
                <p className='w-[100px]'>endereço</p>
                <p className='w-[80px]'>valor</p>
                <p className='w-[60px]'>ativo</p>
                <p className='w-[60px]'>tipo</p>
                <div className='flex gap-4'>
                  <div className='w-6 h-6'></div>
                  <div className='w-6 h-6'></div>
                </div>
            </div>

            {props.properties.map((property) => (
              <Link href={`/manage/properties/${property.id}`} key={property.id} className='items-center container rounded-md justify-between flex flex-row w-full p-5 hover:bg-gray-300 '>
                <img className='w-14 h-14 rounded-md object-cover' src={property.images[0]} alt="" />
                <p className='w-[60px]'>{property.id}</p>
                <p className='w-[100px] whitespace-nowrap overflow-hidden text-ellipsis'>{props.addresses.find(address => address.id === property.address_id)?.street}, {props.addresses.find(address => address.id === property.address_id)?.number}, {props.addresses.find(address => address.id === property.address_id)?.district}</p>
                <p className='w-[80px]'>R${property.price}</p>
                {/* <div className='w-[60px] flex justify-center'>{property.status ? <div className="bg-green-500 w-2 h-2 rounded-full"></div> : <div className="bg-red-500 w-2 h-2 rounded-full"></div>}</div> */}
                <div className='w-[60px]'>{property.status ? "Ativo" : "Inativo"}</div>
                <p className='w-[60px]'>{property.category ? "Casa" : "Apartamento"}</p>
                <div className='flex gap-4'>
                  <Link href={`/manage/properties/edit/${property.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"       strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </Link>
                  <Link method="delete" href={`/manage/properties/${property.id}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  </Link>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </PanelLayout>
  )
}

export default AdminProperties