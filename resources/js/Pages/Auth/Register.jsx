import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, useForm } from '@inertiajs/react';
import PanelLayout from '@/Layouts/PanelLayout';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register.store'));
    };

    return (
        <PanelLayout>
            <Head title="Register" />
            <div className="flex gap-4 items-center mb-8">
                <svg
                onClick={() => history.back()}
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
                <h1 className="text-2xl">Cadastrar Admin</h1>
            </div>


            <form onSubmit={submit}>
                <div>
                    <div className="flex">
                        <label className="w-40">Nome</label>
                        <input
                            onChange={handleOnChange}
                            className="w-full border-gray-200 rounded-md mb-4"
                            type="text"
                            name="name"
                            value={data.name}
                            required
                            placeholder="Digite o título"
                        />
                    </div>
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <div className="flex">
                        <label className="w-40">Email</label>
                        <input
                            onChange={handleOnChange}
                            className="w-full border-gray-200 rounded-md mb-4"
                            type="email"
                            name="email"
                            value={data.email}
                            required
                            placeholder="Digite o título"
                        />
                    </div>
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <div className="flex">
                        <label className="w-40">Senha</label>
                        <input
                            onChange={handleOnChange}
                            className="w-full border-gray-200 rounded-md mb-4"
                            type="password"
                            name="password"
                            value={data.password}
                            required
                            placeholder="Digite o título"
                        />
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <div className="flex">
                        <label className="w-40">Confirmar senha</label>
                        <input
                            onChange={handleOnChange}
                            className="w-full border-gray-200 rounded-md mb-4"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            required
                            placeholder="Digite o título"
                        />
                    </div>
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </PanelLayout>
    );
}