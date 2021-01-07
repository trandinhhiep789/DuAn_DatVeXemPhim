import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Page/User/Login';
import SignUp from './Page/User/SignUp';
import { Route, Switch } from 'react-router-dom';
import PersonalInfo from './Page/User/PersonalInfo';
import { AdminTemplate } from './Template/AdminTemplate';
import Admin from './Page/Admin/Admin';
import QuanLyNguoiDung from './Page/Admin/User/QuanLyNguoiDung'
import QuanLyPhim from './Page/Admin/QuanLyPhim'
import { useSelector, useDispatch } from 'react-redux'

function App() {


  return (
    <>
      {/* <Header /> */}

      <Switch>
        <Route exact path='/personalinfo' component={PersonalInfo} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />

        <AdminTemplate exact path='/admin' Component={Admin} />
        <AdminTemplate exact path='/admin/quanlynguoidung' Component={QuanLyNguoiDung} />
        <AdminTemplate exact path='/admin/quanlyphim' Component={QuanLyPhim} />

      </Switch>
      {/* <ThemFilm />
      <ThemPhimTemplate /> */}
      {/* <ThemNguoiDung /> */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
