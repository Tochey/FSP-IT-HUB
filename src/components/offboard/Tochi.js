import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Tochi = () => {
  const [catFact, setCatFact] = useState('')

  let { id } = useParams();

useEffect(() => {
  fetch("https://catfact.ninja/fact")
  .then((e) => e.json())
  .then((e) => setCatFact(e))
}, [])

    

  return (
    <div className = "tochi-div"><h1>user is : {id}</h1>
    <h1>fact is : {catFact.fact}</h1></div>
  )
}

export default Tochi