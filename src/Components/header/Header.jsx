import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './header.css';
import Tooltip from '@mui/material/Tooltip';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faTv, faHome, faUser, faGamepad, faBell } from '@fortawesome/free-solid-svg-icons';
import Profile from '../images/profile.jpg';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top shadow mt-0 bg-white z-index">
        <div className="container-fluid align-items-center">
          <Link to="/home">
            <img src={logo} style={{ width: "50px", height: "50px", cursor: "pointer" }} alt="Logo" />
          </Link>

          <SearchRoundedIcon 
            className="btn shadow-sm fs-2 rounded-circle px-2 d-lg-none d-sm-block me-auto ms-2"
            style={{ width: "40px", height: "40px", color: "#65686c", backgroundColor: "#f0f2f5" }}
          />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
              <input 
                type="text" 
                className="rounded-5 py-2 px-4 border-0 d-none d-lg-block"
                style={{ backgroundColor: "#e4e6e9" }} 
                placeholder="Search Facebook" 
              />

              <div className="d-flex flex-lg-row flex-column gap-5 ms-lg-5 align-items-center me-sm-auto">
                <Tooltip title="Home">
                  <Link to="/home"><span onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}><FontAwesomeIcon icon={faHome} className="icon-2 ms-lg-5" style={{ fontSize: "28px" }} /></span></Link>
                </Tooltip>

                <Tooltip title="Pages">
                  <span><FontAwesomeIcon icon={faFlag} className="icon-2 ms-lg-3" style={{ fontSize: "28px" }} /></span>
                </Tooltip>

                <Tooltip title="Watch">
                  <span><FontAwesomeIcon icon={faTv} className="icon-2 ms-lg-3" style={{ fontSize: "28px" }} /></span>
                </Tooltip>

                <Tooltip title="Friends">
                  <Link to="/friends"><span><FontAwesomeIcon icon={faUser} className="icon-2 ms-lg-3" style={{ fontSize: "28px" }} /></span></Link>
                </Tooltip>

                <Tooltip title="Games">
                  <span><FontAwesomeIcon icon={faGamepad} className="icon-2 ms-lg-3" style={{ fontSize: "28px" }} /></span>
                </Tooltip>
              </div>
            </ul>
          </div>

          <div className="d-flex ms-sm-2 gap-2 align-items-center">
            <Tooltip title="Messenger">
              <span><FontAwesomeIcon className="icon-3 p-2 rounded-circle" icon={faFacebookMessenger} style={{ fontSize: "25px" }} /></span>
            </Tooltip>

            <Tooltip title="Notification">
              <span><FontAwesomeIcon className="icon-3 p-2 rounded-circle" icon={faBell} style={{ fontSize: "25px" }} /></span>
            </Tooltip>

            <Tooltip title="Account">
              <Link to="/profile"><img src={Profile} className="rounded-circle img-fluid" style={{ width: "40px", height: "40px", objectFit: "cover" }} alt="Profile" />
              </Link>
            </Tooltip>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
