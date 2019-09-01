import React from 'react';
import './goals.css'
import BasalMetRate from './BasalMetRate';
import CaloricNeeds from './CaloricNeeds';
import IdealWeight from './IdealWeight';


function Goals() {

    return (
    <div className="goals-wrapper">
         <h2 className="goals-header">Goals</h2>
            <div className="goals-container">
                <div className='goals-boxes'>
                    <div className='goals-basal'>
                        <BasalMetRate></BasalMetRate>
                    </div>
                    <div className='goals-caloric'>
                        <CaloricNeeds></CaloricNeeds>
                    </div>
                    <div className='goals-ideal'>
                        <IdealWeight></IdealWeight>
                    </div>
                    <div className="goals-options-container">
                    <div className="goals-options">
                        this is goal option 1 at one pound lost per week
                        <button>Set Goal</button>

                    </div>
                    <div className="goals-options">
                        this is goal option 2 at 1.5 pounds lost per week
                        <button>Set Goal</button>
                    </div>
                    <div className="goals-options">
                        this is goal option 3 at two pounds lost per week
                        <button>Set Goal</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals;