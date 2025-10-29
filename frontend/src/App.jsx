import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Login from './Login';
import Admin from './admin/admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App;
