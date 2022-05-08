import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Createfood from './components/Createfood';
import Editfood from './components/Editfood';
import foodHome from './components/foodHome';
import NavBarfood from './components/NavBarfood';
import foodDetails from './components/foodDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

       <div className="container">
         <NavBarfood/>
         <Route path="/" exact component={foodHome}></Route>
         <Route path="/add"component={Createfood}></Route>
         <Route path="/edit/:id"component={Editfood}></Route>
         <Route path="/food/:id"component={foodDetails}></Route> 
       </div>
           
      </BrowserRouter>
  
    )
  }
}