import BannerImg from '/public/img/banner.jpg'

const Banner = () => {
  return (
    <div className='relative'>
        <img className="h-[400px] md:h-[450px] object-cover w-full object-bottom" src={BannerImg} alt="Banner" />
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#000000cc] to via-[#00000099] md:from-[rgba(0,0,0,0.7)] md:via-[rgba(0,0,0,0.4)] to-transparent'>
          <div className="container mx-auto h-full flex items-center">
            <div className='max-w-[280px] md:max-w-[400px]'>
              <span className='text-sm md:text-base text-gray-300'>Sua nova moradia.</span>
              <h1 className='text-2xl md:text-3xl text-white font-medium mb-4 mt-1'>Encontre seu lar ideal hoje, invista no seu futuro conosco!</h1>
              <p className='text-sm md:text-base text-gray-300 leading-6'>Encontre o lar dos seus sonhos. Nossa imobiliária oferece uma variedade de opções para atender às suas necessidades.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner