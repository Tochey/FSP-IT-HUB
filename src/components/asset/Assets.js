import React, {useState} from 'react'
import './assets.css'

const Assets = () => {
  let userInput;
  const [info, setInfo] = useState({
    fname: null,
    lname: null,
    packageNumber: 0,
    purchaseDate: null
  });


  const handleChange = (e) => {
    e.preventDefault();
    userInput = e.target.value;
    setInfo({
      ...info,
      [e.target.name]: userInput,
    });
  }

  const handlePost = function () {
    // axios.post("/v1/add", info).then((e) => {
    //   alert(e.data)
    // })
      // .catch((e) => alert(e.response.data))

    setInfo({
      fname: null,
      lname: null,
      packageNumber: 0,
      purchaseDate: null
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
          <div className="user-box">
            <input type="text" name="fname" required id="to-clear" onChange={(e) => handleChange(e)} />
            <label>First Name</label>
          </div>
          <div className="user-box" >
            <input type="text" name="lname" required id="to-clear" onChange={(e) => handleChange(e)} />
            <label>Last Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="packageNumber" id="to-clear" required onChange={(e) => handleChange(e)} />
            <label>WFH number </label>
          </div>
          <div className="user-box">
            <input type="text" name="purchaseDate" id="to-clear" placeholder="MM/DD/YY" required onChange={(e) => handleChange(e)} />
            <label>purchase Date </label>
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