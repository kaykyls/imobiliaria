import React from 'react'
import PanelLayout from '@/Layouts/PanelLayout'
import { Link } from '@inertiajs/react'

const Admins = (props) => {
  // console.log(props)

  return (
    <PanelLayout>
      <div>
          <form>
            <div className='justify-between flex '>
              <h2 className='text-2xl'>Admins</h2>
              <Link className='py-2 px-14 bg-main-color rounded-md' href="/register">Cadastrar</Link>
            </div>
            <input className='mt-8 w-full rounded-md border-gray-200 border' type="text" placeholder='Pesquisar' />
          </form>

          <div className='mt-10 '>
            <div className='items-center container justify-between grid grid-cols-4 w-full p-5 bg-gray-200 rounded-md '>
                <div className='px-8'>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg> */}
                </div>
                  <p className='font-semibold px-8'>ID</p>
                  <p className='font-semibold px-8'>Nome</p>
                  <p className='font-semibold px-8'>Email</p>
            </div>
            <div className='items-center container justify-between grid grid-cols-4 w-full p-5 rounded-md hover:bg-gray-100 cursor-pointer'>
                  <div className='px-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-gray-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                  <p className='px-8'>1</p>
                  <p className='px-8'>Nome</p>
                  <p className='px-8'>Email</p>
            </div>

            
          </div>
      </div>
    </PanelLayout>
  )
}

export default Admins