import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrototypeV1 from './pages/PrototypeV1';
import StrategicApplications from './pages/StrategicApplications';
import Founder from './pages/Founder';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter basename="/spirea-platform">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prototype-v1" element={<PrototypeV1 />} />
        <Route path="/strategic-applications" element={<StrategicApplications />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
