
import React from 'react';
import { Resource, Comment } from '../types';
// Fix: Import DocumentTextIcon to resolve 'Cannot find name' error.
import { DownloadIcon, StarIcon, DocumentTextIcon } from './icons';

interface ResourceDetailProps {
    resource: Resource;
    onBack: () => void;
}

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex justify-between py-2 text-sm">
        <span className="text-neutral-500">{label}</span>
        <span className="font-medium text-neutral-800">{value}</span>
    </div>
);

const CommentThread: React.FC<{ comment: Comment, isReply?: boolean }> = ({ comment, isReply = false }) => (
    <div className={`flex space-x-3 ${isReply ? 'ml-8 mt-3' : 'mt-4'}`}>
        <img src={comment.author.avatar} alt={comment.author.name} className="w-9 h-9 rounded-full"/>
        <div className="flex-1">
            <div className="bg-neutral-100 p-3 rounded-lg">
                <p className="text-sm font-semibold text-neutral-900">{comment.author.name} {comment.author.role === 'Administrateur' && <span className="text-xs font-medium bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full ml-2">Author</span>}</p>
                <p className="text-sm text-neutral-700 mt-1">{comment.content}</p>
            </div>
            <div className="flex items-center space-x-3 text-xs text-neutral-500 mt-1">
                <span>{comment.timestamp}</span>
                <button className="font-semibold hover:underline">Reply</button>
            </div>
            {comment.replies.map(reply => <CommentThread key={reply.id} comment={reply} isReply />)}
        </div>
    </div>
);

const ResourceDetail: React.FC<ResourceDetailProps> = ({ resource, onBack }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                    <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="text-sm text-brand-secondary hover:underline">&larr; Back to Resources</a>
                    <p className="text-sm text-neutral-500 mt-2">Home / Math / Algebra / {resource.title}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl font-bold text-brand-dark">{resource.title}</h1>
                        <p className="mt-2 text-neutral-600">{resource.description}</p>
                        
                        <div className="mt-8 bg-neutral-100 border border-neutral-200 rounded-lg aspect-[4/3] flex items-center justify-center">
                            <div className="text-center text-neutral-500">
                                <DocumentTextIcon className="w-16 h-16 mx-auto" />
                                <p className="mt-2 font-semibold">File Preview Area</p>
                                <p className="text-sm">{resource.title}.{resource.fileType}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
                            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Details</h3>
                            <DetailItem label="Subject" value={resource.subject} />
                            <DetailItem label="Level" value={resource.level} />
                            <DetailItem label="Author" value={resource.author.name} />
                            <DetailItem label="Creation Date" value={resource.creationDate} />
                            <DetailItem label="File Type" value="PDF, DOCX, PPTX" />
                            <div className="flex justify-between py-2 text-sm">
                               <span className="text-neutral-500">Tags</span>
                               <div className="flex flex-wrap gap-1 justify-end">
                                    {resource.keywords.map(kw => <span key={kw} className="bg-neutral-200 px-2 py-0.5 rounded text-xs">{kw}</span>)}
                               </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
                            <h3 className="font-semibold text-lg text-neutral-900 mb-3">Actions</h3>
                            <div className="flex flex-col space-y-3">
                                <button className="w-full flex items-center justify-center bg-brand-primary text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-brand-dark transition"><DownloadIcon className="mr-2"/> Download All (.zip)</button>
                                <div className="grid grid-cols-2 gap-3">
                                <button className="w-full bg-yellow-100 text-yellow-800 font-semibold py-2.5 px-4 rounded-lg hover:bg-yellow-200 transition">Add to Favorites</button>
                                <button className="w-full bg-red-100 text-red-800 font-semibold py-2.5 px-4 rounded-lg hover:bg-red-200 transition">Report</button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
                            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Rating</h3>
                            <div className="flex items-center">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} className="w-6 h-6" solid={i <= Math.round(resource.rating)} />)}
                                </div>
                                <span className="ml-3 font-bold text-lg">{resource.rating}</span>
                                <span className="ml-1 text-neutral-500 text-sm">({resource.ratingCount} ratings)</span>
                            </div>
                        </div>
                        
                         <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
                            <h3 className="font-semibold text-lg text-neutral-900 mb-4">Discussion</h3>
                            <div className="flex items-start space-x-3">
                                <img src={resource.author.avatar} alt={resource.author.name} className="w-10 h-10 rounded-full"/>
                                <textarea placeholder="Add a comment..." className="flex-1 border border-neutral-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary"></textarea>
                            </div>
                            <button className="w-full mt-3 bg-brand-secondary text-white font-semibold py-2 rounded-lg hover:bg-brand-primary transition">Submit</button>
                            
                            <div className="mt-6 border-t border-neutral-200 pt-4">
                                {resource.comments.map(comment => <CommentThread key={comment.id} comment={comment} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceDetail;
