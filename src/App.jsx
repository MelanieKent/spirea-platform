/**
 * Spirea Platform — App Router
 * React + react-router-dom v6
 */
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home                   from './pages/Home';
import PrototypeV1            from './pages/PrototypeV1';
import StrategicApplications  from './pages/StrategicApplications';
import Founder                from './pages/Founder';
import Contact                from './pages/Contact';
import './styles/globals.css';

// v5: return to the top of the page on every route change (as the approved preview does).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"                       element={<Home />} />
        <Route path="/prototype-v1"           element={<PrototypeV1 />} />
        <Route path="/strategic-applications" element={<StrategicApplications />} />
        <Route path="/founder"                element={<Founder />} />
        <Route path="/contact"                element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
