import PanelLayout from '@/Layouts/PanelLayout';
import React from 'react';
import { useForm } from '@inertiajs/react'

const RegisterProperty = () => {
  const { data, setData, post } = useForm({
    title: '',
    cep: '',
    district: '',
    street: null,
    number: null,
    complement: '',
    price: null,
    code: null,
    description: '',
    images: [],
    category: 'Casa',
    isForRent: 'Venda',
    status: 'Ativo',
    bedrooms: null,
    bathrooms: null,
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
    post(route('property.store'), data);
  }

  console.log(data.category, data.isForRent, data.status)

  return (
    <PanelLayout>
      <div className="flex gap-4 items-center mb-8">
        <svg
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
        <h1 className="text-2xl">Cadastrar Imóvel</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label className="w-40">Título</label>
          <input
            className="w-full border-gray-300 mb-4"
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
              className="w-1/4 border-gray-300 mr-4"
              type="text"
              name="cep"
              value={data.cep}
              onChange={handleInputChange}
              placeholder="CEP"
              required
            />
            <input
              className="w-1/4 border-gray-300 mr-4"
              type="text"
              name="district"
              value={data.district}
              onChange={handleInputChange}
              placeholder="Bairro"
              required
            />
            <input
              className="w-1/4 border-gray-300 mr-4"
              type="number"
              name="number"
              value={data.number}
              onChange={handleInputChange}
              placeholder="Número"
              required
            />
            <input
              className="w-1/4 border-gray-300"
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
            className="w-full border-gray-300 mb-4"
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
            className="w-full border-gray-300 mb-4"
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
            className="w-full border-gray-300 mb-4"
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
            className="w-full border-gray-300 mb-4"
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
            <label className="w-32 h-32 mb-4 bg-gray-300" htmlFor="image"></label>
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
              <div className="flex gap-4">
                {Array.from(data.images).map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={image.name}
                    className="w-32 h-32 object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex">
          <label className="w-40">Tipo</label>
          <select
            className="w-full border-gray-300 mb-4"
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
            className="w-full border-gray-300 mb-4"
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
            className="w-full border-gray-300 mb-4"
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
            className="w-full border-gray-300 mb-4"
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
            className="w-full border-gray-300 mb-8"
            type="number"
            min="0"
            name="bathrooms"
            value={data.bathrooms}
            onChange={handleInputChange}
            placeholder="Número de banheiros"
          />
        </div>
        <div className="flex justify-end">
          <button className="py-2 bg-main-color px-10" type="submit">
            Registrar
          </button>
        </div>
      </form>
    </PanelLayout>
  );
};

export default RegisterProperty;