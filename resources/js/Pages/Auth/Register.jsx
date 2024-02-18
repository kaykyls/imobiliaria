import { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link } from '@inertiajs/react';
import PanelLayout from '@/Layouts/PanelLayout';

export default function Register() {
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === 'checkbox' ? event.target.checked : event.target.value
        );
    };

    const validateForm = () => {
        const errors = {};

        if (data.name.trim() === '') {
            errors.name = 'O nome é obrigatório';
        }
        if (data.email.trim() === '') {
            errors.email = 'O email é obrigatório';
        }

        if (data.password.length < 8) {
            errors.password = 'A senha deve ter pelo menos 8 caracteres';
        }

        if (data.password !== data.password_confirmation) {
            errors.password_confirmation = 'As senhas não coincidem';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            post(route('register.store'));
        }
    };

    console.log(errors);

    return (
        <PanelLayout>
            <Head title="Register" />
            <div className="flex gap-4 items-center mb-10">
                <Link href="/manage/admins">
                    <svg
                        className="cursor-pointer"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 12.5H5"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 19.5L5 12.5L12 5.5"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
                <h1 className="text-2xl">Cadastrar Admin</h1>
            </div>

            <form onSubmit={submit}>
                <div className="space-y-12">
                    <div className="border-gray-900/10">
                        <h2 className="text-lg font-semibold leading-7 text-gray-900">Informações do Usuário</h2>
                        <p className="mt-1 text-base leading-6 text-gray-600">Insira as informações do administrador.</p>
                        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div>
                                <label htmlFor="name" className="block text-base font-medium leading-6 text-gray-900">
                                    Nome
                                </label>
                                <input
                                    onChange={handleOnChange}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block w-full rounded-md border-gray-200"
                                    value={data.name}
                                    required
                                    placeholder="Digite o nome"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>
                            <div className='row-start-2'>
                                <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <input
                                    onChange={handleOnChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-md border-gray-200"
                                    value={data.email}
                                    required
                                    placeholder="Digite o email"
                                    autoComplete='off'
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>
                            <div className='row-start-3'>
                                <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">Senha</label>
                                <input
                                    onChange={handleOnChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="block w-full rounded-md border-gray-200"
                                    value={data.password}
                                    required
                                    placeholder="Digite a senha"
                                />
                                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}

                            </div>
                            <div className='row-start-4'>
                                <label htmlFor="password_confirmation" className="block text-base font-medium leading-6 text-gray-900">Confirmar Senha</label>
                                <input
                                    onChange={handleOnChange}
                                    type="password"
                                    name="password_confirmation"
                                    id="password_confirmation"
                                    className="block w-full rounded-md border-gray-200"
                                    value={data.password_confirmation}
                                    required
                                    placeholder="Confirme a senha"
                                />
                                {errors.password_confirmation && <p className="mt-1 text-sm text-red-500">{errors.password_confirmation}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-base font-semibold leading-6 text-gray-900">Cancelar</button>
                        <button
                            disabled={processing}
                            type="submit"
                            className="rounded-md bg-main-color px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-color"
                            onClick={submit}
                        >
                        Registrar
                        </button>
                    </div>
                </div>
            </form>
        </PanelLayout>
    );
}
