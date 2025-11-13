
import React from 'react';
import { Resource } from '../types';
import { resources, currentUser } from '../data';
import { UploadCloudIcon } from './icons';

interface DashboardProps {
    onViewResource: (resource: Resource) => void;
    onUploadResource: () => void;
}

const StatCard: React.FC<{ title: string; value: string | number }> = ({ title, value }) => (
    <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
        <p className="text-sm text-neutral-500">{title}</p>
        <p className="text-3xl font-bold text-brand-dark mt-1">{value}</p>
    </div>
);

const ResourcePreviewCard: React.FC<{ resource: Resource, onClick: () => void }> = ({ resource, onClick }) => (
    <div onClick={onClick} className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-brand-secondary transition-all duration-200 cursor-pointer">
        <h3 className="font-semibold text-neutral-900 truncate">{resource.title}</h3>
        <p className="text-sm text-neutral-500 mt-1 line-clamp-2">{resource.description}</p>
        <div className="flex items-center space-x-2 mt-4">
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">{resource.subject}</span>
            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">{resource.level}</span>
        </div>
        <p className="text-xs text-neutral-400 mt-3">By {resource.author.name} &middot; {resource.creationDate}</p>
    </div>
);

const DiscussionPreviewCard: React.FC<{ title: string, lastComment: string }> = ({ title, lastComment }) => (
    <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
        <h3 className="font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm text-neutral-500 mt-1">{lastComment}</p>
    </div>
);

const Dashboard: React.FC<DashboardProps> = ({ onViewResource, onUploadResource }) => {
    const recentResources = resources.slice(0, 3);
    const myContributions = resources.filter(r => r.author.id === currentUser.id).slice(0, 1);
    const popularResources = [...resources].sort((a, b) => b.downloads - a.downloads).slice(0,1);

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-brand-dark">Bonjour, {currentUser.name.split(' ')[0]}!</h1>
                <p className="mt-1 text-neutral-500">Welcome to your central hub for pedagogical resources.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <StatCard title="Total Resources" value="1,204" />
                    <StatCard title="Active Members" value="87" />
                    <StatCard title="Active Discussions" value="23" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Recent Resources</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {recentResources.map(res => <ResourcePreviewCard key={res.id} resource={res} onClick={() => onViewResource(res)} />)}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Active Discussions</h2>
                        <div className="space-y-4">
                            <DiscussionPreviewCard title="Best practices for classroom management?" lastComment="Last comment by S. Dubois - 15m ago" />
                            <DiscussionPreviewCard title="Ideas for end-of-year projects" lastComment="Last comment by P. Martin - 1h ago" />
                             <button className="w-full text-center bg-brand-primary text-white font-semibold py-2.5 rounded-lg hover:bg-brand-dark transition duration-200">
                                Start a Discussion
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-semibold text-neutral-900 mb-4">My Contributions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {myContributions.length > 0 ? (
                                myContributions.map(res => <ResourcePreviewCard key={res.id} resource={res} onClick={() => onViewResource(res)} />)
                            ) : (
                                <p className="text-neutral-500">You haven't contributed any resources yet.</p>
                            )}
                            <div onClick={onUploadResource} className="bg-white p-5 rounded-xl border-2 border-dashed border-neutral-300 flex flex-col items-center justify-center text-center hover:border-brand-secondary hover:bg-neutral-50 transition cursor-pointer">
                                <UploadCloudIcon className="w-12 h-12 text-brand-secondary" />
                                <h3 className="font-semibold text-neutral-900 mt-4">Upload a New Resource</h3>
                                <p className="text-sm text-neutral-500 mt-1">Share your materials with fellow educators.</p>
                                <button className="mt-4 bg-brand-secondary text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-primary transition">
                                    Add File
                                </button>
                            </div>
                        </div>
                    </div>
                     <div>
                        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Popular This Month</h2>
                        <div className="space-y-4">
                            {popularResources.map(res => <ResourcePreviewCard key={res.id} resource={res} onClick={() => onViewResource(res)} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
