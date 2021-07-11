import React from 'react';
import AppBar from './AppBar';
import SlideBar from './SilderBar/SlideBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {User} from './Page/Usepage/User';
import {NewUser} from './Page/NewUser/NewUser';
import {MyProfile} from './Page/Usepage/MyProfile';
import {NewDep} from './Page/NewDep/NewDep';
import './App.css';
import { NewTask } from './Page/PopupNewTask/NewTask';
import { TaskEdit } from './Page/PopupNewTask/TaskEdit';
import { DepEdit } from './Page/NewDep/DepEdit';
import { EditGroup } from './Page/NewGroup/EditGroup';
import { NewGroup } from './Page/NewGroup/NewGroup';
import { Login } from './Login';


function App() {


  return(
    <BrowserRouter>
     <Route path="/login" component={Login} />
    <div><AppBar/></div>
    <div>
        <Switch>
        {/* <Route path="/login" component={Login} /> */}
          <Route path="/user/:userID"><User/></Route>
          <Route path="/department/:depID"><DepEdit/></Route>
          <Route path="/newUser"><NewUser/></Route>
          <Route path="/myprofile"><MyProfile/></Route>
          <Route path="/newdep"><NewDep/></Route>
          <Route path="/Group/:groupID"><EditGroup/></Route>
          <Route path="/newgroup"><NewGroup/></Route>
          <Route path="/task/:taskID"><TaskEdit/></Route>
          <Route path="/newtask"><NewTask/></Route>
        </Switch>
     </div>
    <div className="container"><SlideBar/></div>
     
    </BrowserRouter>
  
  );
}

export default App;
