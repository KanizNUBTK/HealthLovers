import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/Pages/Home/Home/Home';
import Services from './component/Pages/Services/Services';
import NotFound from './component/Pages/NotFound/NotFound';
import Login from './component/Shared/Login/Login';
import Register from './component/Shared/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './component/Shared/PrivateRoute/PrivateRoute';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import DashboardHome from './component/Dashboard/DashboardHome/DashboardHome';
import Profile from './component/Dashboard/Profile/Profile';
import AdminRoute from './component/Shared/AdminRoute/AdminRoute';
import Payment from './component/Dashboard/Payment/Payment';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import AddService from './component/Dashboard/AddService/AddService';
import AddExcerice from './component/Dashboard/AddExcerice/AddExcerice';
import SingleService from './component/Pages/SingleService/SingleService';
import PdfBMI from './component/Pages/Home/PdfBMI/PdfBMI';

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="services" element={<PrivateRoute>
              <Services />
            </PrivateRoute>}/>
            <Route exact path="singleService/:gymEqId" element={<PrivateRoute>
              <SingleService />
            </PrivateRoute>}/>
            <Route exact path="pdfBmi" element={<PrivateRoute>
              <PdfBMI />
            </PrivateRoute>}/>
            <Route exact path="success" element={<PrivateRoute>
              <Payment />
            </PrivateRoute>}/>
            <Route exact path="dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
                <Route exact path = "/dashboard" element={<DashboardHome />}/>
                <Route path = "/dashboard/profile" element={<Profile />}/>
                <Route path = "/dashboard/makeAdmin" element={<AdminRoute>
                        <MakeAdmin />
                    </AdminRoute>}/>
                <Route path = "/dashboard/addService" element={<AdminRoute>
                        <AddService />
                    </AdminRoute>}/>
                <Route path = "/dashboard/addExcerice" element={<AdminRoute>
                        <AddExcerice />
                    </AdminRoute>}/>
            </Route>
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  
  );
}

export default App;
