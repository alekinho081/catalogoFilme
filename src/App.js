import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout'
import Home from './pages/Home.jsx'


function App() {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<Layout />} >

      <Route index element={ <Home /> } />
      <Route path='/filmes' element={ <Home /> } />
      <Route path='/generos' element={ <Home /> } />

      </Route>


    </Routes>



    
    </BrowserRouter>
    

    
  );
}

export default App;
