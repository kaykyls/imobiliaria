import { useState } from 'react'
import PanelLayout from '@/Layouts/PanelLayout'
import { router, useForm, Link } from '@inertiajs/react'

const EditProperty = ({property}) => {
    let {title, address, price, id, description, category, isForRent, status, bedrooms, bathrooms, images} = property

    category = category === 0 ? 'Apartamento' : 'Casa'
    status = status === 0 ? 'Inativo' : 'Ativo'
    isForRent = isForRent === 0 ? 'Venda' : 'Aluguel'


    const { data, setData, processing } = useForm({
        title: title,
        cep: address.cep,
        district: address.district,
        number: address.number,
        complement: address.complement,
        street: address.street,
        price: price,
        id: id,
        description: description,
        category: category,
        isForRent: isForRent,
        status: status,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        images: images,
        newImages: [],
        removedImages: []
      })

      const [dragging, setDragging] = useState(false);

      const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
      };
    
      const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
      };
    
      const handleDragLeave = () => {
        setDragging(false);
      };
    
      const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const files = Array.from(e.dataTransfer.files);
        setData((prevData) => ({
            ...prevData,
            newImages: [...prevData.newImages, ...files], // Adicionamos as novas imagens ao array newImages
        }));
    };

    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleCepChange = (e) => {
        const { value } = e.target;

        const formattedCep = formatCep(value);

        setData((prevData) => ({
          ...prevData,
          cep: formattedCep,
        }));
      };
    
      const handleFileChange = (event) => {
        const newImages = [...data.newImages, ...event.target.files];
        setData({
            ...data,
            newImages: newImages,
        });
    }

      const handleRemoveImage = (index) => {
        setData((prevData) => {
          const newImages = [...prevData.images];
      
          const removedImage = newImages.splice(index, 1)[0];
      
          return {
            ...prevData,
            removedImages: [...prevData.removedImages, removedImage],
            images: newImages,
          };
        });
      };

      const handleRemoveNewImage = (index) => {
        setData((prevData) => {
          const newImages = [...prevData.newImages];

          newImages.splice(index, 1);

          return {
            ...prevData,
            newImages: newImages,
          };
        });
      };

      const [errors, setErrors] = useState({});

      const validateForm = () => {
        const errors = {};
    
        if (data.title.trim() === '') {
          errors.title = 'O título é obrigatório';
        }
        if (data.cep.trim() === '') {
          errors.cep = 'O CEP é obrigatório';
        }
        if (data.cep.length < 9) {
          errors.cep = 'O CEP deve conter 8 dígitos';
        }
        if (data.district.trim() === '') {
          errors.district = 'O bairro é obrigatório';
        }
        if (data.street.trim() === '') {
          errors.street = 'O logradouro é obrigatório';
        }
        if (data.number === '') {
          errors.number = 'O número é obrigatório';
        }
        if (data.price.trim() === '') {
          errors.price = 'O preço é obrigatório';
        }
        if (data.description.trim() === '') {
          errors.description = 'A descrição é obrigatória';
        }
        if (data.bedrooms === '') {
          errors.bedrooms = 'O número de quartos é obrigatório';
        }
        if (data.bathrooms === '') {
          errors.bathrooms = 'O número de banheiros é obrigatório';
        }
        if (data.images.length === 0 && data.newImages.length === 0) {
          errors.images = 'Pelo menos uma imagem é obrigatória';
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (!isValid) {
            return;
        }
        
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
              xmlns="https://www.w3.org/2000/svg"
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
        <div className="space-y-12">
          <div className="border-gray-900/10">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">Informações do Imóvel</h2>
            <p className="mt-1 text-base leading-6 text-gray-600">Insira as informações do imóvel.</p>

            <div className="mt-10">
              <label htmlFor="title" className="block text-base font-medium leading-6 text-gray-900">Título *</label>
              <input
                type="text"
                name="title"
                id="title"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-base sm:leading-6"
                value={data.title}
                onChange={handleInputChange}
                placeholder="Digite o título"
                required
              />
            </div>
            {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}

            <div className="mt-6">
              <label htmlFor="description" className="block text-base font-medium leading-6 text-gray-900">Descrição *</label>
              <textarea
                id="description"
                name="description"
                rows="3"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-base sm:leading-6"
                value={data.description}
                onChange={handleInputChange}
                placeholder="Digite a descrição"
                required
              ></textarea>
            </div>
            {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label htmlFor="price" className="block text-base font-medium leading-6 text-gray-900">Preço *</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-base sm:leading-6"
                  value={data.price}
                  onChange={handleInputChange}
                  placeholder="Preço em R$"
                  min={0}
                  required
                />
              </div>
            </div>
            {errors.price && <p className="mt-1 text-sm text-red-500">{errors.price}</p>}

            <h2 className="mt-10 border-t pt-10 text-lg font-semibold leading-7 text-gray-900">Informações do Endereço</h2>
            <p className="mt-1 text-base leading-6 text-gray-600">Insira o endereço do imóvel.</p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-6 gap-6">
              <div className="sm:col-span-4">
                <label htmlFor="street" className="block text-base font-medium leading-6 text-gray-900">Logradouro *</label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-base sm:leading-6"
                  value={data.street}
                  onChange={handleInputChange}
                  placeholder="Digite a rua"
                  required
                />
              {errors.street && <p className="mt-1 text-sm text-red-500">{errors.street}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cep" className="block text-base font-medium leading-6 text-gray-900">CEP *</label>
                <input
                  type="text"
                  name="cep"
                  id="cep"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-base sm:leading-6"
                  value={data.cep}
                  onChange={handleCepChange}
                  maxLength={9}
                  placeholder="Digite o CEP"
                  required
                />
                {errors.cep && <p className="mt-1 text-sm text-red-500">{errors.cep}</p>}
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="district" className="block text-base font-medium leading-6 text-gray-900">Bairro *</label>
                <input
                  type="text"
                  name="district"
                  id="district"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-base sm:leading-6"
                  value={data.district}
                  onChange={handleInputChange}
                  placeholder="Digite o bairro"
                  required
                />
                {errors.district && <p className="mt-1 text-sm text-red-500">{errors.district}</p>}
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="number" className="block text-base font-medium leading-6 text-gray-900">Número *</label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-base sm:leading-6"
                  value={data.number}
                  onChange={handleInputChange}
                  placeholder="Nº"
                  min={0}
                  required
                />
                {errors.number && <p className="mt-1 text-sm text-red-500">{errors.number}</p>}
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="complement" className="block text-base font-medium leading-6 text-gray-900">Complemento</label>
                <input
                  type="text"
                  name="complement"
                  id="complement"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-base sm:leading-6"
                  value={data.complement}
                  onChange={handleInputChange}
                  placeholder="Complemento (opcional)"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900/10 pt-10">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">Detalhes do Imóvel</h2>
            <p className="mt-1 text-base leading-6 text-gray-600">Insira os detalhes do imóvel.</p>
            <div className="mt-10 grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="category" className="block text-base font-medium leading-6 text-gray-900">Categoria</label>
                <div className="mt-2">
                  <div className="flex items-center">
                    <input
                      id="category_house"
                      name="category"
                      type="radio"
                      value="Casa"
                      className="form-radio h-4 w-4 text-main-color transition duration-150 ease-in-out"
                      checked={data.category === 'Casa'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="category_house" className="ml-3">
                      <span className="block text-base leading-5 font-medium text-gray-700">Casa</span>
                    </label>
                  </div>
                  <div className="mt-2 flex items-center">
                    <input
                      id="category_apartment"
                      name="category"
                      type="radio"
                      value="Apartamento"
                      className="form-radio h-4 w-4 text-main-color transition duration-150 ease-in-out"
                      checked={data.category === 'Apartamento'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="category_apartment" className="ml-3">
                      <span className="block text-base leading-5 font-medium text-gray-700">Apartamento</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="isForRent" className="block text-base font-medium leading-6 text-gray-900">Venda/Aluguel</label>
                <div className="mt-2">
                  <div className="flex items-center">
                    <input
                      id="sale"
                      name="isForRent"
                      type="radio"
                      value="Venda"
                      className="form-radio h-4 w-4 text-main-color transition duration-150 ease-in-out"
                      checked={data.isForRent === 'Venda'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="sale" className="ml-3">
                      <span className="block text-base leading-5 font-medium text-gray-700">Venda</span>
                    </label>
                  </div>
                  <div className="mt-2 flex items-center">
                    <input
                      id="rent"
                      name="isForRent"
                      type="radio"
                      value="Aluguel"
                      className="form-radio h-4 w-4 text-main-color transition duration-150 ease-in-out"
                      checked={data.isForRent === 'Aluguel'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="rent" className="ml-3">
                      <span className="block text-base leading-5 font-medium text-gray-700">Aluguel</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="status" className="block text-base font-medium leading-6 text-gray-900">Status</label>
                <div className="mt-2">
                  <div className="flex items-center">
                    <input
                      id="active"
                      name="status"
                      type="radio"
                      value="Ativo"
                      className="form-radio h-4 w-4 text-main-color transition duration-150 ease-in-out"
                      checked={data.status === 'Ativo'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="active" className="ml-3">
                      <span className="block text-base leading-5 font-medium text-gray-700">Ativo</span>
                    </label>
                  </div>
                  <div className="mt-2 flex items-center">
                    <input
                      id="inactive"
                      name="status"
                      type="radio"
                      value="Inativo"
                      className="form-radio h-4 w-4 text-main-color transition duration-150 ease-in-out"
                      checked={data.status === 'Inativo'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="inactive" className="ml-3">
                      <span className="block text-base leading-5 font-medium text-gray-700">Inativo</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-6">
              <div>
                <label htmlFor="bedrooms" className="block text-base font-medium leading-6 text-gray-900">Quartos *</label>
                <input
                  type="number"
                  name="bedrooms"
                  id="bedrooms"
                  className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-base sm:leading-6"
                  value={data.bedrooms}
                  onChange={handleInputChange}
                  placeholder="Número de quartos"
                  min={0}
                  required
                />
                {errors.bedrooms && <p className="mt-1 text-sm text-red-500">{errors.bedrooms}</p>}
              </div>
              <div>
                <label htmlFor="bathrooms" className="block text-base font-medium leading-6 text-gray-900">Banheiros *</label>
                <input
                  type="number"
                  name="bathrooms"
                  id="bathrooms"
                  className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-base sm:leading-6"
                  value={data.bathrooms}
                  onChange={handleInputChange}
                  placeholder="Número de banheiros"
                  min={0}
                  required
                />
                {errors.bathrooms && <p className="mt-1 text-sm text-red-500">{errors.bathrooms}</p>}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900/10 pt-10">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">Imagens do Imóvel</h2>
          <p className="mt-1 text-base leading-6 text-gray-600">Envie as imagens do imóvel.</p>
          <div
            className="mt-10 grid grid-cols-1 gap-6"
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="col-span-full">
              <label htmlFor="images" className="block text-base font-medium leading-6 text-gray-900">Fotos *</label>
              <label htmlFor="images" className={`mt-2 cursor-pointer flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 ${dragging && "border-main-color"}`}>
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                  </svg>
                  <div className="mt-4 flex text-base leading-6 text-gray-600">
                    <span  className="relative cursor-pointer rounded-md font-semibold text-main-color hover:text-indigo-500">
                      <span>Envie um arquivo</span>
                      <input
                        id="images"
                        name="images"
                        type="file"
                        className="sr-only"
                        multiple
                        onChange={handleFileChange}
                      />
                    </span>
                    <p className="pl-1">ou arraste e solte</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-500 mt-2">PNG, JPG até 10MB</p>
                </div>
              </label>
            </div>
            {errors.images && <p className="mt-1 text-sm text-red-500">{errors.images}</p>}
            <div className="col-span-full">
              <div className="grid grid-cols-2 gap-4">
                {data.images.map((image, index) => (
                  <div key={index} className="relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={image} alt={`Imagem ${index + 1}`} className="h-64 w-full object-cover"/>
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 rounded-full bg-white p-1.5 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                    >
                      <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
                {data.newImages.map((newImage, index) => (
                        <div key={index} className="relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                            <img src={URL.createObjectURL(newImage)} alt={`Nova Imagem ${index + 1}`} className="h-64 w-full object-cover"/>
                            <button
                              type="button"
                              onClick={() => handleRemoveNewImage(index)}
                              className="absolute top-1 right-1 rounded-full bg-white p-1.5 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                            >
                              <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                        </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link href='/manage/properties' className="text-base font-semibold leading-6 text-gray-900">Cancelar</Link>
            <button
              disabled={processing}
              type="submit"
              className="rounded-md bg-main-color px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-main-color-dark transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-color"
              onClick={handleSubmit}
            >
              Salvar
            </button>
          </div>
        </form>
        </PanelLayout>
      )
}

export default EditProperty;
