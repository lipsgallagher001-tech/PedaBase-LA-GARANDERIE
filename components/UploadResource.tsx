
import React from 'react';
import { Subject, Level, DocumentType, Term } from '../types';
import { UploadCloudIcon } from './icons';

interface UploadResourceProps {
    onCancel: () => void;
}

const FormInput: React.FC<{ label: string, id: string, type?: string, placeholder?: string }> = ({ label, id, type = "text", placeholder }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700">{label}</label>
        <input type={type} id={id} name={id} placeholder={placeholder} className="mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:ring-brand-secondary focus:border-brand-secondary sm:text-sm" />
    </div>
);

const FormSelect: React.FC<{ label: string, id: string, options: string[] }> = ({ label, id, options }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700">{label}</label>
        <select id={id} name={id} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary sm:text-sm rounded-md">
            {options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
    </div>
);


const UploadResource: React.FC<UploadResourceProps> = ({ onCancel }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-brand-dark">Ajouter une nouvelle ressource pédagogique</h1>
                        <p className="mt-1 text-neutral-500">Remplissez les informations ci-dessous pour partager votre document.</p>
                    </div>
                     <div className="flex space-x-2">
                        <button onClick={onCancel} className="bg-white text-neutral-700 px-4 py-2 rounded-lg font-semibold border border-neutral-300 hover:bg-neutral-50 transition">Annuler</button>
                        <button className="bg-brand-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-dark transition">Publier la ressource</button>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-lg font-semibold text-neutral-800 mb-2">1. Choisissez votre fichier</h2>
                            <div className="mt-1 flex justify-center px-6 pt-10 pb-12 border-2 border-neutral-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <UploadCloudIcon className="mx-auto h-12 w-12 text-neutral-400" />
                                    <div className="flex text-sm text-neutral-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-brand-secondary hover:text-brand-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-secondary">
                                            <span>Glissez-déposez votre document ici</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                    </div>
                                    <p className="text-xs text-neutral-500">ou cliquez pour parcourir vos fichiers.</p>
                                    <button className="mt-4 bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg text-sm font-semibold border border-neutral-300 hover:bg-neutral-200 transition">
                                        Parcourir
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                             <h2 className="text-lg font-semibold text-neutral-800 -mb-2">2. Décrivez la ressource</h2>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormSelect label="Matière" id="matiere" options={Object.values(Subject)} />
                                <FormSelect label="Niveau" id="niveau" options={Object.values(Level)} />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormSelect label="Type de document" id="type" options={Object.values(DocumentType)} />
                                <FormSelect label="Trimestre" id="trimestre" options={Object.values(Term)} />
                            </div>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormInput label="Année scolaire" id="annee_scolaire" placeholder="2023-2024" />
                                <FormInput label="Auteur" id="auteur" placeholder="M. Dupont" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-6">
                        <FormInput label="Mots-clés" id="mots_cles" placeholder="Ajouter des mots-clés (ex: algèbre, géométrie, ...)" />
                        <div>
                             <label htmlFor="description" className="block text-sm font-medium text-neutral-700">Description courte</label>
                             <textarea id="description" name="description" rows={4} className="mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:ring-brand-secondary focus:border-brand-secondary sm:text-sm" placeholder="Décrivez brièvement le contenu et l'objectif de cette ressource."></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-neutral-200">
                    <h2 className="text-lg font-semibold text-neutral-800 mb-4">3. Finalisation</h2>
                    <div className="flex justify-end items-center space-x-3">
                        <button onClick={onCancel} className="bg-white text-neutral-700 px-5 py-2.5 rounded-lg font-semibold border border-neutral-300 hover:bg-neutral-50 transition">Annuler</button>
                        <button className="bg-blue-100 text-blue-800 px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-200 transition">Enregistrer comme brouillon</button>
                        <button className="bg-brand-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-brand-dark transition">Publier la ressource</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadResource;
