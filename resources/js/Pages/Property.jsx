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
    // autoplay: true,
    dots: true,
    dotsClass: "[&>li]:inline-block [&>li]:w-16 [&>li]:h-16 mx-auto [&>li]:cursor-pointer [&>li]:mr-2 text-center",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
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
        <div className='container flex flex-col xl:flex-row'>
            <div>
              <div>
                <div className="lg:w-[800px] my-10 md:my-20">
                  <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img className='h-[470px] object-cover' src={image} alt={title}/>
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
                  <div className="flex gap-2 flex-wrap">
                    <div className="flex gap-2 items-center border rounded-full px-4 py-1">
                      <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 7.138V1C15 0.801088 14.921 0.610322 14.7803 0.46967C14.6397 0.329018 14.4489 0.25 14.25 0.25C14.0511 0.25 13.8603 0.329018 13.7197 0.46967C13.579 0.610322 13.5 0.801088 13.5 1V1.75H3V1C3 0.801088 2.92098 0.610322 2.78033 0.46967C2.63968 0.329018 2.44891 0.25 2.25 0.25C2.05109 0.25 1.86032 0.329018 1.71967 0.46967C1.57902 0.610322 1.5 0.801088 1.5 1V7.138C1.06282 7.29256 0.684069 7.57842 0.415566 7.95648C0.147063 8.33453 0.00192223 8.7863 0 9.25V13C0 13.1989 0.0790176 13.3897 0.21967 13.5303C0.360322 13.671 0.551088 13.75 0.75 13.75C0.948912 13.75 1.13968 13.671 1.28033 13.5303C1.42098 13.3897 1.5 13.1989 1.5 13V12.25H15V13C15 13.1989 15.079 13.3897 15.2197 13.5303C15.3603 13.671 15.5511 13.75 15.75 13.75C15.9489 13.75 16.1397 13.671 16.2803 13.5303C16.421 13.3897 16.5 13.1989 16.5 13V9.25C16.4981 8.7863 16.3529 8.33453 16.0844 7.95648C15.8159 7.57842 15.4372 7.29256 15 7.138ZM13.5 7H12.75V5.5C12.75 5.30109 12.671 5.11032 12.5303 4.96967C12.3897 4.82902 12.1989 4.75 12 4.75H4.5C4.30109 4.75 4.11032 4.82902 3.96967 4.96967C3.82902 5.11032 3.75 5.30109 3.75 5.5V7H3V3.25H13.5V7ZM5.25 7V6.25H7.5V7H5.25ZM9 6.25H11.25V7H9V6.25ZM1.5 9.25C1.5 9.05109 1.57902 8.86032 1.71967 8.71967C1.86032 8.57902 2.05109 8.5 2.25 8.5H14.25C14.4489 8.5 14.6397 8.57902 14.7803 8.71967C14.921 8.86032 15 9.05109 15 9.25V10.75H1.5V9.25Z" fill="black"/>
                      </svg>
                      <span className="flex items-center text-sm text-nowrap">{bedrooms} Quarto{bedrooms > 1 && "s"}</span>
                    </div>
                    <div className="flex gap-2 items-center border rounded-full px-4 py-1">
                      <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.23828 12.4021C6.23828 12.8263 6.58184 13.1698 7.006 13.1698C7.43016 13.1698 7.77371 12.8263 7.77371 12.4021C7.77371 12.1245 7.48971 11.7988 7.26409 11.4712C7.1405 11.2918 6.87655 11.2919 6.75279 11.4712C6.52714 11.7981 6.23828 12.1251 6.23828 12.4021Z" fill="black"/>
                        <path d="M8.35693 10.6113C8.35693 11.0355 8.70049 11.379 9.12465 11.379C9.54881 11.379 9.89236 11.0355 9.89236 10.6113C9.89236 10.3338 9.60839 10.0081 9.38271 9.68046C9.25913 9.50103 8.99514 9.50108 8.87138 9.6804C8.64576 10.0074 8.35693 10.3344 8.35693 10.6113Z" fill="black"/>
                        <path d="M4.11963 10.6113C4.11963 11.0355 4.46318 11.379 4.88734 11.379C5.3115 11.379 5.65506 11.0355 5.65506 10.6113C5.65506 10.3338 5.37109 10.0081 5.14544 9.68046C5.02185 9.50103 4.75784 9.50108 4.63411 9.6804C4.40849 10.0074 4.11963 10.3344 4.11963 10.6113Z" fill="black"/>
                        <path d="M6.20221 3.78623C4.60726 4.07497 3.39993 5.20102 3.32303 6.56865C3.32118 6.60474 3.33378 6.64013 3.35868 6.66636C3.3835 6.69262 3.41818 6.70757 3.45427 6.70757H10.5578C10.5938 6.70757 10.6285 6.69259 10.6529 6.66636C10.6777 6.6401 10.6908 6.60474 10.689 6.56865C10.6098 5.16234 9.33678 4.01077 7.67438 3.76327C7.38472 1.91779 5.78886 0.5 3.86301 0.5C1.73279 0.5 0 2.23302 0 4.36298V13.7801C0 14.1778 0.322477 14.5 0.719905 14.5C1.11739 14.5 1.43981 14.1778 1.43981 13.7801V4.36298C1.43981 3.02673 2.52673 1.93981 3.86298 1.93981C4.99112 1.93981 5.93364 2.71856 6.20221 3.78623Z" fill="black"/>
                        <path d="M10.6886 7.38879H3.32269C3.05738 7.38879 2.84277 7.6037 2.84277 7.86871C2.84277 8.13381 3.05738 8.34866 3.32269 8.34866H10.6886C10.9539 8.34866 11.1686 8.13381 11.1686 7.86871C11.1686 7.60373 10.9539 7.38879 10.6886 7.38879Z" fill="black"/>
                      </svg>
                      <span className="flex items-center text-sm text-nowrap">{bathrooms} Banheiro{bathrooms > 1 && "s"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div id="#contact" className="md:flex md:mx-10 gap-20 my-10 md:my-20">
              <div>
                  
                  <button className=" mb-4 w-full border-gray-300  bg-gray-300 hover:bg-gray-400  color-white py-2 transition duration-500 cursor-pointer"  >WhatsApp</button>

                  <div className='flex mb-5 items-center'>
                      <div className='h-[1px] bg-gray-300 w-full'></div>
                      <p className='mx-2'>Ou</p>
                      <div className='h-[1px] bg-gray-300 w-full'></div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col md:w-[400px] ">
                      <label htmlFor='name'>Nome:</label>
                      <input autoComplete='on' placeholder='Digite seu nome' id='name' name='name' value={data.name} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="text" required/>
                      <label htmlFor='email'>Email:</label>
                      <input autoComplete='on' placeholder='Digite seu email' id='email' name='email' value={data.email} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="email" required/>
                      
                      <label htmlFor='phone'>Telefone:</label>
                      <input autoComplete='on' placeholder='Digite seu telefone' id='phone' name='phone' value={data.phone} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="tel" required/>
                      <label htmlFor='userMessage'>Mensagem</label>
                      <textarea 
                          id='userMessage'
                          name='userMessage'
                          value={data.userMessage}
                          onChange={(e) => handleChange(e)}
                          className="border-gray-300 mb-4" 
                          placeholder="Digite uma mensagem"
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