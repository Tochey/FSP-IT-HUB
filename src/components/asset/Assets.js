import React, { useState, useEffect } from 'react'
import './assets.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import axios from 'axios'
import AssetsResponse from './AssetsResponse';
import Autocomplete from './Autocomplete';

const Assets = () => {

  const [packageNum, setPackageNum] = useState(0)
  const [users, setUsers] = useState([])
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const alert = (message, color) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `   <div style="color:${color};font-weight:bold" >${message}</div>`,
      '</div>'
    ].join('')

    try {
      alertPlaceholder.append(wrapper)
    } catch (err) {
      console.log('Filed cannot be empty. Enter data')
    }

  }

  const [startDate, setStartDate] = useState(new Date());
  const handlePost = function (e) {

    const request = {
      fullName: document.getElementById('auto-complete').value,
      packageNumber: packageNum,
      purchaseDate: moment(startDate).format('MMM D, YYYY'),
    }


    if (request.fullName.trim().length === 0) {
      return alert("Please select an employee", "red")
    }
    if (request.packageNumber === 0) return alert("Please salect a package", "red")

    axios.post(process.env.REACT_APP_AG_EXECUTE_ASSET_LAMDA, request).then((e) => e.data)
      .then((e) => alert(e))
    alert(`Successfully added ${request.fullName}'s assets`, "green")
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
      .then((res => res.map((e) => {
        setUsers(users => [...users, e.profile.displayName])
      })))
  }, [])


  return (
    <>
      <div className="main-container">
        <AssetsResponse />
        <div className="login-box">
          <h5>Assign Employee Assets</h5>
          <form>

            <div className="user-box">
              <Autocomplete suggestions={users} />
            </div>
            <div className="user-box" >
              <select name="packageNumber" onChange={((e) => setPackageNum(e.target.value))}>
                <option value={0}>Please select a package</option>
                <option value={1}>WFH MAC, 24"x2</option>
                <option value={2}>WFH MAC, 32"x1</option>
                <option value={3}>WFH WINDOWS, 24"x2</option>
                <option value={4}>WFH WINDOWS, 32"x1</option>
              </select>
            </div>
            <div className="user-box calender">
              <DatePicker selected={startDate} onChange={(date) => {
                setStartDate(date)
              }} name="purchaseDate" />
            </div>
            {/* eslint-disable-next-line */}
            <div id="liveAlertPlaceholder"></div>
            <a onClick={(e) => handlePost(e)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Send
            </a>
          </form>
        </div>
      </div>
    </>
  )
}


export default Assets