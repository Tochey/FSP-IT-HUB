import React, { useState, useEffect } from 'react'
import './offboard.css'

const Offboard = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        fetch(`https://fsp.okta.com/api/v1/users/`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `SSWS 00muwm4t8ZQ113ws_gxX_E-eokgN1vDJ4FSdbO396b`,
            },
        }).then((response) => response.json())
            .then((res => console.log(res)))

    }, [])

    return (
        <div className='main-app'>
            <div class="table-section">
                <div class="container">
                    <div class="table-header">
                        <div class="search-box">
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
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table__data-row">
                                        <td colspan="2" data-label="Person & username">
                                            <div>
                                                <p class="ts-user-name">Mary Beth</p>
                                                <p class="ts-user-email">mbeth@verify.com</p>
                                            </div>
                                        </td>
                                        <td colspan="2" data-label="Primary email">
                                            mbeth@verify.com
                                        </td>
                                        <td data-label="Status">
                                            <button class="btn btn-outline-primary">Offboard</button>
                                        </td>
                                    </tr>
                                    <tr class="table__data-row">
                                        <td colspan="2" data-label="Person & username">
                                            <div>
                                                <p class="ts-user-name">Mary Beth</p>
                                                <p class="ts-user-email">mbeth@verify.com</p>
                                            </div>
                                        </td>
                                        <td colspan="2" data-label="Primary email">
                                            mbeth@verify.com
                                        </td>
                                        <td data-label="Status">
                                            <button class="btn btn-outline-primary">Offboard</button>
                                        </td>
                                    </tr>
                                    <tr class="table__data-row">
                                        <td colspan="2" data-label="Person & username">
                                            <div>
                                                <p class="ts-user-name">Mary Beth</p>
                                                <p class="ts-user-email">mbeth@verify.com</p>
                                            </div>
                                        </td>
                                        <td colspan="2" data-label="Primary email">
                                            mbeth@verify.com
                                        </td>
                                        <td data-label="Status">
                                            <button class="btn btn-outline-primary">Offboard</button>
                                        </td>
                                    </tr>
                                    <tr class="table__data-row">
                                        <td colspan="2" data-label="Person & username">
                                            <div>
                                                <p class="ts-user-name">Mary Beth</p>
                                                <p class="ts-user-email">mbeth@verify.com</p>
                                            </div>
                                        </td>
                                        <td colspan="2" data-label="Primary email">
                                            mbeth@verify.com
                                        </td>
                                        <td data-label="Status">
                                            <button class="btn btn-outline-primary">Offboard</button>
                                        </td>
                                    </tr>
                                    <tr class="table__data-row">
                                        <td colspan="2" data-label="Person & username">
                                            <div>
                                                <p class="ts-user-name">Mary Beth</p>
                                                <p class="ts-user-email">mbeth@verify.com</p>
                                            </div>
                                        </td>
                                        <td colspan="2" data-label="Primary email">
                                            mbeth@verify.com
                                        </td>
                                        <td data-label="Status">
                                            <button class="btn btn-outline-primary">Offboard</button>
                                        </td>
                                    </tr>
                                    <tr class="table__data-row">
                                        <td colspan="2" data-label="Person & username">
                                            <div>
                                                <p class="ts-user-name">Mary Beth</p>
                                                <p class="ts-user-email">mbeth@verify.com</p>
                                            </div>
                                        </td>
                                        <td colspan="2" data-label="Primary email">
                                            mbeth@verify.com
                                        </td>
                                        <td data-label="Status">
                                            <button class="btn btn-outline-primary">Offboard</button>
                                        </td>
                                    </tr>
                                    <tr class="table__data-row">
                                        <td colspan="2" data-label="Person & username">
                                            <div>
                                                <p class="ts-user-name">Mary Beth</p>
                                                <p class="ts-user-email">mbeth@verify.com</p>
                                            </div>
                                        </td>
                                        <td colspan="2" data-label="Primary email">
                                            mbeth@verify.com
                                        </td>
                                        <td data-label="Status">
                                            <button class="btn btn-outline-primary">Offboard</button>
                                        </td>
                                    </tr>
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