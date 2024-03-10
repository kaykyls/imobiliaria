import React from 'react'
import Layout from '@/Layouts/Layout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useForm } from '@inertiajs/react'

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className=' h-full absolute flex items-center right-0 top-0 z-50 cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 mx-4 stroke-white bg-[#0000003e] rounded-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className='h-full  absolute flex items-center top-0 left-0 z-50 cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 mx-4 stroke-white bg-[#0000003e] rounded-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </div>
  );
}

const Property = ({property}) => {
  const {title, address, price, id, description, category, isForRent, bedrooms, bathrooms, images} = property

  const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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

  const formatPhoneNumber = (value) => {
    const cleaned = ('' + value).replace(/\D/g, '');

    const limited = cleaned.slice(0, 11);

    const match = limited.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + (match[3] ? '-' + match[3] : '');
    }
    return value;
  }

  const handlePhoneChange = (e) => {
      const formattedPhone = formatPhoneNumber(e.target.value);
      setData('phone', formattedPhone);
  }

  return (
    <Layout>
        <div className='container flex flex-col xl:flex-row'>
            <div className='w-full'>
              <div className='w-full'>
                <div className="my-10 md:my-20 lg:max-w-[900px] rounded-md">
                {images.length === 1 ? (
                  <img className='md:h-[490px] w-full object-contain bg-neutral-100 rounded-md' src={images[0]} alt={title} />
                ) : (
                  <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                      <div className='max-w-full' key={index}>
                        <img className='h-[470px] w-full object-contain bg-neutral-100 rounded-md' src={image} alt={title} />
                      </div>
                    ))}
                  </Slider>
                )}
                </div>
              </div>
              <div className='mt-10 mb-10 md:mb-20'>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
              <h2 className="text-xl py-4">{formattedPrice}<span className='text-base'>/{isForRent ? "Aluguel" : "Venda"}</span></h2>
              <h2 className='text-xl py-4 font-bold tracking-tight text-gray-900 sm:text-xl border-t border-gray-200'>Descrição</h2>
              <p className='leading-loose mb-4 text-gray-600'>{description}</p>
              <h2 className='text-xl py-4 font-bold tracking-tight text-gray-900 sm:text-xl border-t border-gray-200'>Endereço</h2>
              <div class="mt-4">
                <ul class="space-y-2 mb-4">
                  <li><span class="text-gray-600">{address.street}, {address.number}.</span></li>
                  <li><span class="text-gray-600">{address.district}, {address.cep}.</span></li>
                  {address.complement && <li><span class="text-gray-600">{address.complement}</span></li>}
                </ul>
              </div>
              <h2 className='text-xl py-4 font-bold tracking-tight text-gray-900 sm:text-xl border-t border-gray-200'>Detalhes</h2>
                <div className="flex gap-5 mt-4">
                  <div className="flex gap-2 flex-wrap">
                    <div className="flex gap-2 items-center border rounded-full px-4 py-1">
                      <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="https://www.w3.org/2000/svg">
                        <path d="M15 7.138V1C15 0.801088 14.921 0.610322 14.7803 0.46967C14.6397 0.329018 14.4489 0.25 14.25 0.25C14.0511 0.25 13.8603 0.329018 13.7197 0.46967C13.579 0.610322 13.5 0.801088 13.5 1V1.75H3V1C3 0.801088 2.92098 0.610322 2.78033 0.46967C2.63968 0.329018 2.44891 0.25 2.25 0.25C2.05109 0.25 1.86032 0.329018 1.71967 0.46967C1.57902 0.610322 1.5 0.801088 1.5 1V7.138C1.06282 7.29256 0.684069 7.57842 0.415566 7.95648C0.147063 8.33453 0.00192223 8.7863 0 9.25V13C0 13.1989 0.0790176 13.3897 0.21967 13.5303C0.360322 13.671 0.551088 13.75 0.75 13.75C0.948912 13.75 1.13968 13.671 1.28033 13.5303C1.42098 13.3897 1.5 13.1989 1.5 13V12.25H15V13C15 13.1989 15.079 13.3897 15.2197 13.5303C15.3603 13.671 15.5511 13.75 15.75 13.75C15.9489 13.75 16.1397 13.671 16.2803 13.5303C16.421 13.3897 16.5 13.1989 16.5 13V9.25C16.4981 8.7863 16.3529 8.33453 16.0844 7.95648C15.8159 7.57842 15.4372 7.29256 15 7.138ZM13.5 7H12.75V5.5C12.75 5.30109 12.671 5.11032 12.5303 4.96967C12.3897 4.82902 12.1989 4.75 12 4.75H4.5C4.30109 4.75 4.11032 4.82902 3.96967 4.96967C3.82902 5.11032 3.75 5.30109 3.75 5.5V7H3V3.25H13.5V7ZM5.25 7V6.25H7.5V7H5.25ZM9 6.25H11.25V7H9V6.25ZM1.5 9.25C1.5 9.05109 1.57902 8.86032 1.71967 8.71967C1.86032 8.57902 2.05109 8.5 2.25 8.5H14.25C14.4489 8.5 14.6397 8.57902 14.7803 8.71967C14.921 8.86032 15 9.05109 15 9.25V10.75H1.5V9.25Z" fill="black"/>
                      </svg>
                      <span className="flex items-center text-sm text-nowrap">{bedrooms} Quarto{bedrooms > 1 && "s"}</span>
                    </div>
                    <div className="flex gap-2 items-center border rounded-full px-4 py-1">
                      <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="https://www.w3.org/2000/svg">
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
                  
                  <button className="flex justify-center items-center gap-2 mb-4 w-full border-gray-300  bg-main-color hover:bg-main-color-dark text-white font-semibold color-white py-2 transition duration-500 cursor-pointer"  ><svg fill='white' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
    <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
</svg>WhatsApp</button>

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
                      <input autoComplete='on' placeholder='Digite seu telefone' name='phone' id='phone' value={data.phone} onChange={(e) => handlePhoneChange(e)} className="border-gray-300 mb-4" type="tel" maxLength="15" required/>
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

                      <input className="border-gray-300 bg-gray-300 hover:bg-gray-400 transition font-semibold shadow-sm py-2 duration-500 cursor-pointer w-full " type="submit" value="Enviar"/>
                  </form>
              </div>
              
            </div>
            
        </div>
    </Layout>
  )
}

export default Property