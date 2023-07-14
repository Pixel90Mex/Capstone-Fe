import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import UserArea from './pages/UserArea';
import StudentTable from './components/UserArea/StudentArea/StudentTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/UserArea/:id' element={<UserArea/>}/>
       {/*  <Route path='/StudentTable' element={<StudentTable/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
