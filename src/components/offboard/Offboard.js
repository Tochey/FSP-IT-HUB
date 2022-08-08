import React, { useState, useEffect } from 'react'
import './offboard.css'

const Offboard = () => {
    const [users, setUsers] = useState([])
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState()

    const Test = ({ isOpen, userEmail }) => {

        if (!isOpen) return
        return (
            <div class="alert alert-danger alert-popup" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                OFFBOARD <span>{userEmail}?</span> THIS ACTION CANNOT BE UNDONE!<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">YES</button>
            </div>)
    }

    const ImportantPeople = ({ email }) => {
        const cantOffboard = ['nafeyan@flagshippioneering.com', 'ahmad@flagshippioneering.com', 'rrosiello@flagshippioneering.com', 'akahvejian@flagshippioneering.com', 'lafzelius@flagshippioneering.com', 'imartinez@flagshippioneering.com']
        for (let name of cantOffboard) {

            if (email === name) {
                return (<td data-label="Status">
                    <button type="button" class="btn btn-danger" disabled style={{ "fontWeight": "bold" }}>Offboard</button>
                </td>)
            }
        }

        return (
            <td data-label="Status">
                <button type="button" class="btn btn-danger offboard-btn" onClick={() => {
                    setShow(true)
                    setEmail(email)
                }}>Offboard</button>
            </td>
        )

    }

    useEffect(() => {
        fetch(process.env.REACT_APP_AG_GET_OKTA_USERS, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `SSWS ${process.env.REACT_APP_OKTA_ACCESS_TOKEN}`
            }
        })
            .then((response) => response.json())
            .then((res => setUsers(res)))

    }, [])

    const OktaUsers = ({ query }) => {

        const filteredData = users.filter((el) => {
            if (query.input === '') {
                return el;
            }

            else {
                return el.profile.displayName.toLowerCase().includes(query)
            }
        })
        return (filteredData.map((e) =>
            <>
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
                    <ImportantPeople email={e.profile.email} />
                </tr>
            </>
        ))
    }

    const [inputText, setInputText] = useState("");
    let handleChange = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className='main-app'>
            <div class="table-section">
                <div className='schedule-btn'>
                    <button>
                        Schedule
                    </button>
                </div>
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
                            <ul class="ts-nav-list">
                                <li class="ts-nav-list__title">All Users</li>
                                <li>Scheduled</li>
                                <li>Recently Offboarded</li>
                            </ul>
                        </aside>
                        <div class="ts-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="2" scope="col">Person & username</th>
                                        <th colSpan="2" scope="col">Primary email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <OktaUsers query={inputText} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Test isOpen={show} userEmail={email} />
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
                    <div class="modal-dialog alert-popup2" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close" onClick={(() =>
                                    setShow(false)
                                )}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Offboard the user below?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={(e) => setShow(false)}>Go Back</button>
                                <button type="button" class="btn btn-primary btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2">Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="exampleModal2" class="modal">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Offboard Logs</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShow(false)}></button>
                            </div>
                            <div class="modal-body">
                                <p>The modal body is where all the text, images, and links go.</p>
                            </div>
                            <div class="modal-footer">
                                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShow(false)}>Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Offboard