import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import TasksContextProvider from './contexts/TasksContext';
import ClockContextProvider from './contexts/ClockContext';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Settings from './components/Settings'
import Exercise from "./components/Exercise"
import CounterContextProvider from './contexts/CounterContext';
import Evaluation from './components/Evaluation';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ClockContextProvider>
          <TasksContextProvider>
            <CounterContextProvider>
              <div className="App" style={{width:"100%",height:"100vh"}}>
                  <Navbar />
                  <Route exact path='/' component={Home}/>
                  <Route path='/settings' component={Settings} />
                  <Route path='/exercise' component={Exercise} />
                  <Route path='/evaluation' component={Evaluation} />
              </div>
            </CounterContextProvider>
          </TasksContextProvider>
        </ClockContextProvider>
      </BrowserRouter>

    );
  }
}

export default App;
