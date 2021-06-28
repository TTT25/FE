import React from 'react';
import AppBar from './AppBar';
import SlideBar from './SilderBar/SlideBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Employee } from './Page/Employee';

function App() {
  return(
    <BrowserRouter>

    <div><AppBar/></div>
   <div className="container">
    <SlideBar/>
    <Switch>
     
      <Route path="/employee" component={emp}/> 
     
    </Switch>
    </div>
  </BrowserRouter>
      

     
  );
}
const emp =()=>{
  return <Employee/>
}
export default App;
