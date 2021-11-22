import React, { useState, useEffect } from "react";
import "./app.scss";
import Header from "./components/header/Header";

import 'aos/dist/aos.css';
import "aos/dist/aos"
import AOS from "aos";
import Work from "./components/work/Work";
export default function App() {
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    AOS.init({
      duration : 1500
  });
  }, [])
  
  return (
  
    <div className="app"> 
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Work/>
    </div>
  );
}
