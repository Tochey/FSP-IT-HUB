import React, { useEffect, useState } from 'react'
import './verification.css'

const Verification = () => {
  const [state, setstate] = useState([])

  useEffect(() => {
    fetch("https://870qyg9x52.execute-api.us-east-1.amazonaws.com/test/getallmessages")
      .then((e) => e.json())
      .then((e) => setstate(e.Items))
  }, [])

  

  return (
    <>
      <div className='table-div'>
        <table id="customers">
          <tr>
            <th>Date/Time</th>
            <th>Sender</th>
            <th>Message</th>
          </tr>

          {state.map((e) =>
            <tr>
              <td>{e.date}</td>
              <td>{e.sender}</td>
              <td>{e.message}</td>
            </tr>
          )}
        </table>
      </div>
    </>
  )
}

export default Verification