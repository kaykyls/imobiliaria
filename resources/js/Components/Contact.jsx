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
                    <input autoComplete='on' placeholder='Digite seu telefone' name='phone' id='phone' value={data.phone} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="tel" required/>
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

                    <input className="border-gray-300 bg-main-color color-white py-2 transition duration-500 cursor-pointer" type="submit" value="Enviar"/>
                </form>
            </div>
            <div>
                <h3 className="text-2xl mb-5" >Endereço</h3>
                <div className="flex flex-col gap-2">
                    <p className=" font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    {/* <button className="border-gray-300 mb-4 bg-main-color py-2 transition duration-500 cursor-pointer" >Veja como chegar!</button> */}
                    <a href="tel:+15551234567">(00)0 0000-0000</a>
                    <p></p>
                </div>     
            </div>
        </div>
    </>
  )
}

export default Contact