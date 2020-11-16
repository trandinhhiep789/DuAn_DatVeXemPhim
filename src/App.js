import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Page/User/Login';
import SignUp from './Page/User/SignUp';
import { Route, Switch } from 'react-router-dom';
import PersonalInfo from './Page/User/PersonalInfo';

function App() {
  return (
    <>
      <Header />

      {/* <Login /> */}

      <Switch>
        <Route exact path='/personalinfo' component={PersonalInfo} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
