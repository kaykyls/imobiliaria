import React from 'react'
import Layout from '@/Layouts/Layout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useForm } from '@inertiajs/react'

const Property = ({property}) => {
  const {title, address, price, id, description, category, status, bedrooms, bathrooms, images} = property

  const sliderSettings = {
    customPaging: function(i) {
      return (
        <a>
          <img className='object-cover w-full h-full' src={images[i]} />
        </a>
      );
    },
    autoplay: true,
    dots: true,
    dotsClass: "[&>li]:inline-block [&>li]:w-16 [&>li]:h-16 mx-auto [&>li]:cursor-pointer [&>li]:mr-2 text-center",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const { data, setData, post } = useForm({
    name: '',
    email: '',
    phone: '',
    userMessage: '',
    propertyId: id
  })

  const handleSubmit = (e) => {
      e.preventDefault()
      post(route('propertyContact', data), {
          preserveScroll: true,
          onSuccess: () => {
              setData('name', '')
              setData('email', '')
              setData('phone', '')
              setData('userMessage', '')
          }
      })
  }

  const handleChange = (e) => {
    setData(e.target.name, e.target.value)
  }

  return (
    <Layout>
        <div className='container flex flex-col md:flex-row'>
            <div>
              <div>
                <div className="slide md:w-[800px] h-[470px] my-20">
                  <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img className='w-full h-[470px] object-cover' src={image} alt={title}/>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              
              <div className='my-10'>
                <h1 className="font-semibold text-2xl mb-5	">{title}</h1>
                <h4>Endereço: {address.street}, {address.number}, {address.district}, {address.cep}.</h4>
                <p className='mt-7 leading-loose'>{description}</p>
                <h4 className="font-semibold text-2xl mt-5	">R${price}</h4>
                
                <div className="flex gap-5 mt-4">
                  <div className="flex gap-4">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_177_234)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.5 7.5C2.5 6.80965 1.94035 6.25 1.25 6.25C0.559644 6.25 0 6.80965 0 7.5V22.5C0 23.1904 0.559644 23.75 1.25 23.75C1.94035 23.75 2.5 23.1904 2.5 22.5V20H27.5V22.5C27.5 23.1904 28.0596 23.75 28.75 23.75C29.4404 23.75 30 23.1904 30 22.5V12.5C30 9.73857 27.7614 7.5 25 7.5H16.25C14.8693 7.5 13.75 8.61929 13.75 10V17.5H2.5V7.5ZM27.5 12.5V17.5H16.25V10H25C26.3808 10 27.5 11.1193 27.5 12.5Z" fill="#1E1E1E"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.125 16.25C10.5412 16.25 12.5 14.2912 12.5 11.875C12.5 9.45875 10.5412 7.5 8.125 7.5C5.70875 7.5 3.75 9.45875 3.75 11.875C3.75 14.2912 5.70875 16.25 8.125 16.25ZM8.125 13.8499C7.03428 13.8499 6.15008 12.9658 6.15008 11.875C6.15008 10.7843 7.03428 9.90008 8.125 9.90008C9.21572 9.90008 10.0999 10.7843 10.0999 11.875C10.0999 12.9658 9.21572 13.8499 8.125 13.8499Z" fill="#1E1E1E"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_177_234">
                          <rect width="30" height="30" fill="white"/>
                          </clipPath>
                          </defs>
                      </svg>
                      <span className="flex items-center">{bedrooms} quarto{bedrooms > 1 && "s"}</span>
                  </div>
                  <div className="flex gap-4">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.0325 7.59501C14.3671 7.97733 13.125 9.4686 13.125 11.25V12.1875H20.625V11.25C20.625 9.563 19.511 8.13617 17.9785 7.665C18.2729 7.01482 18.9274 6.5625 19.6875 6.5625C20.723 6.5625 21.5625 7.40196 21.5625 8.4375V15.9375H5.625V17.8125H6.5625V22.5C6.5625 24.0532 7.8217 25.3125 9.375 25.3125H20.625C22.1782 25.3125 23.4375 24.0532 23.4375 22.5V17.8125H24.375V15.9375H23.4375V8.4375C23.4375 6.36644 21.7586 4.6875 19.6875 4.6875C17.9061 4.6875 16.4149 5.92963 16.0325 7.59501ZM8.4375 17.8125H21.5625V22.5C21.5625 23.0177 21.1427 23.4375 20.625 23.4375H9.375C8.85724 23.4375 8.4375 23.0177 8.4375 22.5V17.8125ZM16.875 9.375C17.569 9.375 18.175 9.75206 18.4991 10.3125H15.2509C15.575 9.75206 16.181 9.375 16.875 9.375Z" fill="#1E1E1E"/>
                      </svg>
                      <span className="flex items-center">{bathrooms} banheiro{bathrooms > 1 && "s"}</span>
                  </div>
                </div>

              </div>
            </div>
            
            
            <div id="#contact" className="md:flex md:mx-10 gap-20 my-20  ">
              <div>
                  
                  <button className=" mb-4 w-full border-gray-300  bg-gray-300 hover:bg-gray-400  color-white py-2 transition duration-500 cursor-pointer"  >WhatsApp</button>

                  <div className='flex mb-5 items-center'>
                      <div className='h-[1px] bg-gray-300 w-full'></div>
                      <p className='mx-2'>Ou</p>
                      <div className='h-[1px] bg-gray-300 w-full'></div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col md:w-[400px] ">
                      <label>Nome:</label>
                      <input name='name' value={data.name} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="text" required/>
                      <label>Email:</label>
                      <input name='email' value={data.email} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="email" required/>
                      
                      <label>Telefone:</label>
                      <input name='phone' value={data.phone} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="tel" required/>
                      <label>Mensagem</label>
                      <textarea 
                          name='userMessage'
                          value={data.userMessage}
                          onChange={(e) => handleChange(e)}
                          className="border-gray-300 mb-4" 
                          placeholder="Digite uma mensagem?"
                          required
                          >
                      </textarea>

                      <input className="border-gray-300 bg-main-color hover:bg-gray-300 color-white py-2 transition duration-500 cursor-pointer w-full " type="submit" value="Enviar"/>
                  </form>
              </div>
              
            </div>
            
        </div>
    </Layout>
  )
}

export default Property