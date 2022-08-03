import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
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
                data-bs-toggle-container="flag-ship-cards"
              >
              <Link to='/user-offboard'>
                <div class="card">
                  <img
                    class="offboard-img"
                    src="./assets/images/offboard-removebg-preview.png"
                    alt="..."
                  />
                  <h6 class="card-title">User Offboard</h6>
                </div>
                </Link>
                <Link to='/asset-automation'>
                <div class="card">
                  {/* <div class="d-flex justify-content-end">
                    <i class="bi bi-three-dots"></i>
                  </div> */}
                  <img
                    class="sloth-img"
                    src="./assets/images/sloth.png"
                    alt="..."
                  />
                  <h6 class="card-title">Asset Automation</h6>
                </div>
                </Link>
                <Link to='/verification-codes'>
                <div class="card">
                  <img
                    class="mfa-img"
                    src="./assets/images/2mfa-removebg-preview.png"
                    alt="..."
                  />
                  <h6 class="card-title">Verification Codes</h6>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCards;
