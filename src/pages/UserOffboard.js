import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const UserOffboard = () => {
    const [catFact, setCatFact] = useState('')

    let { id } = useParams();

    useEffect(() => {
        fetch("https://catfact.ninja/fact")
            .then((e) => e.json())
            .then((e) => setCatFact(e))
    }, [])

    if (catFact === '') {
        return (
            <div className="tochi-div">
                <div class="text-center" >
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div >
            </div>
        )
    } else {
        return (
            // <div className="tochi-div">
            //     <h1>This is the offboard page </h1>
            //     <h1>user is : {id}</h1>
            //     <h1>fact is : {catFact.fact}</h1></div>
            <div className="tochi-div">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Automated Processes
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                            The employee {id} was offboarded. Here are the logs <br/>
                            {catFact.fact}
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                               TO-DO Manually
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                            hey
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        )
    }
}

export default UserOffboard