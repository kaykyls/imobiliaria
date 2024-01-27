import PanelLayout from "@/Layouts/PanelLayout"

export default function Admin(){
  return(
      <PanelLayout>
        <div className='container'>
          <div className='flex justify-between mb-8'>
            <div className="flex flex-row gap-2">
              <div className="mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </div>
              <input className=' text-2xl cursor-pointer' type="submit" value="Admins" />
          </div>
          <input className='bg-main-color py-2 px-10 cursor-pointer' type="submit" value="Editar" />
        </div>
        <div className=''>
          <form action="" className='flex flex-col mt-10 w-[400px] gap-2' >
            <div className='flex'>
              <label className='w-20 ' htmlFor="">Nome:</label>
              <p>Fulano</p>
            </div>
            <div className='flex'>
            <label className='w-20 '  htmlFor="">Email</label>
            <p>email@gmail.com</p>
            </div>
          </form>
        </div>
        

      </div>

    </PanelLayout>
    
  )
}