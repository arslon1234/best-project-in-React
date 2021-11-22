import './header.scss'
import { init } from 'ityped'
import {useRef, useEffect, useState} from 'react'
export default function Header({openMenu, setOpenMenu}) {
       const text = useRef()
       useEffect(() => {
              init(text.current, 
                     { 
                     showCursor: false,
                     typeSpeed:  50,
                      strings: ['websites', 'ux/ui', "mobile apps", "things", "motion" ] })
       }, [])
       return (
              <div className="header">
                     <div className="navbar">
                            <div className="navbarleft">
                                   <span>{"<"}</span>
                                   <span>YASIO</span>
                                   <span>{"/>"}</span>
                            </div>
                            <div className="navbarright">
                            <ul>
                                 <li>
                                        <a href="#start">
                                        Start
                                        <span>{"/>"}</span>
                                        </a>
                                 </li>
                                 <li>
                                        <a href="#work">
                                        Work
                                        <span>{"/>"}</span>
                                        </a>
                                 </li>
                                 <li>
                                        <a href="#lab">
                                        Lab
                                        <span>{"/>"}</span>
                                        </a>
                                 </li>
                                 <li>
                                        <a href="#about">
                                        About
                                        <span>{"/>"}</span>
                                        </a>
                                 </li>
                                 <li>
                                        <a href="#contact">
                                        Contact
                                        <span>{"/>"}</span>
                                        </a>
                                 </li>
                          </ul>  
                            </div>
                            <div className="menu" >
                            <span className={ openMenu ? "closebar" :"bar"}  >
                            <i onClick={()=>setOpenMenu(!openMenu)} className="fa-solid fa-bars"></i>
                            </span>
                            <span className={openMenu ? "openmark": "mark"}>
                            <i  onClick={()=>setOpenMenu(!openMenu)} className="fa-solid fa-xmark"></i>
                            </span>
                            </div>
                     </div>
                     <div className={ openMenu ? "openResponsive": "responsive"}>
                     <ul>
                                 <li>
                                        <a href="#start" onClick={()=>setOpenMenu(false)}>
                                        Start
                                        <span>{"/>"}</span>
                                        </a>
                                 </li>
                                 <li>
                                        <a href="#work" onClick={()=>setOpenMenu(false)}>
                                        Work
                                        <span>{"/>"}</span>
                                        </a>
                                 </li>
                                 <li>
                                        <a href="#lab" onClick={()=>setOpenMenu(false)}>
                                        Lab
                                        <span>{"/>"}</span>
                                        </a>
                                 </li>
                                 <li>
                                        <a href="#about" onClick={()=>setOpenMenu(false)}>
                                        About
                                        <span>{"/>"}</span>
                                        </a>
                                 </li>
                                 <li>
                                        <a href="#contact" onClick={()=>setOpenMenu(false)}>
                                        Contact
                                        <span>{"/>"}</span>
                                        </a>
                                 </li>
                          </ul>  
                     </div>
                     <div className="header-body">
                         <div className="bodyInfo">
                                <div className="bodydesc" >
                                       <p data-aos="fade-right">start <span>{"/>"}</span> </p>
                                       <h1 data-aos="fade-right">Hi, my name is <span className="name">Arslon_Bek</span></h1>
                                       <h1 data-aos="fade-right">i <i>design</i> and develop <span ref={text}></span></h1>
                                </div>
                         </div>
                     </div>
                     <div className="downHeader">
                           <a href="#work">
                           <i class="fa-solid fa-down-long"></i>
                           </a>
                     </div>
              </div>
       )
}
