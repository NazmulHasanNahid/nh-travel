import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Pages/Shared/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';

function App() {
  return (
    <div>
      <Navigation/>
     <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/home' element={ <Home/>}/>
       <Route path='/login' element={<Login/>}/>

     </Routes>
    </div>
  );
}

export default App;
