import { Link } from '@inertiajs/react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
        <div className="flex flex-col container mx-auto py-10 justify-between divide-y divide-gray-900">
            <div className="grid grid-cols-2 md:flex md:flex-row gap-12 md:gap-24 mb-16">
                <ul className='space-y-3'>
                    <li className ="mb-2 font-semibold">Social</li>
                    <li className='text-gray-400'><Link href='https://www.facebook.com/'>Facebook</Link></li>
                    <li className='text-gray-400'><Link href='https://www.instagram.com/'>Instagram</Link></li>
                    <li className='text-gray-400'><Link href='https://www.Linkedin.com/'>Linkedin</Link></li>
                </ul>
                <ul className='space-y-3'>
                    <li className ="mb-2 font-semibold">Contato</li>
                    <li className='text-gray-400'><a href='tel:+5599987654321'>(99) 9 8765-4321</a></li>
                    <li className='break-words text-gray-400'>atendimento@Lyksimoveis.com.br</li>
                    <li className='text-gray-400'>WhatsApp</li>
                </ul>
                <ul className='space-y-3'>
                    <li className ="mb-2 font-semibold">Menu</li>
                    <li className='text-gray-400'><Link href='/'>Início</Link></li>
                    <li className='text-gray-400'><Link href='/#properties'>Imóveis</Link></li>
                    <li className='text-gray-400'><Link href='/#about'>Sobre</Link></li>
                </ul>
                <ul className='space-y-3'>
                    <li className ="mb-2 font-semibold">Outros</li>
                    <li className='text-gray-400'><Link href='/manage'>Admin</Link></li>
                </ul>
            </div>
            <div className='pt-8'>
                <Link className='text-sm' href="/">© 2024 Lyks Imóveis</Link>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer