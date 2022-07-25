import React, { useState } from "react";
import "./filters.scss";
import { Data } from "./Data";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";
const Filters = () => {
  const [checkBox, setCheckBox] = useState({});
  // {price:true,metals:true}
  const handleChange = (name) => {
    const obj = { ...checkBox, [name]: !checkBox[name] };
    setCheckBox(obj);
  };
  return (
    <div className="main">
      <div className="filterby">
        <span className="filter-title"> Filter By</span>
      </div>
      <div>
        {Data.map((item) => {
          return (
            <>
              <div className="flex-contain">
                <div className="flex">
                  <button
                    onClick={() => handleChange(item.name)}
                    className="button"
                  >
                    <span className="filtername">{item.name} </span>
                    <span className="plus-minus">
                      {checkBox[item.name] ? (
                        <AiOutlineLine />
                      ) : (
                        <AiOutlinePlus />
                      )}
                    </span>
                  </button>
                </div>
              </div>
              {item.sub.map((e) => {
                return (
                  <div
                    key={e.id}
                    className={
                      checkBox[item.name]
                        ? "tcheckcontainer"
                        : "fcheckcontainer"
                    }
                  >
                    <div className={e.cname}>
                      <input type="checkbox" /> {e.name}
                    </div>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
