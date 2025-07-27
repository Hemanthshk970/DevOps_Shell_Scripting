import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Code, Play, CheckCircle, AlertCircle } from 'lucide-react';
import { Lesson as LessonType } from '../types/lesson';
import TerminalPlayground from './TerminalPlayground';

interface LessonProps {
  lesson: LessonType;
  onBack: () => void;
}

const Lesson: React.FC<LessonProps> = ({ lesson, onBack }) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'playground'>('theory');
  const [currentExercise, setCurrentExercise] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());

  const handleExerciseComplete = (exerciseIndex: number) => {
    setCompletedExercises(prev => new Set([...prev, exerciseIndex]));
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            Progress: {completedExercises.size}/{lesson.exercises.length} exercises completed
          </div>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedExercises.size / lesson.exercises.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Lesson Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
        <p className="text-gray-600 text-lg mb-4">{lesson.description}</p>
        
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span>Category: {lesson.category.replace('-', ' ')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Code className="h-4 w-4" />
            <span>{lesson.examples.length} examples</span>
          </div>
          <div className="flex items-center space-x-2">
            <Play className="h-4 w-4" />
            <span>{lesson.exercises.length} exercises</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6">
        <button
          onClick={() => setActiveTab('theory')}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === 'theory'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span>Theory & Examples</span>
          </div>
        </button>
        
        <button
          onClick={() => setActiveTab('playground')}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === 'playground'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Play className="h-4 w-4" />
            <span>Practice</span>
          </div>
        </button>
      </div>

      {/* Content */}
      {activeTab === 'theory' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Theory */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Theory</h2>
            <div className="prose prose-sm max-w-none text-gray-700">
              {lesson.theory.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Syntax & Examples */}
          <div className="space-y-6">
            {/* Syntax */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Syntax</h2>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                {lesson.syntax}
              </div>
            </div>

            {/* Examples */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Examples</h2>
              <div className="space-y-4">
                {lesson.examples.map((example, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">{example.description}</p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                      $ {example.command}
                    </div>
                    {example.output && (
                      <div className="bg-gray-100 text-gray-800 p-3 rounded font-mono text-sm">
                        {example.output}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Exercises */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Exercises</h2>
              <div className="text-sm text-gray-500">
                {currentExercise + 1} of {lesson.exercises.length}
              </div>
            </div>

            <div className="space-y-4">
              {lesson.exercises.map((exercise, index) => (
                <div 
                  key={index}
                  className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                    index === currentExercise 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setCurrentExercise(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-bold text-gray-500">#{index + 1}</span>
                        {completedExercises.has(index) && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                      <p className="font-medium text-gray-900 mb-2">{exercise.task}</p>
                      <p className="text-sm text-gray-600">{exercise.hint}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Playground */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Terminal Playground</h2>
            <TerminalPlayground 
              exercise={lesson.exercises[currentExercise]}
              onComplete={() => handleExerciseComplete(currentExercise)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson;