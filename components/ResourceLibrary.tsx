
import React, { useState } from 'react';
import { Resource, Subject, Level, DocumentType } from '../types';
import { resources } from '../data';
import { SearchIcon, ChevronDownIcon, DocumentTextIcon, BookOpenIcon, FilmIcon, StarIcon } from './icons';

interface ResourceLibraryProps {
    onViewResource: (resource: Resource) => void;
    onUploadResource: () => void;
}

const FilterSidebar: React.FC = () => {
    const StarRatingInput: React.FC<{ name: string, label: string }> = ({ name, label }) => (
        <div className="flex items-center">
            <input id={name} name={name} type="checkbox" className="h-4 w-4 text-brand-secondary border-neutral-300 rounded focus:ring-brand-secondary" />
            <label htmlFor={name} className="ml-3 min-w-0 flex-1 text-neutral-500">{label}</label>
        </div>
    );

    return (
        <div className="w-full lg:w-72 bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">Filter Resources</h3>
            <p className="text-sm text-neutral-500">Refine your search</p>

            <form className="mt-6 space-y-6">
                <div>
                    <label htmlFor="matiere" className="block text-sm font-medium text-neutral-700">Matière</label>
                    <select id="matiere" name="matiere" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary sm:text-sm rounded-md">
                        <option>Toutes</option>
                        {Object.values(Subject).map(s => <option key={s}>{s}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="niveau" className="block text-sm font-medium text-neutral-700">Niveau</label>
                    <select id="niveau" name="niveau" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary sm:text-sm rounded-md">
                        <option>Tous</option>
                        {Object.values(Level).map(l => <option key={l}>{l}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="type_document" className="block text-sm font-medium text-neutral-700">Type de document</label>
                    <select id="type_document" name="type_document" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary sm:text-sm rounded-md">
                        <option>Tous</option>
                        {Object.values(DocumentType).map(d => <option key={d}>{d}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="annee_scolaire" className="block text-sm font-medium text-neutral-700">Année scolaire</label>
                    <select id="annee_scolaire" name="annee_scolaire" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary sm:text-sm rounded-md">
                        <option>Toutes</option>
                        <option>2023-2024</option>
                        <option>2022-2023</option>
                        <option>2021-2022</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm font-medium text-neutral-700">Note minimale</label>
                    <div className="flex items-center mt-2 text-yellow-400">
                        {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-6 h-6" />)}
                    </div>
                </div>
                <div className="pt-6 flex flex-col space-y-3">
                    <button type="submit" className="w-full bg-brand-primary text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-brand-dark transition">Apply Filters</button>
                    <button type="button" className="w-full bg-white text-neutral-700 px-4 py-2.5 rounded-lg font-semibold border border-neutral-300 hover:bg-neutral-50 transition">Clear All</button>
                </div>
            </form>
        </div>
    );
};

const ResourceCard: React.FC<{ resource: Resource, onClick: () => void }> = ({ resource, onClick }) => {
    const iconMap = {
        'pdf': <DocumentTextIcon className="text-red-500" />,
        'docx': <BookOpenIcon className="text-blue-500" />,
        'pptx': <FilmIcon className="text-orange-500" />,
        'zip': <DocumentTextIcon className="text-yellow-500" />,
    };

    return (
        <div onClick={onClick} className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex flex-col hover:shadow-md hover:border-brand-secondary transition-all duration-200 cursor-pointer">
            <div className="flex items-start">
                <div className="p-3 bg-neutral-100 rounded-lg mr-4">
                    {iconMap[resource.fileType]}
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 leading-tight">{resource.title}</h4>
                    <p className="text-xs text-neutral-500 mt-1">By {resource.author.name}</p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200 text-sm">
                 <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">{resource.subject}</span>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">{resource.level}</span>
                 </div>
                 <div className="flex items-center text-neutral-600">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{resource.rating}</span>
                 </div>
            </div>
        </div>
    );
};

const ResourceLibrary: React.FC<ResourceLibraryProps> = ({ onViewResource, onUploadResource }) => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-8">
                <aside className="lg:w-72 mb-8 lg:mb-0">
                    <FilterSidebar />
                </aside>

                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-brand-dark">Resource Library</h2>
                            <p className="text-neutral-500">Showing 24 of {resources.length} resources</p>
                        </div>
                         <button onClick={onUploadResource} className="mt-4 md:mt-0 bg-brand-secondary text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-brand-primary transition duration-200">
                            Upload Resource
                        </button>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="relative text-neutral-500 flex-1">
                                <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search by keyword, author, or title..."
                                    className="bg-white border border-neutral-300 rounded-lg pl-10 pr-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                                />
                            </div>
                            <div className="flex items-center space-x-4 mt-4 md:mt-0 md:ml-4">
                                <div className="relative">
                                    <select className="appearance-none bg-white border border-neutral-300 rounded-lg py-2.5 pl-3 pr-8 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-secondary">
                                        <option>Sort by: Relevance</option>
                                        <option>Sort by: Most Recent</option>
                                        <option>Sort by: Highest Rated</option>
                                    </select>
                                    <ChevronDownIcon className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map(res => <ResourceCard key={res.id} resource={res} onClick={() => onViewResource(res)} />)}
                    </div>

                    <nav className="mt-8 flex items-center justify-center" aria-label="Pagination">
                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                            &lt;
                        </a>
                        <a href="#" aria-current="page" className="z-10 bg-brand-light border-brand-secondary text-brand-dark relative inline-flex items-center px-4 py-2 border text-sm font-medium">1</a>
                        <a href="#" className="bg-white border-neutral-300 text-neutral-500 hover:bg-neutral-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</a>
                        <a href="#" className="bg-white border-neutral-300 text-neutral-500 hover:bg-neutral-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">3</a>
                        <span className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-700">...</span>
                        <a href="#" className="bg-white border-neutral-300 text-neutral-500 hover:bg-neutral-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">8</a>
                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                            &gt;
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ResourceLibrary;
