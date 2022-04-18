import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Pages/Shared/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import Services from './Components/Pages/Services/Services';
import CheckOut from './Components/Pages/CheckOut/CheckOut';
import SignUp from './Components/Auth/SignUp/SignUp';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Footer from './Components/Pages/Shared/Footer/Footer';
import NotFound from './Components/Pages/Shared/NotFound/NotFound';
import BLog from './Components/Pages/Blog/BLog';
import About from './Components/Pages/About/About';

function App() {
  return (
    <div>
      <Navigation/>
     <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/home' element={ <Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<SignUp/>}/>
       <Route path='/service' element={<Services/>}/>
       <Route path='/blog' element={<BLog/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/checkout' element={<RequireAuth><CheckOut/></RequireAuth>}/>
      <Route path='*' element={<NotFound/>}/>     
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
