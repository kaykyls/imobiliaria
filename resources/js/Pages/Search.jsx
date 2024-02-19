import { useState, useRef, useEffect } from 'react'
import { router } from '@inertiajs/react';
import Layout from '@/Layouts/Layout'
import Card from '@/Components/Card'

const Search = ({properties, search}) => {
  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);

  const [bedrooms, setBedrooms] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);
  const [value, setValue] = useState(null);
  const [category, setCategory] = useState(null);
  const [isRent, setIsRent] = useState(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const bedroomsParam = urlParams.get('bedrooms');
    const bathroomsParam = urlParams.get('bathrooms');
    const valueParam = urlParams.get('priceBelow');
    const categoryParam = urlParams.get('category');
    const isRentParam = urlParams.get('isForRent');

    setBedrooms(bedroomsParam || null);
    setBathrooms(bathroomsParam || null);
    setValue(valueParam || null);
    setCategory(categoryParam || null);
    setIsRent(isRentParam === 'true' ? true : isRentParam === 'false' ? false : null);
  }, []);

  const handleSubmit = () => {
    router.get(`/search?q=${search}` + 
               (bedrooms !== null ? `&bedrooms=${bedrooms}` : '') + 
               (bathrooms !== null ? `&bathrooms=${bathrooms}` : '') + 
               (value !== null ? `&priceBelow=${value}` : '') + 
               (category !== null ? `&category=${category}` : '') + 
               (isRent !== null ? `&isForRent=${isRent}` : ''));

    setModal(!modal);
  };

  const handleRentChange = (event) => {
    const selectedValue = event.target.value;
    setIsRent(selectedValue === '' ? null : selectedValue === '2');
  };

  return (
    <Layout>

      {modal && <div className="bg-black bg-opacity-70 flex items-center justify-center w-full h-full fixed z-50 top-0 left-0">
        <form ref={modalRef} onSubmit={() => handleSubmit()} className="bg-white p-8 rounded-md flex flex-col">
          <div className="flex justify-between mb-4">
            <span>Filtros de Pesquisa</span>
            <svg className="cursor-pointer" onClick={() => setModal(!modal)} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M18.5737 6.71472L6.57373 18.7147" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.57373 6.71472L18.5737 18.7147" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-[900px]">
            <div className="w-full md:w-1/5">
              <label className="border-b border-gray-200 pb-2 block mb-4 font-semibold" htmlFor="rooms">Quartos</label>
              <select name="rooms" id="rooms" className="w-full py-1 rounded-md border-gray-200" value={bedrooms || ''} onChange={e => setBedrooms(e.target.value)}>
                <option value="">Todos</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="w-full md:w-1/5">
              <label className="border-b border-gray-200 pb-2 block mb-4 font-semibold" htmlFor="bathrooms">Banheiros</label>
              <select name="bathrooms" id="bathrooms" className="w-full py-1 rounded-md border-gray-200" value={bathrooms || ''} onChange={e => setBathrooms(e.target.value)}>
                <option value="">Todos</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="w-full md:w-1/5">
              <label className="border-b border-gray-200 pb-2 block mb-4 font-semibold" htmlFor="isRent">Venda / Aluguel</label>
              <select onChange={handleRentChange} name="isRent" id="isRent" className="w-full py-1 rounded-md border-gray-200" value={isRent !== null ? (isRent ? '2' : '1') : ''}>
                <option value="">Todos</option>
                <option value="1">Venda</option>
                <option value="2">Aluguel</option>
              </select>
            </div>
            <div className="w-full md:w-1/5">
              <label className="border-b border-gray-200 pb-2 block mb-4 font-semibold" htmlFor="value">Valor</label>
              <div>
                <select name="value" id="value" className="w-full py-1 rounded-md border-gray-200" value={value || ''} onChange={e => setValue(e.target.value)}>
                  <option value="">Qualquer</option>
                  {isRent ? (
                    <>
                      <option value="1000">Até R$1.000</option>
                      <option value="2000">Até R$2.000</option>
                      <option value="3000">Até R$3.000</option>
                      <option value="4000">Até R$4.000</option>
                      <option value="5000">Até R$5.000</option>
                    </>
                  ) : (
                    <>
                      <option value="50000">Até R$50.000</option>
                      <option value="100000">Até R$100.000</option>
                      <option value="200000">Até R$200.000</option>
                      <option value="300000">Até R$300.000</option>
                      <option value="400000">Até R$400.000</option>
                      <option value="500000">Até R$500.000</option>
                      <option value="1000000">R$1.000.000</option>
                    </>
                  )}
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/5">
              <label className="border-b border-gray-200 pb-2 block mb-4 font-semibold" htmlFor="isRent">Categoria</label>
              <select name="isRent" id="isRent" className="w-full py-1 rounded-md border-gray-200" value={category || ''} onChange={e => setCategory(e.target.value)}>
                <option value="">Todas</option>
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button className="bg-main-color hover:bg-main-color-dark transition font-semibold text-white shadow-sm px-4 py-1">Aplicar</button>
          </div>
        </form>
      </div>}
      <div className="container min-h-screen">
        <div className="flex justify-between my-8">
          <h2><span className="font-semibold">Busca por:</span> {search}</h2>
          <div onClick={() => setModal(!modal)} className="flex px-4 py-1 bg-neutral-900 text-white cursor-pointer">
            <span>Filtros</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M10.5 6H20.25M10.5 6C10.5 6.39782 10.342 6.77936 10.0607 7.06066C9.77936 7.34196 9.39782 7.5 9 7.5C8.60218 7.5 8.22064 7.34196 7.93934 7.06066C7.65804 6.77936 7.5 6.39782 7.5 6M10.5 6C10.5 5.60218 10.342 5.22064 10.0607 4.93934C9.77936 4.65804 9.39782 4.5 9 4.5C8.60218 4.5 8.22064 4.65804 7.93934 4.93934C7.65804 5.22064 7.5 5.60218 7.5 6M7.5 6H3.75M10.5 18H20.25M10.5 18C10.5 18.3978 10.342 18.7794 10.0607 19.0607C9.77936 19.342 9.39782 19.5 9 19.5C8.60218 19.5 8.22064 19.342 7.93934 19.0607C7.65804 18.7794 7.5 18.3978 7.5 18M10.5 18C10.5 17.6022 10.342 17.2206 10.0607 16.9393C9.77936 16.658 9.39782 16.5 9 16.5C8.60218 16.5 8.22064 16.658 7.93934 16.9393C7.65804 17.2206 7.5 17.6022 7.5 18M7.5 18H3.75M16.5 12H20.25M16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5C14.6022 13.5 14.2206 13.342 13.9393 13.0607C13.658 12.7794 13.5 12.3978 13.5 12M16.5 12C16.5 11.6022 16.342 11.2206 16.0607 10.9393C15.7794 10.658 15.3978 10.5 15 10.5C14.6022 10.5 14.2206 10.658 13.9393 10.9393C13.658 11.2206 13.5 11.6022 13.5 12M13.5 12H3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 md:grid md:grid-cols-3 lg:grid-cols-4 mb-8">
          {properties && properties.length > 0 ? (
            properties.map((property, index) => ( 
              <Card
                key={index}
                href={`/properties/${property.id}`}
                img={property.images[0]}
                title={property.title}
                value={property.price}
                rooms={property.bedrooms}
                bathrooms={property.bathrooms}
                isForRent={property.isForRent}
              />
            ))
          ) : (
            <div>
              <h1 className='font-semibold mb-8'>Não encontrado</h1>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Search
