import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import CreatePost from './Components/CreatePost';
import AllPost from './Components/AllPost';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>

        <Route path="*" element={<Navigate from='/CreatePost' to='/Register'/>}/>
          <Route exact path='/' element={Home}>
            
          </Route>

          <Route exact path='/Register' element={<Register/>}>
            
          </Route>

          <Route exact path='/Login' element={<Login/>}>
            
          </Route>

          <Route exact path='/CreatePost' element={<CreatePost/>}>
            
          </Route>

          <Route exact path='/AllPost' element={<AllPost/>}>
            
          </Route>

          <Route element=
            {<NotFound/>}>

          </Route>

          

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
