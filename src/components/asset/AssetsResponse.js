import React, { useState, useEffect } from 'react'


const AssetsResponse = () => {

  const [state, setState] = useState([])
  const [count, setCount] = useState()
  useEffect(() => {
    fetch(process.env.REACT_APP_AG_GET_ASSET_HISTORY)
      .then((e) => e.json())
      .then((e) => {
        setState(e.Items)
        setCount(e.Count)
      })


  }, [])

  return (
    <>
        <header>
        </header>
        <div className="login-box2">
          <h5>Recently Assigned ({count}) </h5>

          <div className='mini-child'>
            {state.map((e) => 
          <div className='asset-history'>
            <p>Employee:<span>{e.employee.S}</span></p>
            <p>Package: <span>{e.package.S}</span></p>
            <p>Status : <span>{e.status.S}</span></p>
            <p>Date : <span>{e.date.S}</span></p>
          </div>
            )}
          </div>
        </div>


    </>



      )
}

      export default AssetsResponse