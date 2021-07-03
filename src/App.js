import React from 'react';
import AppBar from './AppBar';
import SlideBar from './SilderBar/SlideBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {User} from './Page/Usepage/User';
import {NewUser} from './Page/NewUser/NewUser';
import {MyProfile} from './Page/Usepage/MyProfile';
import {NewDep} from './Page/NewDep/NewDep';
import './App.css';
function App() {
  return(
    <BrowserRouter>
    <div><AppBar/></div>
    <div>
        <Switch>
          <Route path="/user/:userID"><User/></Route>
          <Route path="/newUser"><NewUser/></Route>
          <Route path="/myprofile"><MyProfile/></Route>
          <Route path="/newdep"><NewDep/></Route>
        </Switch>
     </div>
    <div className="container"><SlideBar/></div>
     
    </BrowserRouter>
  
  );
}


export default App;
