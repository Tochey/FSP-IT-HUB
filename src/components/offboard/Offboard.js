import React, { useState, useEffect } from 'react'
import './offboard.css'

const Offboard = () => {
    const OktaUsers = ({ query }) => {
        const [users, setUsers] = useState([])
        useEffect(() => {
            fetch(`https://42fctjltu4.execute-api.us-east-1.amazonaws.com/test/getusers`).then((response) => response.json())
                .then((res => setUsers(res)))

        }, [])

        const filteredData = users.filter((el) => {
            if (query.input === '') {
                return el;
            }

            else {
                return el.profile.displayName.toLowerCase().includes(query)
            }
        })
        return (filteredData.map((e) =>
            <tr class="table__data-row">
                <td colspan="2" data-label="Person & username">
                    <div>
                        <p class="ts-user-name">{e.profile.displayName}</p>
                        <p class="ts-user-email">{e.profile.title}</p>
                    </div>
                </td>
                <td colspan="2" data-label="Primary email">
                    {e.profile.email}
                </td>
                <td data-label="Status">
                    <button class="btn" id='offboard-btn'>Offboard</button>
                </td>
            </tr>
        ))
    }

    const [inputText, setInputText] = useState("");
    let handleChange = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    return (
        <div className='main-app'>
            <div class="table-section">
                <div class="container">
                    <div class="table-header">
                        <div class="search-box" onChange={(e) => handleChange(e)}>
                            <button class="search-button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#97979f"
                                    class="bi bi-search"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                                    />
                                </svg>
                            </button>
                            <input type="text" class="search-input" placeholder="Search.." />
                        </div>
                    </div>
                    <div class="ts-table-container">
                        <aside class="ts-aside">
                            {/* <ul class="ts-nav-list">
            <li class="active">All Users</li>
          </ul> */}
                            <ul class="ts-nav-list">
                                <li class="ts-nav-list__title">All Users</li>
                                <li>Scheduled</li>
                                <li>Recently Offboarded</li>
                            </ul>
                            {/* <ul class="ts-nav-list">
            <li class="ts-nav-list__title">Offboard</li>
            <li>Offboard</li>
            <li>Password reset</li>
            <li>Locked out</li>
          </ul> */}
                        </aside>
                        <div class="ts-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th colspan="2" scope="col">Person & username</th>
                                        <th colspan="2" scope="col">Primary email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <OktaUsers query={inputText} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Offboard