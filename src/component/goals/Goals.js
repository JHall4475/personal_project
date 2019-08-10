import React from 'react';
import './goals.css'
import BasalMetRate from './BasalMetRate';
import CaloricNeeds from './CaloricNeeds';
import IdealWeight from './IdealWeight';


function Goals() {

    return (
        <div className="goals-wrapper">
            <div className="goals-container">
                <h2 className="goals-header">Goals</h2>
                <h3 className='goals-quote'>"We are what we repeatedly do. Excellence, then, is not an act but a habit.
<br></br>
                    – Aristotle"</h3>
        <p> Basal Metabolic Rate </p>
                <div className='goals-boxes'>
                    <div className='goals-basal'>
                        <BasalMetRate></BasalMetRate>
                    </div>
                    <div className='goals-caloric'>
                        <CaloricNeeds></CaloricNeeds>
                    </div>
                    <div>
                        <IdealWeight></IdealWeight>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals;