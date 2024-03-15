import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/common/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import { Home } from './components/home/Home';
import DesignRequirementDetails from './components/designRequirementDetails/DesignRequirementDetails';
import Spinner from './components/common/spinner/Spinner';

const mapStateToProps = (state) => {
  return {
    isLoading: state.spinnerReducers.isLoading,
  }
}

function App(props) {

  return (
    <div className="App">
      <BrowserRouter>      
        <Navbar 
          logo={'graphica'} 
          $btnText={'Login / Signup'}
        />
        {
          props.isLoading && <Spinner></Spinner>
        }
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route exact path='/designRequirementDetails/:id' element={<DesignRequirementDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default connect(mapStateToProps)(App);
