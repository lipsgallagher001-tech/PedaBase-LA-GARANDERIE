
import React from 'react';
import { User } from '../types';
import { SearchIcon, ChevronDownIcon } from './icons';

interface UserManagementProps {
    users: User[];
}

const UserRow: React.FC<{ user: User }> = ({ user }) => (
    <tr className="border-b border-neutral-200 hover:bg-neutral-50">
        <td className="p-4 whitespace-nowrap">
            <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={user.avatar} alt="" />
                </div>
                <div className="ml-4">
                    <div className="text-sm font-medium text-neutral-900">{user.name}</div>
                    <div className="text-sm text-neutral-500">{user.email}</div>
                </div>
            </div>
        </td>
        <td className="p-4 whitespace-nowrap text-sm text-neutral-500">{user.role}</td>
        <td className="p-4 whitespace-nowrap">
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {user.status}
            </span>
        </td>
        <td className="p-4 whitespace-nowrap text-sm text-neutral-500">{user.lastActivity}</td>
        <td className="p-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" className="text-brand-secondary hover:text-brand-primary">
                ...
            </a>
        </td>
    </tr>
);

const UserManagement: React.FC<UserManagementProps> = ({ users }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-brand-dark">Gestion des comptes enseignants</h1>
                        <p className="mt-1 text-sm text-neutral-500">Créer, modifier et gérer les comptes des enseignants.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-brand-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                        >
                            + Créer un compte
                        </button>
                    </div>
                </div>

                <div className="mt-6 bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
                     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="relative text-neutral-500 flex-1">
                            <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Rechercher par nom ou email..."
                                className="bg-white border border-neutral-300 rounded-lg pl-10 pr-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                             <div className="relative">
                                <select className="appearance-none bg-white border border-neutral-300 rounded-lg py-2.5 pl-3 pr-8 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-secondary">
                                    <option>Rôle: Tous</option>
                                    <option>Administrateur</option>
                                    <option>Modérateur</option>
                                    <option>Enseignant</option>
                                </select>
                                <ChevronDownIcon className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                            </div>
                             <div className="relative">
                                <select className="appearance-none bg-white border border-neutral-300 rounded-lg py-2.5 pl-3 pr-8 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-secondary">
                                    <option>Statut: Actif</option>
                                    <option>Statut: Inactif</option>
                                    <option>Statut: Tous</option>
                                </select>
                                <ChevronDownIcon className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-neutral-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-neutral-200">
                                    <thead className="bg-neutral-50">
                                        <tr>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                                Nom et Prénom
                                            </th>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                                Rôle
                                            </th>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                                Statut
                                            </th>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                                Dernière activité
                                            </th>
                                            <th scope="col" className="relative p-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-neutral-200">
                                        {users.map((user) => (
                                            <UserRow key={user.email} user={user} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
