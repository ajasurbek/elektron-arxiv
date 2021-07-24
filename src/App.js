
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import { RiBarcodeBoxFill, RiFileList2Fill, RiLayoutGridFill, RiUser2Fill } from "react-icons/ri";
import { FaComment } from "react-icons/fa";
import Login from '../src/components/Pages/Login/Login'
import Helper from "./components/Pages/ModeratorPage";
import Adminka from '../src/components/Pages/Adminka/Adminka'
import "./App.css";
import User1 from './components/Pages/User1/User1'
import SearchUser from "./components/Pages/User1/Search/SearchUser";
import SearchTable from "./components/Pages/User1/SearchTable/SearchTable";
function App({ location }) {



  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);
  // let main = null;
  // console.log(user);
  // if (user && user.type == 1) {
  //   return  <Adminka/>
  // } else if(user) {
  //   return  <Helper/>
  // }
  // else {
  //   return  <Login/>
  // }
  

  // if (user) {
  //    main = <Adminka/>
  // }
  // else {
  //  main = <Login/>
  // }
  
  
  return (
    <>

      <Router><Helper/></Router>
      
    </>
  );
}

export default App;
