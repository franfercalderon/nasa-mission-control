import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home';
import History from './views/History';
import Upcoming from './views/Upcoming';
import NavBar from './components/NavBar/NavBar';
 

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/upcoming' element={<Upcoming/>}/>
          <Route exact path='/history' element={<History/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
