import React, { useState } from 'react'
import './assets.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import axios from 'axios'

const Assets = () => {
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

  const handlePost = function () {
  
    axios.post("https://vzouk5y25m.execute-api.us-east-1.amazonaws.com/testing/call", info).then((e) => {
      alert(e.data)
    })
    .catch((e) => alert(e.response()))
    


    setInfo({
      firstName: "",
      lastName: "",
      packageNumber: 0,
      purchaseDate: moment(startDate).format('MMM D, YYYY')
    })
    document.querySelectorAll("#to-clear").forEach((e) =>
      e.value = ""
    );
  }

  return (
    <>
      <div className="main-container">
        <header>
        </header>
        <div className="login-box">
          <h5>Assign Employee Assets</h5>
          <form>
          <div className="user-box" >
              {/* <input type="text" name="lname" required id="to-clear" onChange={(e) => handleChange(e)} /> */}
              <select name="packageNumber" onChange={((e) => handleChange(e))}>
                <option value={0}>Please select a company</option>
                <option value={1}>Flagship pioneering(HQ)</option>
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
            <a onClick={handlePost}>
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