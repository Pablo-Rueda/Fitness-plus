import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import TasksContextProvider from './contexts/TasksContext';
import ClockContextProvider from './contexts/ClockContext';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Settings from './components/Settings'
import Exercise from "./components/Exercise"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ClockContextProvider>
          <TasksContextProvider>
            <div className="App" style={{width:"100%",height:"100vh"}}>
              <Navbar />
              <Route exact path='/' component={Home}/>
              <Route path='/settings' component={Settings} />
              <Route path='/exercise' component={Exercise} />

            </div>
          </TasksContextProvider>
        </ClockContextProvider>
      </BrowserRouter>

    );
  }
}

export default App;
