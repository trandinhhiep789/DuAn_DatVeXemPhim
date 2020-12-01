import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router-dom';
import ThongTinCaNhan from './Page/User/PersonalInfo'
import DangNhap from './Page/User/Login';
import DangKy from './Page/User/SignUp';

function App() {
  return (
    <>
      <Header />

      {/* <Login /> */}

      <Switch>
        <Route exact path='/thongtincanhan' component={ThongTinCaNhan} />
        <Route exact path='/dangnhap' component={DangNhap} />
        <Route exact path='/dangky' component={DangKy} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
