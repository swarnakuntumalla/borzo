import {Route, Routes} from 'react-router-dom'
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () =>{
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App;
