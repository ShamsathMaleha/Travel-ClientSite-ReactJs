import logo from './logo.svg';
import './App.css';
import initialAuth from './components/Firebase/firebase.init';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './components/context/AuthProvider';
import Services from './components/Services/Services';
import Destination from './components/Destination/Destination';
import Footer from './components/Footer/Footer';
import PlaceHolder from './components/PlaceHolder/PlaceHolder';
import MyTour from './components/MyTour/MyTour';
import ManageAllTour from './components/ManageAllTour/ManageAllTour';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddNewTour from './components/AddNewTour/AddNewTour';
import NotFound from './components/NotFound/NotFound';


initialAuth()
function App() {
 
  return (
    <AuthProvider>
      <BrowserRouter>
    <Header>

    </Header>
  
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
      <Route exact path="/#services">
        <Services></Services>
      </Route>
      <Route exact path="/#destination">
        <Destination></Destination>
      </Route>
     
      <PrivateRoute exact path="/placeholder/:id">
        <PlaceHolder></PlaceHolder>
      </PrivateRoute>
      <PrivateRoute exact path="/mytour">
        <MyTour></MyTour>
      </PrivateRoute>
      <PrivateRoute  exact path="/manageAllTour">
     
        <ManageAllTour></ManageAllTour>
      
      </PrivateRoute>
      <PrivateRoute  exact path="/addNewTour">
     
        <AddNewTour></AddNewTour>
      
      </PrivateRoute>

      <Route path="*">
        <NotFound>
          
        </NotFound>
      </Route>
    </Switch>
    <Footer>

    </Footer>

   

    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
