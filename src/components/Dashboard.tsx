import React from 'react';
import { PlayCircle, BookOpen, Terminal, CheckCircle } from 'lucide-react';
import { lessons } from '../data/lessons';

interface DashboardProps {
  onStartLesson: (lessonId: string) => void;
}

const categoryColors = {
  basics: 'bg-green-100 text-green-800 border-green-200',
  'file-operations': 'bg-blue-100 text-blue-800 border-blue-200',
  permissions: 'bg-purple-100 text-purple-800 border-purple-200',
  advanced: 'bg-orange-100 text-orange-800 border-orange-200',
};

const Dashboard: React.FC<DashboardProps> = ({ onStartLesson }) => {
  const totalLessons = lessons.length;
  
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl text-white p-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">DevOps Shell Scripting Lab by HEMANTH</h1>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl">
              Master shell scripting with hands-on exercises. Learn essential commands through 
              interactive theory, examples, and practice sessions.
            </p>
            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>{totalLessons} Interactive Lessons</span>
              </div>
              <div className="flex items-center space-x-2">
                <Terminal className="h-5 w-5" />
                <span>Live Terminal Practice</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Real-world Examples</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              <Terminal className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Lessons</p>
              <p className="text-2xl font-bold text-gray-900">{totalLessons}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <PlayCircle className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Progress</p>
              <p className="text-2xl font-bold text-gray-900">0%</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Terminal className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Lessons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-bold text-gray-500">#{index + 1}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${categoryColors[lesson.category]}`}>
                      {lesson.category.replace('-', ' ')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{lesson.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {lesson.exercises.length} exercises
                </div>
                <button
                  onClick={() => onStartLesson(lesson.id)}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <PlayCircle className="h-4 w-4" />
                  <span>Start</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
