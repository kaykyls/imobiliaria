import PanelLayout from "@/Layouts/PanelLayout"
import { Link } from "@inertiajs/react"

export default function Admin({admin}){
  const {id, name, email} = admin

  return(
      <PanelLayout>
        <div className='flex justify-between mb-8'>
        <div className="flex items-center gap-8">
          <Link href='/manage/admins'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <span className='text-2xl'>Admin</span>
        </div>
      <Link href={`/manage/admins/${id}/edit`} className='bg-main-color py-2 px-14 rounded-md cursor-pointer'>
        Editar
      </Link>
      </div>
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-gray-900">Nome do administrador</h3>
        <p class="mt-1 max-w-2xl leading-6 text-gray-500">{name}</p>
      </div>
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">ID</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{id}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="font-semibold leading-6 text-gray-900">Email</dt>
            <dd class="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{email}</dd>
          </div>
        </dl>
      </div>
    </PanelLayout>
    
  )
}