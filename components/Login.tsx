import React, { useState } from 'react';
import { UserCircleIcon } from './icons';

interface LoginProps {
    onLogin: (email: string, password: string) => void;
    onRegisterClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onRegisterClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Veuillez remplir tous les champs');
            return;
        }

        if (!email.includes('@')) {
            setError('Veuillez entrer une adresse email valide');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            onLogin(email, password);
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
                            <h2 className="text-xl font-bold text-neutral-900">Connexion</h2>
                            <p className="text-sm text-neutral-500 mt-1">Accédez à vos ressources pédagogiques</p>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Adresse email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                                    placeholder="votre.email@garanderie.edu"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Mot de passe
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-brand-secondary border-neutral-300 rounded focus:ring-brand-secondary"
                                    />
                                    <span className="ml-2 text-sm text-neutral-700">Se souvenir de moi</span>
                                </label>
                                <a href="#" className="text-sm font-medium text-brand-secondary hover:text-brand-primary transition">
                                    Mot de passe oublié?
                                </a>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-brand-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-brand-dark transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Connexion en cours...' : 'Se connecter'}
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
                            <p className="text-sm text-neutral-700 mb-4">
                                Pas encore de compte?{' '}
                                <button
                                    type="button"
                                    onClick={onRegisterClick}
                                    className="font-semibold text-brand-secondary hover:text-brand-primary transition"
                                >
                                    S'inscrire
                                </button>
                            </p>
                            <p className="text-xs text-neutral-500">
                                Besoin d'aide? Contactez l'administrateur système
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

export default Login;
