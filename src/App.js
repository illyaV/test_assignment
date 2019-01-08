import React, { Component } from 'react';
import './App.css';
import {NavLink, Redirect, Route, Switch, withRouter} from "react-router-dom";
import DummyTable from "./DummyTable";
import DummyChart from "./DummyChart";
import DummyList from "./DummyList";
import data from './tabs'

class App extends Component {


  componentDidMount() {
  }

  render() {
    return (
      <div className="App">

        <NavLink className={'link'} to={'/table'}>table</NavLink>
	      <NavLink  className={'link'} to={'/chart'}>chart</NavLink>
	      <NavLink  className={'link'} to={'/list'}>list</NavLink>
       <Switch>
	       <Route exact path={'/'} render={() => <Redirect from={'/'} to={'/table'}/>}/>
         <Route path={'/table'} render={() => <DummyTable tableData={data[0]}/>}/>
         <Route path={'/chart'} render={() => <DummyChart chartData={data[1]}/>}/>
	       <Route path={'/list'} render={() => <DummyList listData={data[2]}/>}/>
       </Switch>
      </div>
    );
  }
}

export default withRouter(App);
