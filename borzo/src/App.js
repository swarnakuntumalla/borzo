import {Route, Routes} from 'react-router-dom'
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import Home from './components/Home';
import NavBar from './components/NavBar';
import BecomeACourier from './components/BecomeACourier';
import Order from './components/Order';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const App = () =>{
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/courier' element={<BecomeACourier/>}/>
        <Route path='/order' element={<Order />} />
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/signup' element={<SignUpForm/>}/>
      </Routes>
    </div>
  )
}

export default App;
