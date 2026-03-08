/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#282c33] text-[#abb2bf] font-sans flex flex-col antialiased">
        <Navbar />
        <SocialBar />
        <main className="flex-grow flex flex-col items-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
