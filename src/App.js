
import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './Component/HomeData/HomeData';
import HomeContent from './Component/HomeContent/HomeContent';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path='/'>
    <Home></Home>
     </Route>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
