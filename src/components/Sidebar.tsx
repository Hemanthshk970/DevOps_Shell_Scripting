import React from 'react';
import { X, FileText, Folder, Shield, Zap } from 'lucide-react';
import { lessons } from '../data/lessons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentLesson?: string;
}

const categoryIcons = {
  basics: FileText,
  'file-operations': Folder,
  permissions: Shield,
  advanced: Zap,
};

const categoryNames = {
  basics: 'Basics',
  'file-operations': 'File Operations',
  permissions: 'Permissions',
  advanced: 'Advanced',
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentLesson }) => {
  const categories = ['basics', 'file-operations', 'permissions', 'advanced'] as const;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col h-full
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900">Lessons</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-6">
            {categories.map(category => {
              const categoryLessons = lessons.filter(lesson => lesson.category === category);
              const Icon = categoryIcons[category];
              
              return (
                <div key={category} className="space-y-2">
                  <div className="flex items-center space-x-2 px-2 py-1">
                    <Icon className="h-4 w-4 text-gray-500" />
                    <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                      {categoryNames[category]}
                    </h3>
                  </div>
                  
                  <div className="space-y-1">
                    {categoryLessons.map(lesson => (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          // In a real app, this would use a router
                          window.dispatchEvent(new CustomEvent('navigate', { detail: lesson.id }));
                          onClose();
                        }}
                        className={`
                          w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200
                          ${currentLesson === lesson.id 
                            ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }
                        `}
                      >
                        <div className="font-medium">{lesson.title}</div>
                        <div className="text-xs opacity-75 mt-1">{lesson.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;