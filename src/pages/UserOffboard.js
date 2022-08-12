import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './useroffboard.css'

const UserOffboard = () => {
    const [catFact, setCatFact] = useState([])
    const [userGroups, setUserGroups] = useState([])

    let { id } = useParams();

    const Logs = ({ arr }) => {
        const ans = arr.map((e) => {
            if (e.service === "DRUVA") {
                return (<><img src='https://hubassets132.s3.amazonaws.com/assets/images/Druva.png' className='druva-img' />  <ul>{e.logs.map((e) => <li>{e}</li> )}</ul></>)

            } else if (e.service === 'EGNYTE') {
                return (<><img src='https://hubassets132.s3.amazonaws.com/assets/images/egnyte.webp' className='egnyte-img' />  <ul>{e.logs.map((e) =><li>{e}</li>)} </ul></>)
            } else if (e.service === "Okta") {
                return (<><img src='https://hubassets132.s3.amazonaws.com/assets/images/okta.png' className='okta-img' />{setUserGroups(e.groups)}<ul>{e.logs.map((e) => {
                    if(e.includes('groups')) return (
                        <><li>{e}</li>
                        {userGroups.map((e) => <ul className='user-groups'><li>{e}</li></ul>)}
                        </>
                    )
                    return <li>{e}</li>
                })}</ul></>)
            }

        })
        return ans
    }

    useEffect(() => {
        fetch("https://h081rjb8il.execute-api.us-east-1.amazonaws.com/test/offboard", {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: `${id}`
            })
        })
            .then((e) => e.json())
            .then((e) => setCatFact(JSON.parse(e.body)))
    }, [])



    if (catFact.length === 0) {
        return (
            <div className="container">
                <div className="text-center loader" >
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container offboard-container">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item" >
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ color: 'rgb(0, 109, 149)', fontSize: '17px', fontWeight: 'bold' }}>
                                Automated Offboard Processes for {id}
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <Logs arr={catFact} />
                                <img src='https://hubassets132.s3.amazonaws.com/assets/images/jamf.png' className='jamf-img' />
                                <ul>
                                <li>Removed user computer from jamf ( if applicable )</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{ color: 'rgb(0, 109, 149)', fontSize: '17px', fontWeight: 'bold' }}>
                                Remaining Steps
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                <img src='https://hubassets132.s3.amazonaws.com/assets/images/microsoft.png' className='ms-img' />
                                <br />
                                <ul>
                                    <li>Block User Sign-in</li>
                                    <li>Remove all activated office devices</li>
                                    <li>Change the user to a Shared Mailbox</li>
                                    <li>Shut down user access to building </li>
                                </ul>
                                <img src='https://hubassets132.s3.amazonaws.com/assets/images/notion.png' className='notion-img'/>
                                <ul>
                                    <li>Export Notion Database to required destination</li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserOffboard