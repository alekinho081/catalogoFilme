import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout'
import Home from './pages/Home.jsx'
import Detalhes from './pages/detalhes.jsx';
import Generos from './componentes/generos.jsx';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<Layout />} >

      <Route index element={ <Home /> } />
      <Route path='/filmes' element={ <Home /> } />
      <Route path='/generos' element={ <Generos /> } />
      <Route path='/detalhes/:id' element={<Detalhes />} />

      </Route>


    </Routes>



    
    </BrowserRouter>
    

    
  );
}

export default App;
