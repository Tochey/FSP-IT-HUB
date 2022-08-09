import React, { useState } from 'react'
import './assets.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import axios from 'axios'
import AssetsResponse from './AssetsResponse';

const Assets = () => {
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

  const alert = (message, color) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      // `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div style="color:${color};font-weight:bold" >${message}</div>`,
      // '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
  }

  let userInput;
  const [startDate, setStartDate] = useState(new Date());
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    packageNumber: 0,
    purchaseDate: moment(startDate).format('MMM D, YYYY')
  });


  const handleChange = (e) => {
    if (e.target) {
      e.preventDefault();
      userInput = e.target.value;
      setInfo({
        ...info,
        [e.target.name]: userInput,
      });
    } else {
      setInfo({
        ...info,
        purchaseDate: moment(e).format('MMM D, YYYY'),
      });
    }
  }

  const handlePost = function (e) {
    e.preventDefault()
    console.log(info.packageNumber)
    info.firstName = info.firstName.trim()
    if (info.firstName.length < 3 || !info.firstName) {
      alertPlaceholder.innerHTML = ""
      alert('Invalid First Name', 'red')
      return
    } else if (info.lastName < 3 || !info.lastName) {
      alertPlaceholder.innerHTML = ""
      alert('Invalid Last Name!', 'red')
      return
    } else if (info.packageNumber < 1 || !info.packageNumber) {
      alertPlaceholder.innerHTML = ""
      alert('Please select a package', 'red')
      return
    }
    alertPlaceholder.innerHTML = ""
    alert('Success', 'green')

    axios.post(process.env.REACT_APP_AG_EXECUTE_ASSET_LAMDA, info).then((e) => e.data())
      .then((e) => alert(e))

    setInfo({
      firstName: "",
      lastName: "",
      packageNumber: info.packageNumber,
      purchaseDate: moment(startDate).format('MMM D, YYYY')
    })

    document.querySelectorAll("#to-clear").forEach((e) =>
      e.value = ""
    );
  }

  return (
    <>
      <div className="main-container">
        <AssetsResponse />
        <div className="login-box">
          <h5>Assign Employee Assets</h5>
          <form>
            <div className="user-box" >
              {/* <input type="text" name="lname" required id="to-clear" onChange={(e) => handleChange(e)} /> */}
              <select name="packageNumber" id="select-box" onChange={((e) => handleChange(e))}>
                <option value={0}>Please select a company</option>
                <option value={1}>Flagship pioneeringd(HQ)</option>
                <option value={2}>FL-85</option>
                <option value={3}>FL-81</option>
                <option value={4}>FL-90</option>
              </select>

            </div>
            <div className="user-box">
              <input type="text" name="firstName" required value={info.firstName} id="to-clear" onChange={(e) => handleChange(e)} />
              <label className='form-label'>First Name</label>
            </div>
            <div className="user-box" >
              <input type="text" name="lastName" required id="to-clear" value={info.lastName} onChange={(e) => handleChange(e)} />
              <label className='form-label' >Last Name</label>
            </div>
            <div className="user-box" >
              {/* <input type="text" name="lname" required id="to-clear" onChange={(e) => handleChange(e)} /> */}
              <select name="packageNumber" onChange={((e) => handleChange(e))}>
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
                handleChange(date)
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