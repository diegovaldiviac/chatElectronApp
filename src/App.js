import React from "react";
import HomeView from "./views/Home";
import SettingsView from "./views/Settings";
import ChatView from "./views/Chat"
import WelcomeView from "./views/Welcome";
import NavBar from "./components/NavBar";
import {Provider} from "react-redux"
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import configureStore from "./store";


const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className='content-wrapper'>
          <Switch>
          <Route path="/" exact>
              <WelcomeView />
            </Route>
            <Route path="/settings">
              <SettingsView/>
            </Route>
            <Route path="/home">
              <HomeView/>
            </Route>
            <Route>
              <ChatView path="/chat"/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
    
  )
}
