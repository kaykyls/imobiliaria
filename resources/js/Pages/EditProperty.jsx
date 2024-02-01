import React, { useEffect } from 'react'
import PanelLayout from '@/Layouts/PanelLayout'
import { router, useForm } from '@inertiajs/react'
// import { Inertia } from '@inertiajs/react'

const EditProperty = ({property}) => {
    const {title, address, price, id, description, category, status, bedrooms, bathrooms, images} = property

    console.log(property)

    const { data, setData, put } = useForm({
        title: title,
        cep: address.cep,
        district: address.district,
        number: address.number,
        complement: address.complement,
        street: address.street,
        price: price,
        code: id,
        description: description,
        category: category,
        isForRent: category,
        status: status,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        images: images,
      })
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleFileChange = (event) => {
        const newImages = [...data.images, ...event.target.files];
    
        setData({
          ...data,
          images: newImages,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // put(route('manageProperty.update'), data);
        router.post(route('manageProperty.update', property.id), {
            _method: 'put',
            ...data
        });

      }
    
      return (
        <PanelLayout>
          <div className="flex gap-4 items-center mb-8">
            <svg
              onClick={() => history.back()}
              className="cursor-pointer"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12.5H5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19.5L5 12.5L12 5.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-2xl">Editar Imóvel</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <label className="w-40">Título</label>
              <input
                className="w-full border-gray-200 rounded-md mb-4"
                type="text"
                name="title"
                value={data.title}
                onChange={handleInputChange}
                required
                placeholder="Digite o título"
              />
            </div>
            <div className="flex">
              <label className="w-40">CEP</label>
              <div className="flex w-full mb-4">
                <input
                  className="w-1/4 border-gray-200 rounded-md mr-4"
                  type="text"
                  name="cep"
                  value={data.cep}
                  onChange={handleInputChange}
                  placeholder="CEP"
                  required
                />
                <input
                  className="w-1/4 border-gray-200 rounded-md mr-4"
                  type="text"
                  name="district"
                  value={data.district}
                  onChange={handleInputChange}
                  placeholder="Bairro"
                  required
                />
                <input
                  className="w-1/4 border-gray-200 rounded-md mr-4"
                  type="number"
                  name="number"
                  value={data.number}
                  onChange={handleInputChange}
                  placeholder="Número"
                  required
                />
                <input
                  className="w-1/4 border-gray-200 rounded-md"
                  type="text"
                  name="complement"
                  value={data.complement}
                  onChange={handleInputChange}
                  placeholder="Complemento"
                  required
                />
              </div>
            </div>
            <div className="flex">
              <label className="w-40">Logradouro</label>
              <input
                className="w-full border-gray-200 rounded-md mb-4"
                type="text"
                name="street"
                value={data.street}
                onChange={handleInputChange}
                required
                placeholder="Digite o logradouro"
              />
            </div>
            <div className="flex">
              <label className="w-40">Preço</label>
              <input
                className="w-full border-gray-200 rounded-md mb-4"
                type="number"
                name="price"
                value={data.price}
                onChange={handleInputChange}
                placeholder="R$"
                required
              />
            </div>
            <div className="flex">
              <label className="w-40">Código</label>
              <input
                className="w-full border-gray-200 rounded-md mb-4"
                type="number"
                name="code"
                value={data.code}
                onChange={handleInputChange}
                required
                placeholder="Digite o código"
              />
            </div>
            <div className="flex">
              <label className="w-40">Descrição</label>
              <textarea
                className="w-full border-gray-200 rounded-md mb-4"
                rows="4"
                name="description"
                value={data.description}
                onChange={handleInputChange}
                required
                placeholder="Digite a descrição"
              ></textarea>
            </div>
            <div className="flex">
              <span className="w-40">Imagens</span>
              <div className="flex gap-4">
                <label className="w-32 h-32 mb-4 border-gray-200 rounded-md border flex flex-col gap-4 cursor-pointer items-center justify-center" htmlFor="image">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                  <span>Fazer Upload</span>
                </label>
                <input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  name="images"
                  multiple
                  id="image"
                  onChange={handleFileChange}
                />
                {data.images.length > 0 && (
                  <div className="flex gap-4 flex-wrap mb-4">
                  {data.images.map((image, index) => (
                    <div onClick={() => {
                          const newImages = [...data.images];
                          newImages.splice(index, 1);
                          setData({
                            ...data,
                            images: newImages,
                          });
                        }} key={index} className="relative w-32 h-32 group cursor-pointer">
                      <img
                        src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                        alt={typeof image === 'string' ? image : image.name}
                        className="w-32 h-32 object-cover rounded-md"
                        
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#00000075] to-black opacity-0 group-hover:opacity-70 rounded-md transition"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                        <span>
                           Remover
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                )}
              </div>
            </div>
            <div className="flex">
              <label className="w-40">Tipo</label>
              <select
                className="w-full border-gray-200 rounded-md mb-4"
                name="category"
                value={data.category}
                onChange={handleInputChange}
                required
              >
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-40">Venda/Aluguel</label>
              <select
                className="w-full border-gray-200 rounded-md mb-4"
                name="isForRent"
                value={data.isForRent}
                onChange={handleInputChange}
                required
              >
                <option value="venda">Venda</option>
                <option value="aluguel">Aluguel</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-40">Status</label>
              <select
                className="w-full border-gray-200 rounded-md mb-4"
                name="status"
                value={data.status}
                onChange={handleInputChange}
                required
              >
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-40">Quartos</label>
              <input
                className="w-full border-gray-200 rounded-md mb-4"
                type="number"
                min="0"
                name="bedrooms"
                value={data.bedrooms}
                onChange={handleInputChange}
                placeholder="Número de quartos"
              />
            </div>
            <div className="flex">
              <label className="w-40">Banheiros</label>
              <input
                className="w-full border-gray-200 rounded-md mb-8"
                type="number"
                min="0"
                name="bathrooms"
                value={data.bathrooms}
                onChange={handleInputChange}
                placeholder="Número de banheiros"
              />
            </div>
            <div className="flex justify-end">
              <button className="py-2 px-14 rounded-md bg-main-color" type="submit">
                Editar
              </button>
            </div>
          </form>
        </PanelLayout>
      );
    };

export default EditProperty