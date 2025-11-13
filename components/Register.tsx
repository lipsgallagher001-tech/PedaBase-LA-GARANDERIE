import React, { useState } from 'react';

interface RegisterProps {
    onRegister: (name: string, email: string, password: string, role: string) => void;
    onBackToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister, onBackToLogin }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'Enseignant',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('Veuillez remplir tous les champs');
            return;
        }

        if (!formData.email.includes('@')) {
            setError('Veuillez entrer une adresse email valide');
            return;
        }

        if (formData.password.length < 6) {
            setError('Le mot de passe doit contenir au moins 6 caractères');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }

        if (!formData.email.endsWith('@garanderie.edu')) {
            setError('Veuillez utiliser une adresse email @garanderie.edu');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            onRegister(formData.name, formData.email, formData.password, formData.role);
            setLoading(false);
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-neutral-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
                    <div className="bg-brand-primary p-8 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
                            <span className="font-bold text-brand-primary text-3xl">LG</span>
                        </div>
                        <h1 className="text-2xl font-bold text-white">Collège LA GARANDERIE</h1>
                        <p className="text-brand-light mt-2">Plateforme Pédagogique</p>
                    </div>

                    <div className="p-8">
                        <div className="text-center mb-6">
                            <h2 className="text-xl font-bold text-neutral-900">Créer un compte</h2>
                            <p className="text-sm text-neutral-500 mt-1">Inscrivez-vous pour accéder à la plateforme</p>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Nom complet
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                                    placeholder="Jean Dupont"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Adresse email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                                    placeholder="jean.dupont@garanderie.edu"
                                />
                                <p className="text-xs text-neutral-500 mt-1">Utilisez votre adresse @garanderie.edu</p>
                            </div>

                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Rôle
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition bg-white"
                                >
                                    <option value="Enseignant">Enseignant</option>
                                    <option value="Modérateur">Modérateur</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Mot de passe
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                                    placeholder="••••••••"
                                />
                                <p className="text-xs text-neutral-500 mt-1">Minimum 6 caractères</p>
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Confirmer le mot de passe
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                                    placeholder="••••••••"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-brand-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-brand-dark transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Création en cours...' : 'Créer mon compte'}
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
                            <p className="text-sm text-neutral-700">
                                Vous avez déjà un compte?{' '}
                                <button
                                    onClick={onBackToLogin}
                                    className="font-semibold text-brand-secondary hover:text-brand-primary transition"
                                >
                                    Se connecter
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-center text-xs text-neutral-500">
                    Plateforme réservée au personnel enseignant du Collège LA GARANDERIE
                </p>
            </div>
        </div>
    );
};

export default Register;
