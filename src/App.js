import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/blog/Blog';
import Notfound from './pages/Notfound/Notfound';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import Purchase from './pages/purchase/Purchase';
import PurchagePage from './pages/purchase/PurchagePage';

function App() {
  return (
    <div className='max-w-7xl mx-auto' >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="purchasePage" element={<PurchagePage></PurchagePage>}></Route>
        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="blog" element={<Blog />} />      
        <Route path='login' element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp />} />
        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
