import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const AppCards = () => {

  return (
    <>
      <div id="page-content-wrapper">
        <div class="container">
          <div class="main-data-container">
            <div class="d-flex justify-content-between align-items-center mt-4 mb-5">
              <h5 class="mb-0">All Apps</h5>
            </div>
            <div class="mb-5">
              <div
                class="ts-app-cards"
                data-bs-toggle-container="flag-ship-cards">
                {/* <Link to='/user-onboard'> */}
                  <div class="card">
                    <img
                      class="onboard-img"
                      src="https://hubassets132.s3.amazonaws.com/assets/images/on-removebg-preview.png"
                      alt="..."
                    />
                    <a class="card-title" href="https://github.com/Tochey/FSP_Jamf" target="_blank">JAMF</a>
                  </div>
                {/* </Link> */}
                <Link to='/user-offboard'>
                  <div class="card">
                    <img
                      class="offboard-img"
                      src="https://hubassets132.s3.amazonaws.com/assets/images/offboard-removebg-preview.png"
                      alt="..."
                    />
                    <h6 class="card-title">Employee Off-board</h6>
                  </div>
                </Link>
                <Link to='/asset-automation'>
                  <div class="card">
                    <img
                      class="sloth-img"
                      src="https://hubassets132.s3.amazonaws.com/assets/images/sloth.png"
                      alt="..."
                    />
                    <h6 class="card-title">Asset Automation</h6>
                  </div>
                </Link>
                <Link to='/verification-codes'>
                  <div class="card">
                    <img
                      class="mfa-img"
                      src="https://hubassets132.s3.amazonaws.com/assets/images/2mfa-removebg-preview.png"
                      alt="..."
                    />
                    <h6 class="card-title">Verification Codes</h6>
                  </div>
                </Link>
                {/* <Link to='/user-onboard'> */}
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCards;
