import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Pages/Shared/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import ServiceDetail from './Components/Pages/Services/ServiceDetail';
import NotFound from './Components/Pages/NotFound/NotFound';
import Services from './Components/Pages/Services/Services';
import CheckOut from './Components/Pages/CheckOut/CheckOut';
import SignUp from './Components/Auth/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navigation/>
     <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/home' element={ <Home/>}/>
       <Route path='/service-detail/:id' element={<ServiceDetail/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<SignUp/>}/>
       <Route path='/checkout' element={<CheckOut/>}/>
       <Route path='/service' element={<Services/>}/>
      <Route path='*' element={<NotFound/>}/>

     </Routes>
    </div>
  );
}

export default App;
