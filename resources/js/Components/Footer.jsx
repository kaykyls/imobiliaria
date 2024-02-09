import { Link } from '@inertiajs/react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
        <div className="flex flex-col gap-8 container mx-auto py-10 justify-between">
            <div className="grid grid-cols-2 md:flex md:flex-row gap-12 ">
                <ul>
                    <li className ="mb-2 font-semibold">Social</li>
                    <li><Link href='https://www.facebook.com/'>Facebook</Link></li>
                    <li><Link href='https://www.instagram.com/'>Instagram</Link></li>
                    <li><Link href='https://www.Linkedin.com/'>Linkedin</Link></li>
                </ul>
                <ul>
                    <li className ="mb-2 font-semibold">Contato</li>
                    <li>(00)0800-0000</li>
                    <li className='break-words'>Atendimento@Lyksimoveis.com.br</li>
                    <li>WhatsApp</li>
                </ul>
                <ul>
                    <li className ="mb-2 font-semibold">Menu</li>
                    <li><Link href='#inicio'>Início</Link></li>
                    <li><Link href='#imoveis'>Imóveis</Link></li>
                    <li><Link href='#sobre'>Sobre</Link></li>
                </ul>
                <ul>
                    <li className ="mb-2 font-semibold">Outros</li>
                    <li><Link href='/manage'>Admin</Link></li>
                </ul>
            </div>
            <div>
                <Link href="/">Lyks Imóveis</Link>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer