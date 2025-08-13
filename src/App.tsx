import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NoticeBoard from './components/NoticeBoard';
import WhatsAppFloat from './components/WhatsAppFloat';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Courses = React.lazy(() => import('./pages/Courses'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  const baseName = (import.meta as any).env.BASE_URL?.replace(/\/$/, '') || '';

  return (
    <Router basename={baseName}>
      <div className="min-h-screen bg-white">
        <Header />
        <NoticeBoard />
        <Suspense fallback={<div className="py-16 text-center text-gray-600">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;