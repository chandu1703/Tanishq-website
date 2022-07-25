import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { NavHeaders } from "./navitems/NavItems";
import "./dropdown/dropdown.scss";
import { IoMdMenu } from "react-icons/io";
 

import Menu from "./menubar/Menu";
function NavBar() {
  const [dropdown, showdropdown] = useState("");
  const [menu, setMenu] = useState(true);
  const [showmenu, SetShowMenu] = useState(Boolean);
  // const[dropclick,SetDropclick]=useState(false)
  const handleChange = () => {
    setMenu(!menu);
    SetShowMenu(!showmenu);
  };
  return (
    <div>
      <nav className="navbar">
        <>
          <button className="menu-btn" onClick={handleChange}>
            <IoMdMenu size={50} />
          </button>
          <div className="menu">{showmenu && <Menu />}</div>
          <Link to="/" className="tanishq">
            <img
              className="heading1"
              alt="logo"
              src="https://d33wubrfki0l68.cloudfront.net/9e4134ed541e29c1678c10ae60ac04ac89a622fe/33276/static/gspann-logo-118e08f639b657b898557aacd9e34333.svg"
            />
          </Link>
          <ul className="nav-items">
            {NavHeaders.map((items) => {
              return (
                <li
                  key={items.id}
                  className={items.cName}
                  onMouseEnter={() => {
                    showdropdown(items.title);
                  }}
                  onMouseLeave={() => {
                    showdropdown("");
                  }}
                >
                  <Link to={items.path} className="links">
                    {items.title}
                  </Link>
                  {dropdown === items.title && (
                    <>
                      <div className="container">
                        <ul className="alljewellery-submenu" id="submenu">
                          <div className="first">
                            {items.items?.map((item) => {
                              return (
                                <li key={item.id}>
                                  <Link to={item.path} className={item.cName}>
                                    {item.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </div>
                          <div className="second">
                            {items.items1?.map((i) => {
                              return (
                                <li key={i.id}>
                                  <Link to={i.path} className={i.cName}>
                                    {i.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </div>
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>

          <Link to="/store" className="location">
            <img
              style={{ marginLeft: "40px" }}
              width="30px"
              height="30px"
              alt="location logo"
              src="https://www.tanishq.co.in/wps/wcm/connect/tanishq/8db4d9e7-8a24-4486-a867-e507a3c3f6be/store-locataor.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-8db4d9e7-8a24-4486-a867-e507a3c3f6be-m2i4h5c"
            />
          </Link>
          <Link to="/search">
            <img
              className="search"
              alt="searchlogo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAe1BMVEX///8AAAD7+/v4+PjIyMiLi4vFxcVLS0v5+fnz8/Pm5uaqqqqjo6O4uLg8PDzs7OxeXl5ERETY2NixsbFubm5paWl9fX0MDAyRkZGEhITf399iYmJFRUUuLi44ODjS0tJQUFAVFRUiIiKZmZkxMTF0dHQoKCgUFBQeHh5ZzIO/AAAE6UlEQVR4nO2c63qiMBCGFZUWAc+21a6nWtve/xWubpdkAlGBhMTR7/0r5Jl8hsnM5NBqAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgnht00nSbJNE27fd+2uCfox4fPtsLXLFl2fNvljCCc5fovdJinDyHD8kXf/4z5xreFTRNuLytwYpD6trJJun+uK3BifbcqDN/LKXDiz9K3tY2QlFfgRC/wbbB1hk/VJGi3V/cWM6S6Xq63h7ckTZP9y2ig+z32bbVV9oX+PfU2Q/rEcPNWnDJefNnbAIf8ME+GuseiOD8cRq4tbYzcfDC6EAUt5+qzg2d3ZjbJSFVgcvnpvjpoBncxPSj/7Ef3+guTseI4mrewcXqKkyv3r77Rd94bNrB5Ytqd0iFwl77Va9I+B2xIX74qBD3PgzrS3STBjng37Xx4jg71pJXevDWIj6/s4IkInP1iSCSoXiAiGUbSgHGO+DEaztGn0eu3AckSrgRGevry/YNt2xwRGY9lkm0yranI6GhbtwnpU3lGSmQY1K6GRN+8B4L0Bm/1G5mKRljWEoT1O5PUT84NDFdfZMhvVBKz1IwfZmIYmP2BInEYWzLMHdHOgjc4IT0CuzhpY8v06DVraGrHMneI4GBg2pKoQ7ELEUTCY5zuiMTri1l9tWMeH2UEXMOkSWb3yrwuLBarmdWTRBlxZt6WqLAyKywKu/fmbYnskVkCLZaWSqwnXEOUEZhFSSLMr1U8URlmbb2at+USe9PCMUr6yBrjte4m/rrIvK1gzVsDo7w5Q6w/8kqfM6t/bDQmYk4Lg8ohzYwDnt8C/IGleeGHpwaID8iC6QPHicgXkDeeEOXEtbkfE3s3mdUPLNaR5BzDrI4kYzvjpRFZT+QVKrdaC2vOXCzWsNu4K9fIDNcXOnzXF+SqueHsmNoS0wNiaeTHbFlArDcaL9a4x9KCcWinGU8I4z9MWhE5I7PiwS/Yh0LSPQNvJlfwbSSgHhAhQv2Z/cW8Cb+QgVDTn/Hfn0iPYtTqAhHRQvrpCdmH7xpePSBnGPjFRxlk3/q4esJDzjsy3rdOz3NVPoMwk+8yDBElMuE5dqTS5xDQcyy8Tz7XPc/Uoef72CWMOZSTzmHZtyYf5C2WEaLCgoqwKPeOclUC0+hIQTntvC5x48tSOQD/JIqyPKPlX9Qz/fMrXiFS781ZiTm1V/5TukHUQ9/tw4U/tL9Qn10TCSr4kxtkpnas/RRr58kgzV8DsVUk4C1Cr51nvN8oNbbnSVK8B2NWaICzCNNC/046zBb7f/ehLA7aG2NkhCw15CzCcqXr5SVepdugw4izCOqlBtchVyWoXxJrEfqjM93VMCZzR96ZsBahFZb8IL5phlD0p7xFaKUlbo0bKJW3ogTsRWht8pcl5XhXO6iTgL8Ix1BotNP3/3sb58pNC/2D/EU4MknmuTux1u/7TXHPSqiX4D5EOBINw2m8PxLHYT86s2fn3kUoRRciXBDBwtZHNpwVgevaUx3OibD2bZhLzonwSC7hnAhz33Y55YwIvs1yiz5O8G2VY7QjwbdRrtGIsPJtk3OKnwOzzfw2KIwE3uvR9ciJUHL18s5QROB8s6QJk52Q4LECJEr0v7L0xexgj2W602n6SCkjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AV/ATrNLMRWqVTsAAAAAElFTkSuQmCC"
            />
          </Link>
        </>
      </nav>
    </div>
  );
}

export default NavBar;
