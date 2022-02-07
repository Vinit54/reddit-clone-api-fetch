import React from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <img src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png" />
        </div>
        <div className="nav-search">
          <div className="search">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search Reddit"
              className="search-input"
            ></input>
          </div>
        </div>
        <div className="nav-right-icons">
          <div className="nav-icons">
              Log In
          </div>
          <div className="nav-icons">
              Sign Up
          </div>
          <div className="nav-reddit">
            <PersonOutlineIcon />
          </div>
        </div>
      </div>
    </>
  );
};
