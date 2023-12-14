import React from "react";
import Home from "./views/Home";

export default function App() {
  const sendNotification = () => {
    //electron.notificationAPI.sendNotification("");
    console.log("not working, probably preload");
  };
  
  return (
    <Home/>
  )
}
