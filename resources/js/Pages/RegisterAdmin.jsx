import PanelLayout from '@/Layouts/PanelLayout';

const RegisterAdmin = () => {
  return (
    <PanelLayout>
      <div className="flex gap-4 items-center mb-8">
        <svg
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
      <form>
        <div className="flex">
          <label className="w-40">Nome</label>
          <input className="w-full border-gray-300 mb-4" type="text" required placeholder="Digite o título" />
        </div>
        <div className="flex">
          <label className="w-40">Email</label>
          <input className="w-full border-gray-300 mb-4" type="email" required placeholder="Digite o título" />
        </div>
        <div className="flex">
          <label className="w-40">Senha</label>
          <input className="w-full border-gray-300 mb-4" type="password" required placeholder="Digite o título" />
        </div>
        <div className="flex">
          <label className="w-40">Confirmar Senha</label>
          <input className="w-full border-gray-300 mb-4" type="password" required placeholder="Digite o título" />
        </div>
        <div className="flex justify-end">
            <button className="py-2 bg-main-color px-10" type="submit">Registrar</button>
        </div>
      </form>
    </PanelLayout>
  );
};

export default RegisterAdmin;