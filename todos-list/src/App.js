import logo from './logo.svg';
import './App.css';
import './styles.css';
import React from 'react';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Login from './Login';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
     
      {/* Your main content goes here */}
    
    </BrowserRouter>
  );
}

export default App;
