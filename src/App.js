import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/blog/Blog';
import Notfound from './pages/Notfound/Notfound';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path='*' element={<Notfound></Notfound>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default App;
