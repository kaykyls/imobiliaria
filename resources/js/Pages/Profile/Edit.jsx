import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import PanelLayout from '@/Layouts/PanelLayout';

export default function Edit({ user, mustVerifyEmail }) {
    return (
        <PanelLayout>
            <Head title="Profile" />
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
            <h1 className="text-2xl">Editar Admin</h1>
          </div>

            <div>
                <div className="max-w-7xl mx-auto space-y-6">
                    <div className="bg-white sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            user={user}
                            // status={status}
                        />
                    </div>

                    <div className="bg-white sm:rounded-lg">
                        <UpdatePasswordForm
                            user={user}
                        />
                    </div>

                    <div className="bg-white sm:rounded-lg">
                        <DeleteUserForm
                            user={user}
                        />
                    </div>
                </div>
            </div>
        </PanelLayout>
    );
}
