import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const TopicPage = lazy(() => import('../features/subjects/TopicPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Auth = lazy(() => import('../pages/Auth'));

// Loading component
const Loader = () => (
  <div className="flex items-center justify-center p-20 min-h-[60vh]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="text-sm font-medium text-gray-400 animate-pulse">Initializing Ai-Yugam...</p>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Main Subject Route */}
          <Route path="/learn/:subjectId" element={<TopicPage />} />
          
          {/* Specific Topic Route */}
          <Route path="/learn/:subjectId/:topicId" element={<TopicPage />} />
          
          {/* Catch-all */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
