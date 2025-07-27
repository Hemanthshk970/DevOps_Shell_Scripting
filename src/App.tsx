import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';  
import Lesson from './components/Lesson';
import { getLesson } from './data/lessons';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'lesson'>('dashboard');
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);

  useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      const lessonId = event.detail;
      setCurrentLessonId(lessonId);
      setCurrentView('lesson');
    };

    window.addEventListener('navigate', handleNavigate as EventListener);
    return () => window.removeEventListener('navigate', handleNavigate as EventListener);
  }, []);

  const handleStartLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setCurrentView('lesson');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setCurrentLessonId(null);
  };

  const currentLesson = currentLessonId ? getLesson(currentLessonId) : null;

  return (
    <Layout currentLesson={currentLessonId || undefined}>
      {currentView === 'dashboard' ? (
        <Dashboard onStartLesson={handleStartLesson} />
      ) : currentLesson ? (
        <Lesson lesson={currentLesson} onBack={handleBackToDashboard} />
      ) : (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Lesson not found</p>
        </div>
      )}
    </Layout>
  );
}

export default App;