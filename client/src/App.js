import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/Layout';
import Protected from './pages/Protected';
import RequireAuth from './components/RequireAuth';
import Available from './pages/Available';
import Cities from './pages/Cities';

function App() {
  return (
    <Routes>
      <Route element ={<Layout />}>
        <Route path = "/" element = {<Home />} />
        <Route path = "/available" element = {<Available />} />
        <Route path = "/cities" element = {<Cities />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/login" element = {<Login />} />
        <Route element = {<RequireAuth />}>
          <Route path = "/protected" element = {<Protected />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
