import React from 'react'
import { useForm } from '@inertiajs/react'

const Contact = () => {
    const { data, setData, post } = useForm({
        name: '',
        email: '',
        phone: '',
        userMessage: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('contact', data), {
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
        <>
            <div id="contact" className="flex flex-col md:flex-row container mx-auto gap-20 my-20  ">
                <div className='max-w-lg'>
                    <h3 className="text-2xl mb-6">Entre em contato</h3>
                    <span className='leading-loose text-gray-600'>Dúvidas, sugestões ou mais informações sobre nossos serviços? Entre em contato conosco. Estamos aqui para ajudar você no mercado imobiliário. Aguardamos o seu contato!</span>
                    <div className='flex gap-4  mt-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                        </svg>
                        <div className='flex flex-col text-gray-600'>
                            <span>Rua das Casas Encantadas, 123</span>
                            <span>Bairro dos Sonhos, Feira de Santana - BA</span>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center mt-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <a className='text-gray-600' href="tel:+15551234567">(99) 9 8765-4321</a> 
                    </div>
                    <div className='flex gap-4 items-center mt-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <span className='text-gray-600'>atendimento@Lyksimoveis.com.br</span>
                    </div>
                </div>
                <div>
                    <form id='contact-form' onSubmit={handleSubmit} className="flex flex-col md:w-[400px] ">
                        <label className='mb-3 font-medium' htmlFor='name'>Nome:</label>
                        <input autoComplete='on' placeholder='Digite seu nome' name='name' id='name' value={data.name} onChange={(e) => handleChange(e)} className="rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color mb-4" type="text" required/>
                        <label className='mb-3 font-medium' htmlFor='email'>Email:</label>
                        <input autoComplete='on' placeholder='Digite seu email' name='email' id='email' value={data.email} onChange={(e) => handleChange(e)} className="rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color mb-4" type="email" required/>
                        <label className='mb-3 font-medium' htmlFor='phone'>Telefone:</label>
                        <input autoComplete='on' placeholder='Digite seu telefone' name='phone' id='phone' value={data.phone} onChange={(e) => handlePhoneChange(e)} className="rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color mb-4" type="tel" maxLength="15" required/>
                        <label className='mb-3 font-medium' htmlFor='userMessage'>Mensagem</label>
                        <textarea 
                            id='userMessage'
                            name='userMessage'
                            value={data.userMessage}
                            onChange={(e) => handleChange(e)}
                            className="rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color mb-6" 
                            placeholder="Digite uma mensagem"
                            required
                            >
                        </textarea>

                        <input className="rounded-md border-gray-300 bg-main-color hover:bg-main-color-dark shadow-sm font-semibold text-white transition color-white py-2 cursor-pointer" type="submit" value="Enviar"/>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default Contact
