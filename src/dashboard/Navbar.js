import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useOktaAuth } from '@okta/okta-react';

const Navbar = () => {

    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null)
  
    useEffect(() => {
      if (!authState || !authState.isAuthenticated) {
        // When user isn't authenticated, forget any user info
        setUserInfo(null);
      } else {
        // setUserInfo(authState.idToken.claims);
        // You can also get user information from the `/userinfo` endpoint
        
        oktaAuth.getUser().then((info) => {
          setUserInfo(info?.name);
        });
      }
    }, [authState, oktaAuth]);

    let isToggled = false
    return (
        <div class="navbar flex-nowrap">
        {/* eslint-disable-next-line */}
        <Link to={"/"}>
            <a class="navbar-brand">
                <img src="https://hubassets132.s3.amazonaws.com/assets/images/flagship_logo_mark-01.png" alt="..." />
            </a>
        </Link>

            <h5 class="fw-bold">Flagship IT HUB</h5>

            <div class="d-flex align-items-center gap-3 pe-3">
                <div class="dropdown d-none d-sm-block">
                    <p
                        class=" mb-0"
                        // dropdown-toggle
                        data-bs-toggle="dropdown"
                        aria-expanded="false" >
                        <span class="fw-bold"> {userInfo} </span>
                        <br />
                        <span> Flagship Pioneering </span>
                    </p>
                    {/* <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul> */}
                </div>
                <span id="menu-toggle">
                    <i class="bi bi-list" onClick={((e) => {
                        e.preventDefault()
                        if (isToggled) {
                            document.getElementById('wrapper').classList.remove('toggled')
                            isToggled = false
                        } else {
                            document.getElementById('wrapper').className = "toggled"
                            isToggled = true
                            console.log(document.getElementById('wrapper').className)
                        }

                    })}></i>
                </span>
            </div>
        </div>
    )
}

export default Navbar