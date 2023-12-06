import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import Register from './screens/Register';
import LoginPage from './screens/LoginPage';
import Home from './HomePage/Home'
import Adminpage from './Admin/Adminpage';
import Userpage from './User/Userpage';
import Technician from './Technician/Technician';
import { AuthProvider,useAuth } from './context/AuthContext';
import IssueDisplay from './Technician/IssueDisplay';
import Pastissue from './User/Pastissue';
import ChangePassword from './screens/Changepassword';
import ContactUs from './HomePage/pages/ContactUs'
import Team from './HomePage/pages/Team';
import About from './HomePage/pages/About';
function App() {

  return (
    <div className="App">
      
      <Router>
      <AuthProvider>
        <Routes>
           <Route exact path='/' element={<Home/>} /> 
          <Route exact path='/login' element={<LoginPage/>} /> 
          <Route exact path='/register' element={<Register/>} />
           <Route exact path='/userpage' element={<Userpage/>} />
          <Route exact path='/adminpage' element={<Adminpage/>}/> 
          <Route exact path='/technician' element={<Technician/>} />
          <Route exact path='/pastissue' element={<Pastissue/>} />
        {/* //  <Route exact path='/changepassword' element={<ChangePassword/>}/> */}
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/ourteam' element={<Team></Team>}/>
        <Route path='/about' element={<About/>} />
        </Routes>
      </AuthProvider>
  
      </Router>
      
      
    </div>
  );
}

export default App;
