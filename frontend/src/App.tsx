import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from '@/pages/Home';
import { Contact } from '@/pages/Contact';
import { Courses } from '@/pages/Courses';
import { Services } from '@/pages/Services';
import { About } from '@/pages/About';
import { EntryGate } from '@/components/effects/EntryGate';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { analytics } from '@/utils/analytics';

// Component to handle hash scrolling and analytics
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    analytics.pageView(location.pathname + location.search);

    const hash = location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <EntryGate>
        <BrowserRouter>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </EntryGate>
    </ErrorBoundary>
  );
}

export default App;
