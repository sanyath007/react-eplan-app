import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import Login from './views/auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<DefaultLayout />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
