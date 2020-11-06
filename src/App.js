import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router-dom'
import TrangChu from './Page/TrangChu';
import TinTuc from './Page/TinTuc';
import LienHe from './Page/LienHe';
import UngDung from './Page/UngDung';
import DangNhap from './Page/DangNhap';
import DangKy from './Page/DangKy';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path='/trangchu' component={TrangChu} />
        <Route path='/tintuc' component={TinTuc} />
        <Route path='/lienhe' component={LienHe} />
        <Route path='/ungdung' component={UngDung} />

        {/* Router mặc định */}
        <Route path='/' component={TrangChu} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
