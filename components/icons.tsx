
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${className}`}>
        {children}
    </svg>
);

export const HomeIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 10.707V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V10.707a1 1 0 0 1 .293-.707l3-3z" clipRule="evenodd" /><path d="M12 21V15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6" /></IconWrapper>
);
export const FolderIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M2 6a2 2 0 0 1 2-2h5l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm10 2H4v8h16V8h-6l-2-2z" clipRule="evenodd" /></IconWrapper>
);
export const CompassIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM9.293 8.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1-1.414 1.414l-4-4zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" clipRule="evenodd" /><path d="m14.707 15.707-4-4-1.414 1.414 4 4 1.414-1.414z" /></IconWrapper>
);
export const UsersIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path d="M7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM5 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H3zm13-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4 7a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1z" /></IconWrapper>
);
export const UserCircleIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8 11a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm2 5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-4z" clipRule="evenodd" /></IconWrapper>
);
export const CogIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0L8 5.13a9.04 9.04 0 0 0-2.3.82l-1.87-.5-1.5 2.6 1.45 1.25c-.07.3-.12.6-.15.92L3.17 11.5c-1.56.38-1.56 2.6 0 2.98L5.13 15a9.04 9.04 0 0 0 .82 2.3l-.5 1.87 2.6 1.5 1.25-1.45c.3.07.6.12.92.15l.38 2.45c.38 1.56 2.6 1.56 2.98 0l.5-1.87a9.04 9.04 0 0 0 2.3-.82l1.87.5 1.5-2.6-1.45-1.25c.07-.3.12-.6.15-.92l2.45-.38c1.56-.38 1.56-2.6 0-2.98l-1.96-.5a9.04 9.04 0 0 0-.82-2.3l.5-1.87-2.6-1.5-1.25 1.45c-.3-.07-.6-.12-.92-.15l-.38-2.45zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clipRule="evenodd" /></IconWrapper>
);
export const QuestionMarkCircleIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1-10a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1z" clipRule="evenodd" /></IconWrapper>
);
export const LogoutIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M3 3a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V5h10a1 1 0 1 0 0-2H3zm12.293 4.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L16.586 13H9a1 1 0 1 1 0-2h7.586l-1.293-1.293a1 1 0 0 1 0-1.414z" clipRule="evenodd" /></IconWrapper>
);
export const SearchIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z" clipRule="evenodd" /></IconWrapper>
);
export const FilterIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M3 3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-.293.707L14 12.414V19a1 1 0 0 1-1.447.894l-4-2A1 1 0 0 1 8 17v-4.586L1.293 5.707A1 1 0 0 1 1 5V3z" clipRule="evenodd" /></IconWrapper>
);
export const EyeIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /></IconWrapper>
);
export const DownloadIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M12 2a1 1 0 0 1 1 1v10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1zM4 18a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" clipRule="evenodd" /></IconWrapper>
);
// Fix: Use React.FC to allow for the 'key' prop when mapping over this component.
export const StarIcon: React.FC<{ className?: string; solid?: boolean }> = ({ className = '', solid = true }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" clipRule="evenodd" style={{ opacity: solid ? 1 : 0.3 }} />
    </IconWrapper>
);
export const DocumentTextIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm8 7a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1zm-1 4a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1zm-1 4a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1z" clipRule="evenodd" /></IconWrapper>
);
export const FilmIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm0 2h16v14H4V5z" clipRule="evenodd" /><path d="M7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2zm10-8h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" /></IconWrapper>
);
export const BookOpenIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path d="M4 6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12l-5-3-5 3V6zm14 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v12l5-3 5 3V6z" /></IconWrapper>
);
export const UploadCloudIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path d="M12.5 9.25a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0ZM8.502 11.002a3.75 3.75 0 1 0 5.495-2.004A3.75 3.75 0 0 0 8.502 11.002Z" /><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.06 18.358a.75.75 0 0 1-.12 0c-4.32-.405-7.6-4.133-7.234-8.485C5.02 5.9 7.785 3.75 11.25 3.75a.75.75 0 0 1 0 1.5c-2.827 0-5.12 1.88-5.467 4.545-.3 2.22 2.023 4.92 5.467 5.25a.75.75 0 0 1 .81.813v.001Z" /></IconWrapper>
);
export const ChevronDownIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L12 12.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" clipRule="evenodd" /></IconWrapper>
);
export const CheckCircleIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM9.293 13.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L10 11.414l-1.293 1.293z" clipRule="evenodd" /></IconWrapper>
);
export const XCircleIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.414 7.586a1 1 0 0 1 1.414-1.414L12 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707z" clipRule="evenodd" /></IconWrapper>
);
export const CalendarIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm1 4h10v10H7V6z" clipRule="evenodd" /><path d="M8 8h2v2H8V8zm4 0h2v2h-2V8zm-4 4h2v2H8v-2zm4 0h2v2h-2v-2z" /></IconWrapper>
);
export const ChatBubbleLeftIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9.414l-3.707 3.707A1 1 0 0 1 4 20v-3H4a2 2 0 0 1-2-2V5z" clipRule="evenodd" /></IconWrapper>
);
export const BellIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path d="M10 20a2 2 0 1 0 4 0h-4zm3.707-11.293A7.001 7.001 0 0 0 4.22 13.22c.24.24.49.46.75.67A2 2 0 0 0 6 16h12a2 2 0 0 0 1.03-1.11c.26-.21.51-.43.75-.67a7.001 7.001 0 0 0-6.073-9.523zM12 4a5 5 0 0 0-5 5v3h10V9a5 5 0 0 0-5-5z" /></IconWrapper>
);
export const ChartBarIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path d="M3 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7zm6-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V6zm6 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-9z" /></IconWrapper>
);
export const DocumentDuplicateIcon = ({ className = '' }) => (
    <IconWrapper className={className}><path fillRule="evenodd" d="M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7zM3 6a2 2 0 0 1 2-2h1v12H5a2 2 0 0 1-2-2V6z" clipRule="evenodd" /></IconWrapper>
);
