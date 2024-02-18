import { useRef } from 'react';
import { useForm } from '@inertiajs/react';

export default function UpdatePasswordForm({ className, user }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update', user), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Atualizar Senha</h2>

                <p className="mt-1 text-sm text-gray-600">
                Certifique-se de que sua conta esteja usando uma senha longa e aleatória para se manter seguro.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <div className='w-1/3'>
                        <label htmlFor="current_password" className="block text-base font-medium leading-6 text-gray-900">Senha Atual</label>
                        <input
                            type="password"
                            name="current_password"
                            id="current_password"
                            className="block w-full rounded-md border-gray-200"
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            required
                            placeholder="Digite a senha atual"
                            utoComplete="current-password"
                        />
                        {errors.current_password && <p className="mt-1 text-sm text-red-500">A senha está incorreta.</p>}
                    </div>
                </div>

                <div>
                    <div className='w-1/3'>
                        <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">Nova Senha</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full rounded-md border-gray-200"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            placeholder="Digite a nova senha"
                            autoComplete="new-password"
                        />
                        {errors.password === "The password field confirmation does not match."  && <p className="mt-1 text-sm text-red-500">Os campos não coincidem</p>}
                        {errors.password === "The password field must be at least 8 characters."  && <p className="mt-1 text-sm text-red-500">A senha deve ter no mínimo 8 caracteres</p>}
                    </div>
                </div>

                <div>
                    <div className='w-1/3'>
                        <label htmlFor="password_confirmation" className="block text-base font-medium leading-6 text-gray-900">Confirmar Senha</label>
                        <input
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                            className="block w-full rounded-md border-gray-200"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                            placeholder="Confirme a nova senha"
                            autoComplete="new-password"
                        />
                        {errors.password_confirmation && <p className="mt-1 text-sm text-red-500">As senhas não coincidem.</p>}
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
