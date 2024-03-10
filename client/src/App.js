import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/common/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import { Home } from './components/home/Home';
import DesignRequirementDetails from './components/designRequirementDetails/DesignRequirementDetails';

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
          <Route exact path='/designRequirementDetails/:id' element={<DesignRequirementDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
