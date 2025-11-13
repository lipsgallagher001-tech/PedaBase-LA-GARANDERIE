
import React from 'react';
// Fix: Import Subject enum to resolve 'Cannot find name' error.
import { User, Resource, Badge, Subject } from '../types';
import { resources, badges } from '../data';
import { StarIcon, DownloadIcon, FolderIcon, EyeIcon } from './icons';

interface ProfileProps {
    user: User;
    onViewResource: (resource: Resource) => void;
}

const StatCard: React.FC<{ icon: React.ElementType, value: string | number, label: string }> = ({ icon: Icon, value, label }) => (
    <div className="flex items-center p-4 bg-neutral-50 rounded-lg">
        <Icon className="w-8 h-8 text-brand-secondary" />
        <div className="ml-4">
            <p className="text-2xl font-bold text-brand-dark">{value}</p>
            <p className="text-sm text-neutral-500">{label}</p>
        </div>
    </div>
);

const BadgeCard: React.FC<{ badge: Badge }> = ({ badge }) => (
    <div className="text-center p-4">
        <div className="w-24 h-24 mx-auto bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 text-4xl font-bold">
            {badge.name.charAt(0)}
        </div>
        <h4 className="mt-3 font-semibold text-neutral-800">{badge.name}</h4>
        <p className="text-xs text-neutral-500 mt-1">{badge.description}</p>
    </div>
);

const ResourceRow: React.FC<{ resource: Resource, onClick: () => void }> = ({ resource, onClick }) => (
    <tr className="border-b border-neutral-200 hover:bg-neutral-50">
        <td className="p-4">
            <p className="font-medium text-neutral-900">{resource.title}</p>
            <span className="px-1.5 py-0.5 text-xs font-medium bg-gray-200 text-gray-800 rounded">{resource.type}</span>
        </td>
        <td className="p-4 text-sm text-neutral-500 hidden md:table-cell">{resource.creationDate}</td>
        <td className="p-4 text-sm text-neutral-500 hidden md:table-cell">
             <div className="flex items-center"><DownloadIcon className="w-4 h-4 mr-1"/>{resource.downloads}</div>
        </td>
        <td className="p-4 text-sm text-neutral-500 hidden md:table-cell">
             <div className="flex items-center"><StarIcon className="w-4 h-4 text-yellow-400 mr-1"/>{resource.rating} / 5</div>
        </td>
        <td className="p-4">
            <button onClick={onClick} className="bg-brand-primary text-white font-semibold py-1.5 px-4 rounded-lg hover:bg-brand-dark transition text-sm">Voir</button>
        </td>
    </tr>
);


const Profile: React.FC<ProfileProps> = ({ user, onViewResource }) => {
    const userResources = resources.filter(r => r.author.id === user.id);
    const totalDownloads = userResources.reduce((sum, r) => sum + r.downloads, 0);
    const averageRating = (userResources.reduce((sum, r) => sum + r.rating, 0) / userResources.length).toFixed(1);

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center text-center">
                            <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full ring-4 ring-white shadow-lg" />
                            <h2 className="mt-4 text-2xl font-bold text-brand-dark">{user.name}</h2>
                            <p className="text-neutral-500">{user.role} de {Subject.MATHS}</p>
                            <p className="text-sm text-neutral-400 mt-1">{user.email}</p>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <StatCard icon={FolderIcon} value={userResources.length} label="Ressources Partagées" />
                            <StatCard icon={DownloadIcon} value={totalDownloads} label="Téléchargements" />
                            <StatCard icon={StarIcon} value={`${averageRating}/5`} label="Évaluation Moyenne" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                         <h3 className="text-lg font-semibold text-neutral-900 mb-4">Badges</h3>
                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
                            {badges.map(badge => <BadgeCard key={badge.name} badge={badge} />)}
                         </div>
                    </div>
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Ressources Partagées</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-neutral-200">
                                <thead className="bg-neutral-50">
                                    <tr>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Titre</th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider hidden md:table-cell">Partagé le</th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider hidden md:table-cell">Téléchargements</th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider hidden md:table-cell">Note</th>
                                        <th scope="col" className="relative p-4"><span className="sr-only">Voir</span></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-neutral-200">
                                    {userResources.map(res => <ResourceRow key={res.id} resource={res} onClick={() => onViewResource(res)} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
