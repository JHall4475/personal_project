import React from 'react';
import './goals.css'
import BasalMetRate from './BasalMetRate';
import CaloricNeeds from './CaloricNeeds';
import IdealWeight from './IdealWeight';
import TimeGoal from './TimeGoal';


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
                    <div className="goals-time-option">
                        <TimeGoal></TimeGoal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals;