import aboutImg from '/public/img/aboutSvg.svg';
import { Link } from '@inertiajs/react'

export default function About() {
  return (
    <div name="about" id="about" className="container">
        <h2 className="text-2xl">Sobre Nós</h2>
        <span className="w-10 block h-1 bg-main-color"></span>
        <div className="mx-auto mt-8 flex flex-col md:flex-row gap-20">
            <div className="md:w-1/2 flex flex-col gap-6 justify-center">
                <h3 className='text-2xl md:text-3xl font-medium leading-normal'>
                    Transformamos sonhos em lares, oferecendo excelência e confiança em cada negócio imobiliário.
                </h3>
                <p className="text-gray-600 leading-8 mb-4">
                    Somos uma equipe de profissionais apaixonados pelo mercado imobiliário, comprometidos em oferecer as melhores soluções para nossos clientes. Com anos de experiência no ramo, construímos uma reputação sólida baseada em confiança, integridade e excelência no atendimento.
                </p>
                <div>
                    <Link className='bg-main-color hover:bg-main-color-dark transition font-semibold text-white shadow-sm py-3 px-12 rounded-md' href='#contact'>
                        Contate-nos
                    </Link>
                </div>
                
            </div>

            <div className="md:w-1/2">
            <img
                className="max-w-700 max-h-450 w-auto h-auto"
                src={aboutImg}
                alt="Sobre nós"
            />
            </div>
        </div>
    </div>
  );
}
