import React from 'react'
import { useForm } from '@inertiajs/react'

const Contact = () => {
    const { data, setData, post } = useForm({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('contact', data), {
            preserveScroll: true,
            onSuccess: () => {
                setData('name', '')
                setData('email', '')
                setData('phone', '')
                setData('message', '')
            }
        })
    }

    const handleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    console.log(data)


  return (
    <>
        <div id="contact" className="flex flex-col md:flex-row container mx-auto gap-20 my-20  ">
            <div>
                <h3 className="text-2xl mb-5">Entre em contato</h3>
                <form onSubmit={handleSubmit} className="flex flex-col md:w-[400px] ">
                    <label>Nome:</label>
                    <input name='name' value={data.name} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="text" required/>
                    <label>Email:</label>
                    <input name='email' value={data.email} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="email" required/>
                    <label>Telefone:</label>
                    <input name='phone' value={data.phone} onChange={(e) => handleChange(e)} className="border-gray-300 mb-4" type="tel" required/>
                    <label>Mensagem</label>
                    <textarea 
                        name='message'
                        value={data.message}
                        onChange={(e) => handleChange(e)}
                        className="border-gray-300 mb-4" 
                        placeholder="Digite uma mensagem?"
                        required
                        >
                    </textarea>

                    <input className="border-gray-300 hover:bg-main-color color-white py-2 transition duration-500 cursor-pointer" type="submit" value="Enviar"/>
                </form>
            </div>
            <div>
                <h3 className="text-2xl mb-5" >Endereço</h3>
                <div className="flex flex-col gap-2">
                    <p className=" font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className="border-gray-300 mb-4 hover:bg-main-color py-2 transition duration-500 cursor-pointer" >Veja como chegar!</button>
                    <p><a href="#">(00)0 0000-0000</a></p>
                    <p><a href="#">Mandar email</a></p>
                    <p></p>
                </div>     
            </div>
        </div>
    </>
  )
}

export default Contact