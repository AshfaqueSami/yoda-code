import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/HomeData/HomeData';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Teacher from './Component/HireTeacher/HireTeacherData';
import NotFound from './Component/NotFound/NotFound';
import Appointment from './Component/Appointment/Appointment';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AuthProvider from './Contexts/AuthProvider';
import Services from './Component/Services/Services';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/service/:serviceId'>
            <Services></Services>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/teacher'>
            <Teacher></Teacher>
          </PrivateRoute>
          <PrivateRoute path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
