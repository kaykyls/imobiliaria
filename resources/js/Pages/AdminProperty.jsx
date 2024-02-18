import React from 'react'
import PanelLayout from '@/Layouts/PanelLayout'
import { Link } from '@inertiajs/react'

const AdminProperty = ({property}) => {
  const {title, address, price, id, description, category, isForRent, status, bedrooms, bathrooms, images} = property
  
  return (
    <PanelLayout>
      <div className='flex justify-between mb-8'>
        <div className="flex items-center gap-8">
          <Link href='/manage/properties'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <span className='text-2xl'>Imóvel</span>
        </div>
      <Link href={`/manage/properties/${id}/edit`} className='bg-main-color py-2 px-14 rounded-md cursor-pointer'>
        Editar
      </Link>
      </div>
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-semibold leading-7 text-gray-900">Informações do Imóvel</h3>
        <p class="mt-1 max-w-2xl leading-6 text-gray-500">Informações como título, descrição, etc.</p>
      </div>
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Código</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{id}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Título</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{title}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Descrição</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{description}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Preço</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{price}</dd>
          </div>
          

          <div class="px-4 sm:px-0 my-10">
            <h3 class="text-lg font-semibold leading-7 text-gray-900">Informações do Endereço</h3>
            <p class="mt-1 max-w-2xl leading-6 text-gray-500">Informações como Logradouro, CEP, etc.</p>
          </div>

          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Logradouro</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{address.street}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">CEP</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{address.cep}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Bairro</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{address.district}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Número</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{address.number}</dd>
          </div>
          {address.complement && (
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="font-semibold leading-6 text-gray-900">Complemento</dt>
              <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{address.complement}</dd>
            </div>
          )}

          <div class="px-4 sm:px-0 my-10">
            <h3 class="text-lg font-semibold leading-7 text-gray-900">Detalhes do Imóvel</h3>
            <p class="mt-1 max-w-2xl leading-6 text-gray-500">Informações como cômodos, imagens, etc.</p>
          </div>
          
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Categoria</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{category ? "Casa" : "Apartamento"}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Venda/Aluguel</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{isForRent ? "Aluguel" : "Venda"}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Status</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{status ? "Ativo" : "Inativo"}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Quartos</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{bedrooms}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">banheiros</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{bathrooms}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Imagens</dt>
            <dd class="mt-2 text-gray-900 sm:col-span-2 sm:mt-0 flex gap-4 flex-wrap">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Imagem ${index}`} className="w-32 h-32 object-cover rounded-md" />
              ))}
          </dd>
       </div>
      </dl>
   </div>
    </PanelLayout>
  )
}

export default AdminProperty