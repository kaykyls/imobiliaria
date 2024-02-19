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

    // Função para formatar o número de telefone corretamente e limitar a quantidade de dígitos
    const formatPhoneNumber = (value) => {
        // Remove todos os caracteres que não são dígitos
        const cleaned = ('' + value).replace(/\D/g, '');
        // Limita para no máximo 11 dígitos
        const limited = cleaned.slice(0, 11);
        // Aplica a formatação (XX) XXXX-XXXX
        const match = limited.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + (match[3] ? '-' + match[3] : '');
        }
        return value;
    }

    const handlePhoneChange = (e) => {
        // Formata o número antes de definir no estado
        const formattedPhone = formatPhoneNumber(e.target.value);
        setData('phone', formattedPhone);
    }

    return (
        <>
            <div id="contact" className="flex flex-col md:flex-row container mx-auto gap-20 my-20  ">
                <div>
                    <h3 className="text-2xl mb-5">Entre em contato</h3>
                    <form id='contact-form' onSubmit={handleSubmit} className="flex flex-col md:w-[400px] ">
                        <label htmlFor='name'>Nome:</label>
                        <input autoComplete='on' placeholder='Digite seu nome' name='name' id='name' value={data.name} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="text" required/>
                        <label htmlFor='email'>Email:</label>
                        <input autoComplete='on' placeholder='Digite seu email' name='email' id='email' value={data.email} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="email" required/>
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

                        <input className="border-gray-300 bg-main-color hover:bg-main-color-dark shadow-sm font-semibold text-white transition color-white py-2 duration-500 cursor-pointer" type="submit" value="Enviar"/>
                    </form>
                </div>
                <div>
                    <h3 className="text-2xl mb-5" >Endereço</h3>
                    <div className="flex flex-col gap-2">
                        <p className=" font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <a href="tel:+15551234567">(00)0 0000-0000</a>
                        <p></p>
                    </div>     
                </div>
            </div>
        </>
    )
}

export default Contact
