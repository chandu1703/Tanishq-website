import React, { useState } from "react";
import "./menu.scss";
import { MenuItems } from "./MenuItems";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";
import { Link } from "react-router-dom";
const Menu = () => {
  const [checkBox, setCheckBox] = useState({});
  // {price:true,metals:true}
  const handleChange = (title) => {
    const obj = { [title]: !checkBox[title] };
    setCheckBox(obj);
    console.log(checkBox);
  };
  return (
    <>
      <div className="menu-main">
        <div>
          {MenuItems.map((item) => {
            return (
              <>
                <div key={item.id} className="">
                  <div className="flex">
                    <button
                      className="sub-btn"
                      onClick={() => handleChange(item.title)}
                    >
                      <span className="filtername">{item.title}</span>
                      <span className="plus-minus">
                        {checkBox[item.title] ? (
                          <AiOutlineLine />
                        ) : (
                          <AiOutlinePlus />
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  key={item.id}
                  className={
                    checkBox[item.title] ? "tsubcontainer" : "fsubcontainer"
                  }
                >
                  <>
                    <div className="menu-sub">
                      <ul id="submenu">
                        <div className="first">
                          {item.items?.map((item) => {
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
                          {item.items1?.map((i) => {
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
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
