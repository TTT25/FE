import React from 'react';
import AppBar from './AppBar';
import SlideBar from './SilderBar/SlideBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Employee } from './Page/Employee';
import {Department} from './Page/Department';
import {Group} from './Page/Group';
import {Report} from './Page/Report';
import {Request} from './Page/Request';
import {Task} from './Page/Task';
function App() {
  return(
    <BrowserRouter>

    <div><AppBar/></div>
        <div className="container">
            <SlideBar/>
                <Switch>
                  <Route path="/department" component={dep}/> 
                  <Route path="/employee" component={emp}/> 
                  <Route path="/group" component={gr}/> 
                  <Route path="/report" component={rp}/> 
                  <Route path="/request" component={re}/> 
                  <Route path="/task" component={ta}/> 
                </Switch>
        </div>
  </BrowserRouter>
  );
}
const emp =()=>{
  return <Employee/>
}
const dep =()=>{
  return <Department/>
}
const gr =()=>{
  return <Group/>
}
const rp =()=>{
  return <Report/>
}
const re =()=>{
  return <Request/>
}
const ta =()=>{
  return <Task/>
}
export default App;
