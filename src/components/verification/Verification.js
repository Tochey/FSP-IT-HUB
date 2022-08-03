import React, { useEffect, useState } from 'react'
import './verification.css'

const Verification = () => {
  const [state, setstate] = useState([])

  useEffect(() => {
    fetch("api/v1/verify/messages")
      .then((e) => e.json())
      .then((e) => setstate(e))
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
              <td>{e.time}</td>
              <td>{e.possibleSender}</td>
              <td>{e.message}</td>
            </tr>
          ).reverse()}
        </table>
      </div>
    </>
  )
}

export default Verification