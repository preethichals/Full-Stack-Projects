
import './App.css';

import Home from './pages/Home';
import { Routes,Route } from 'react-router';
import Login from './pages/Login';
import Detail from './pages/MoviesDetail';


function App() {
  return (

   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/login" element={<Login/>}/>
   <Route path="/movie-detail" element={<Detail/>}/>
   </Routes>
  
   

  );
}

export default App;
