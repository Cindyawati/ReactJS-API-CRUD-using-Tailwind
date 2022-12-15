import './App.css';

import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import User from './Pages/user/User';
import AddUser from './Pages/user/AddUser';

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Edit from './Pages/user/Edit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = { <Home /> } />
            <Route path = "/users/:id" element = { <User /> } />
            <Route path = "/add-user" element = { <AddUser /> } />
            <Route path = "/edit-user/:id" element = { <Edit /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
