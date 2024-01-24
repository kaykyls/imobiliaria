import React from 'react'

const Contact = () => {
  return (
    <>
        <div id="#contact" className="flex container mx-auto gap-20 my-20  ">
            <div>
                <h3 className="text-2xl mb-5">Entre em contato</h3>
                <form className="flex flex-col w-[400px] ">
                    <label>Nome:</label>
                    <input className="border-gray-300 mb-4" type="text" required/>
                    <label>Email:</label>
                    <input className="border-gray-300 mb-4" type="email" required/>
                    
                    <label>Telefone:</label>
                    <input className="border-gray-300 mb-4" type="tel" required/>
                    <label>Mensagem</label>
                    <textarea 
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