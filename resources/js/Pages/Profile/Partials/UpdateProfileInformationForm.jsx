import { useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function UpdateProfileInformation({ user , className }) {
    const { data, setData, patch, processing, errors } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Informações do admin</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Atualize seu nome de perfil ou endereço de email.
                </p>
            </header>

            <form onSubmit={submit} className="space-y-6 mt-6">
                <div>
                    <div className='w-1/3'>
                        <label htmlFor="name" className="block text-base font-medium leading-6 text-gray-900">Nome</label>
                        <input
                            onChange={(e) => setData('name', e.target.value)}
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full rounded-md border-gray-200"
                            value={data.name}
                            required
                            placeholder="Digite o nome"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">O nome está vazio.</p>}
                    </div>
                </div>

                <div>
                    <div className='w-1/3'>
                        <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">Email</label>
                        <input
                            onChange={(e) => setData('email', e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-gray-200"
                            value={data.email}
                            required
                            placeholder="Digite o email"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">O email está vazio ou incorreto.</p>}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                        <button
                                disabled={processing}
                                type="submit"
                                className="rounded-md bg-main-color px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-color"
                            >
                            Salvar
                        </button>
                </div>
            </form>
        </section>
    );
}
