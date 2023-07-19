import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import UserArea from './pages/UserArea';
import ProtectedRoutes from './middlewares/ProtectedRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/UserArea/:id' element={<UserArea />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
