 import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'; 

function App() {
  return (
   <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
