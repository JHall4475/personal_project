import React from 'react';
import { Link } from 'react-router-dom';
import './goals.css'
import BasalMetRate from './BasalMetRate';
import CaloricNeeds from './CaloricNeeds';


function Goals() {

    return (
        <div className="goals-wrapper">
            <div className="goals-container">
                <h2 className="goals-header">Goals</h2>
                <h3 className='goals-quote'>"We are what we repeatedly do. Excellence, then, is not an act but a habit.
<br></br>
                    – Aristotle"</h3>
                {/* <Link className="component-link" to="/basalmetrate">
        <p> Basal Metabolic Rate </p>
        </Link> */}
                <div className='goals-boxes'>
                    <div className='goals-basal'>
                        <BasalMetRate></BasalMetRate>
                    </div>
                    <div className='goals-caloric'>
                        <CaloricNeeds></CaloricNeeds>
                    </div>
                </div>
                {/* <Link className="component-link" to="/caloricNeeds"><p>Caloric Needs</p></Link> */}
                {/* <Link className="component-link" to="/idealWeight"><p>Ideal Weight</p></Link> */}
            </div>
        </div>
    )
}

export default Goals;