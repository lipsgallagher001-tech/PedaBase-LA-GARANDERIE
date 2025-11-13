
import React, { useState } from 'react';
import { Page, User, Resource } from './types';
import { currentUser, resources as initialResources, users } from './data';
import { HomeIcon, FolderIcon, DocumentDuplicateIcon, ChatBubbleLeftIcon, CalendarIcon, CogIcon, QuestionMarkCircleIcon, LogoutIcon, UserCircleIcon, BellIcon, SearchIcon, ChartBarIcon } from './components/icons';
import Dashboard from './components/Dashboard';
import ResourceLibrary from './components/ResourceLibrary';
import ResourceDetail from './components/ResourceDetail';
import UploadResource from './components/UploadResource';
import Profile from './components/Profile';
import UserManagement from './components/UserManagement';
import Login from './components/Login';

const Sidebar: React.FC<{ currentPage: Page, setPage: (page: Page) => void, onLogout: () => void }> = ({ currentPage, setPage, onLogout }) => {
    const navItems = [
        { name: 'Dashboard', icon: HomeIcon, page: 'Dashboard' as Page },
        { name: 'Resources', icon: FolderIcon, page: 'Resources' as Page },
        { name: 'My Content', icon: DocumentDuplicateIcon, page: 'MyContent' as Page },
        { name: 'Discussions', icon: ChatBubbleLeftIcon, page: 'Discussions' as Page },
        { name: 'Calendar', icon: CalendarIcon, page: 'Calendar' as Page },
    ];

    const adminItems = [
        { name: 'Gestion des comptes', icon: ChartBarIcon, page: 'UserManagement' as Page },
    ];

    const NavLink: React.FC<{ item: { name: string, icon: React.ElementType, page: Page }, isSelected: boolean }> = ({ item, isSelected }) => (
        <a
            href="#"
            onClick={(e) => { e.preventDefault(); setPage(item.page); }}
            className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${isSelected ? 'bg-brand-primary text-white' : 'text-neutral-700 hover:bg-brand-light hover:text-brand-dark'}`}
        >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
        </a>
    );

    return (
        <div className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-neutral-200 p-4 fixed h-full">
            <div className="flex items-center mb-8">
                <div className="bg-brand-primary p-2 rounded-lg mr-3">
                    <span className="font-bold text-white text-lg">LG</span>
                </div>
                <div>
                    <h1 className="text-sm font-bold text-neutral-900">Collège</h1>
                    <h2 className="text-xs text-neutral-500">LA GARANDERIE</h2>
                </div>
            </div>
            <nav className="flex-1 space-y-2">
                {navItems.map(item => <NavLink key={item.name} item={item} isSelected={currentPage === item.page} />)}
                {currentUser.role === 'Administrateur' && <div className="pt-4 mt-4 border-t border-neutral-200 space-y-2">{adminItems.map(item => <NavLink key={item.name} item={item} isSelected={currentPage === item.page} />)}</div>}
            </nav>
            <div className="space-y-2 border-t border-neutral-200 pt-4">
                 <NavLink item={{ name: 'Profile', icon: UserCircleIcon, page: 'Profile' as Page }} isSelected={currentPage === 'Profile'} />
                 <NavLink item={{ name: 'Paramètres', icon: CogIcon, page: 'Settings' as Page }} isSelected={currentPage === 'Settings'} />
                 <NavLink item={{ name: 'Aide', icon: QuestionMarkCircleIcon, page: 'Help' as Page }} isSelected={currentPage === 'Help'} />
                 <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); }} className="flex items-center px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors duration-200">
                    <LogoutIcon className="w-5 h-5 mr-3" />
                    Déconnexion
                 </a>
            </div>
        </div>
    );
};

const Header: React.FC<{ user: User, onProfileClick: () => void }> = ({ user, onProfileClick }) => (
    <div className="bg-white/80 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                 <div className="flex-1 flex justify-start">
                    <div className="relative text-neutral-500 hidden md:block">
                        <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search resources, discussions..."
                            className="bg-neutral-100 border border-neutral-300 rounded-lg pl-10 pr-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition"
                        />
                    </div>
                 </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition">
                        <BellIcon />
                    </button>
                    <button onClick={onProfileClick} className="flex items-center space-x-2">
                        <img className="h-9 w-9 rounded-full object-cover" src={user.avatar} alt={user.name} />
                        <div className="text-left hidden md:block">
                            <p className="text-sm font-semibold text-neutral-900">{user.name}</p>
                            <p className="text-xs text-neutral-500">{user.role}</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
);


const App: React.FC = () => {
    const [page, setPage] = useState<Page>('Dashboard');
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (email: string, password: string) => {
        const foundUser = users.find(u => u.email === email);
        if (foundUser) {
            setUser(foundUser);
            setIsAuthenticated(true);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setPage('Dashboard');
    };

    const handleViewResource = (resource: Resource) => {
        setSelectedResource(resource);
        setPage('ResourceDetail');
    };

    const handleUploadResource = () => {
        setPage('UploadResource');
    };

    const renderPage = () => {
        switch (page) {
            case 'Dashboard':
                return <Dashboard onViewResource={handleViewResource} onUploadResource={handleUploadResource} />;
            case 'Resources':
                return <ResourceLibrary onViewResource={handleViewResource} onUploadResource={handleUploadResource} />;
            case 'ResourceDetail':
                return selectedResource ? <ResourceDetail resource={selectedResource} onBack={() => setPage('Resources')} /> : <p>Resource not found</p>;
            case 'UploadResource':
                return <UploadResource onCancel={() => setPage('Resources')} />;
            case 'Profile':
                return <Profile user={user || currentUser} onViewResource={handleViewResource} />;
            case 'UserManagement':
                 return <UserManagement users={users} />;
            default:
                return <div className="p-8"><h1 className="text-2xl font-bold">{page}</h1><p>This page is under construction.</p></div>;
        }
    };

    if (!isAuthenticated) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div className="min-h-screen bg-neutral-100">
            <Sidebar currentPage={page} setPage={setPage} onLogout={handleLogout} />
            <div className="lg:pl-64">
                <Header user={user || currentUser} onProfileClick={() => setPage('Profile')} />
                <main>
                    {renderPage()}
                </main>
            </div>
        </div>
    );
};

export default App;
