import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/common/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import { Home } from './components/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Navbar 
          logo={'graphica'} 
          btnText={'Login / Signup'}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
