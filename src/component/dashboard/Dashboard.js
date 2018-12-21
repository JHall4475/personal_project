import React, {Component} from 'react';
import Nav from '../../../src/component/nav/Nav';
import route from '../../../src/route';
import './dashboard.css'


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">

                <div>Profile Pic</div>
                <div>Weight Entries</div>
                
            </div>
        )
    }
}

export default Dashboard;