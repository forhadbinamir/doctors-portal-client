import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Signup from './Pages/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import UsersRow from './Pages/Dashboard/UsersRow';
import RequireAdmin from './Pages/RequireAuth/RequireAdmin';
import Adddoctor from './Pages/Dashboard/Adddoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import Payment from './Pages/Dashboard/Payment';
function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <UsersRow></UsersRow>
            </RequireAdmin>
          }></Route>
          <Route path='managedoctor' element={
            <RequireAdmin>
              <ManageDoctor></ManageDoctor>
            </RequireAdmin>
          }></Route>
          <Route path='doctor' element={
            <RequireAdmin>
              <Adddoctor></Adddoctor>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
