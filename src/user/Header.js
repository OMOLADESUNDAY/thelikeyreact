import React from 'react';
import Logo from '../images/logo.png';
import './user.css';

const Header = () => {
    return (
        <>
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <a className="navbar-brand brand-logo d-flex" href="/dashboard" style="align-items: center;">
                        <img src="/logo.png" alt="logo" style="width: 30px; height: 30px; margin-left: 20px; margin-right: 10px;" />
                        <h4 style="font-family: monospace; font-weight: bold; margin: auto; margin-left: 0; margin-right: 30px;">
                            THE LIKEY
                        </h4>
                    </a>
                    <a className="navbar-brand brand-logo-mini" href="/dashboard">
                        <img src={Logo} alt="logo" style="width: 30px; height: 30px;" />
                    </a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-stretch">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-menu"></span>
                    </button>
                    <div className="search-field d-none d-md-block">
                        <form className="d-flex align-items-center h-100" action="#">
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                    <i className="input-group-text border-0 mdi mdi-magnify"></i>
                                </div>
                                <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects"/>
                            </div>
                        </form>
                    </div>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-profile dropdown">
                            <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="nav-profile-img">
                                    <img src="/assets/images/faces/face1.jpg" alt="image"/>
                                        <span className="availability-status online"></span>
                                </div>
                                <div className="nav-profile-text">
                                    <p className="mb-1 text-black">
                                        <b>
                                            
                                        </b>
                                    </p>
                                </div>
                            </a>
                            <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                                <a className="dropdown-item" href="/activities">
                                    <i className="mdi mdi-cached me-2 text-info"></i> Activity Log </a>
                                <a className="dropdown-item" href="/profile">
                                    <i className="mdi mdi-account-convert me-2 text-success"></i> My Profile </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/sign-out">
                                    <i className="mdi mdi-logout me-2 text-primary"></i> Signout </a>
                            </div>
                        </li>
                        <li className="nav-item d-none d-lg-block full-screen-link">
                            <a className="nav-link">
                                <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
                            </a>
                        </li>

                        <li className="nav-item nav-logout d-none d-lg-block">
                            <a className="nav-link" href="/sign-out">
                                <i className="mdi mdi-power"></i>
                            </a>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header