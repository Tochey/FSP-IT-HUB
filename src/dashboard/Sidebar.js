import React from 'react'
import '../styles.css'
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <div id="sidebar-wrapper" class="sidebar-wrapper">
            <ul class="sidebar-nav">
                <Link to="/">
                    <li class="nav-item sidebar-brand">
                        {/* eslint-disable-next-line */}
                        <a>
                            <img src="https://hubassets132.s3.amazonaws.com/assets/images/flagship_logo_standard.jpg" alt="..." />
                        </a>
                    </li>
                </Link>

                <li class="dropdown side-dropdown">
                    {/* eslint-disable-next-line */}
                    <a
                        class="nav-item nav-link dropdown-toggle"
                        //dropdown-toggle
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Applications
                    </a>
                    {/* </Link> */}
                    <ul class="dropdown-menu">
                        <Link to="/user-offboard">
                            <li>
                                {/* eslint-disable-next-line */}
                                <a class="dropdown-item"> User Offboard</a>
                            </li>
                        </Link>
                        <Link to="/asset-automation">
                            <li>
                                {/* eslint-disable-next-line */}
                                <a class="dropdown-item" >Asset Automation</a>
                            </li>
                        </Link>
                        <Link to="/verification-codes">
                            <li>
                                {/* eslint-disable-next-line */}
                                <a class="dropdown-item" href="#">Verification Codes</a></li>
                        </Link>
                    </ul>
                </li>
                <Link to="/analytics">

                    <li class="nav-item">
                        {/* eslint-disable-next-line */}
                        <a >Analytics</a>
                    </li>
                </Link>
                <Link to="/about">

                    <li class="nav-item">
                        {/* eslint-disable-next-line */}
                        <a >About</a>
                    </li>
                </Link>
                <li class="nav-item">
                    <a href="https://github.com/Tochey?tab=repositories" target="_blank" rel="noreferrer" >Source</a>
                </li>
            </ul>
            <div class="sidebar-footer">
                <p class="mb-1">
                    <small> </small>
                </p>
                <p class="mb-1"><small>&copy; Flagship IT HUB</small></p>
                <p class="mb-1"><small>All Rights Reserved </small></p>
            </div>
        </div>
    )
}

export default Sidebar