import React, { useEffect, useState } from 'react'
import './verification.css'

const Verification = () => {
  const [state, setstate] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_AG_GET_ALL_MESSAGES)
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
              <td>{e.date.S}</td>
              <td>{e.sender.S}</td>
              <td>{e.message.S}</td>
            </tr>
          )}
        </table>
      </div>
    </>
  )
}

export default Verification