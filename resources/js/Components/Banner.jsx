import BannerImg from '/public/img/banner.jpg'

const Banner = () => {
  return (
    <div>
        <img className="h-[250px] md:h-[450px] object-cover w-full object-bottom" src={BannerImg} alt="Banner" />
    </div>
  )
}

export default Banner