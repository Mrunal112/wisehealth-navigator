import { Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Login } from './components/login';
import { AboutUs } from './pages/aboutus';
import { AddPatient } from './components/AddPatient';


function App() {

  return (
    <div className="bg-[#f4f4f4] max-w-screen-lg mx-auto text-center">
      <div className="bg-[#f4f4f4] p-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Suspense fallback={"loading..."}><Navbar /></Suspense>} />
            <Route path="/login" element={<Suspense fallback={"loading..."}><Login /></Suspense>} />
            <Route path="/aboutus" element={<Suspense fallback={"loading..."}><AboutUs /></Suspense>} />
            <Route path="/admin/addpatient" element={<Suspense fallback={"loading..."}><AddPatient /></Suspense>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App
