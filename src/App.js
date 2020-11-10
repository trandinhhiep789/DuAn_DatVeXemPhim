import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router-dom'
import TrangChu from './Page/Film/TrangChu';
import TinTuc from './Page/Film/TinTuc';
import LienHe from './Page/Film/LienHe';
import UngDung from './Page/Film/UngDung';
import DangNhap from './Page/Film/DangNhap';
import DangKy from './Page/Film/DangKy';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path='/trangchu' component={TrangChu} />
        <Route path='/tintuc' component={TinTuc} />
        <Route path='/lienhe' component={LienHe} />
        <Route path='/ungdung' component={UngDung} />

        <Route path='/dangnhap' component={DangNhap} />
        <Route path='/dangky' component={DangKy} />
        {/* Router mặc định */}
        <Route path='/' component={TrangChu} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
