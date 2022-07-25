import React, { useState } from "react";
import Allitems from "../../Components/Allitems/Allitems";
import Filters from "../../Components/filters/Filters";
import "./alljewellery.scss";
import { Data } from "../../Components/filters/Data";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";
import { AiOutlineFilter } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

const AllJewellery = () => {
  const [checkBox, setCheckBox] = useState({});
  const [filtershow, SetFiltershow] = useState(false);
  const handleChange = (name) => {
    const obj = { ...checkBox, [name]: !checkBox[name] };
    setCheckBox(obj);
  };
  return (
    <>
      
        <div className="filter-main">
          <button
            className="filter-btn"
            onClick={() => {
              SetFiltershow(!filtershow);
            }}
          >
            <span className="filter-title">
              {" "}
              Filter By{" "}
              <span>
                <AiOutlineFilter />
              </span>
            </span>
          </button>
          {filtershow && (
            <div className="main1">
              <div className="filterby">
                <span className="filter-title">
                  {" "}
                  <button
                    className="back-btn"
                    onClick={() => SetFiltershow(false)}
                  >
                    {" "}
                    <BiArrowBack size={30} />
                  </button>
                </span>
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
          )}
        </div>
        <div className="container">
          <div>
            <Filters />
          </div>

          <Allitems />
        </div>
      
    </>
  );
};
export default AllJewellery;
