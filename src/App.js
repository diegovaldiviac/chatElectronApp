import React from "react";
import HomeView from "./views/Home";
import LoginView from "./views/Login";
import SettingsView from "./views/Settings";
import RegisterView from "./views/Register";
import ChatView from "./views/Chat"
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
              <HomeView />
            </Route>
            <Route path="/settings">
              <SettingsView/>
            </Route>
            <Route path="/login">
              <LoginView/>
            </Route>
            <Route path="/register">
              <RegisterView/>
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
