
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup';
import Aadhar from './pages/Aadhar';

function App() {
  return (
    <div className="bg-black min-vh-100">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Aadhar />} />
          
        </Routes>
      </Router>
      
   
    
    
     </div>
  );
}

export default App;
