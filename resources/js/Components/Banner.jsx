import BannerImg from '/public/img/banner.jpg'

const Banner = () => {
    console.log(BannerImg)

  return (
    <div>
        <img className="h-[450px] object-cover w-full object-bottom" src={BannerImg} alt="Banner" />
    </div>
  )
}

export default Banner