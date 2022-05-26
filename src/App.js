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
import Dashboard from './pages/Dashboard/Dashboard';
import Myprofile from './pages/Dashboard/Myprofile';
import Myreview from './pages/Dashboard/Myreview';
import Myorder from './pages/Dashboard/Myorder';
import MenageOrders from './pages/Dashboard/MenageOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Myprofile></Myprofile>}></Route>
        <Route path='review' element={<Myreview></Myreview>}></Route>
        <Route path='myorder' element={<Myorder></Myorder>}></Route>
        <Route path='menageorder' element={<MenageOrders></MenageOrders>}></Route>
        </Route>


        <Route path="blog" element={<Blog />} />      
        <Route path='login' element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp />} />
        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
