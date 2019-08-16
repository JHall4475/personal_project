import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import WeightDisplay from '../weight/WeightDisplay';
import './weight.css';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import { connect } from 'react-redux';

class Weight extends Component {


    deleteWeightEntry = (id) => {
        console.log(id)
        axios.delete(`/api/weight/${id}`)
            .then((response) => {
                console.log(response.data)
            })
    }

    render() {
        const options = {
            annotation: {
                annotations: [{
                    drawTime: 'afterDatasetsDraw',
                    borderColor: 'red',
                    borderDash: [2, 2],
                    borderWidth: 2,
                    mode: 'vertical',
                    type: 'line',
                    value: 10,
                    scaleID: 'x-axis-0',
                }]
            },
            maintainAspectRation: false
        }
        const data = {
            labels: this.props.date,
            datasets: [{
                label: "Weight Entry Log",
                backgroundColor: 'rgb(95, 158, 160)',
                borderColor: '#494949',
                data: this.props.weight
            }]
        }
        return (
            <div className='weightpg-wrapper'>
                <h2 className='weight-header'>Weight Log</h2>
                    <div className='weightpg-container'>
                <div className="graph-container">
                    <Line
                        data={data}
                        width={500}
                        height={500}
                        options={options}
                    />
                </div>
                <div className="weight-entries-container">
                    {this.props.weightEntries.map(entries => {
                        return (
                            <div key={entries.id + entries.date}>
                                <div className="weight-display-kernel">
                                    <WeightDisplay
                                        date={entries.date}
                                        weight={entries.weight}
                                        deleteWeightEntry={() => this.deleteWeightEntry(entries.entry_number)}
                                    ></WeightDisplay>
                                </div>
                            </div>
                                )
                     })}
                       <Link className="component-link" to='/wizard'>
                        <p>Add Weight Entry</p>
                    </Link>
                </div>
                  


                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        userprofile: state.userProfile,
        userid: state.userprofile.id,
        weightEntries: state.weightEntries,
        date: state.date,
        weight: state.weight
    }
}

export default connect(mapStateToProps)(Weight);



//export default withRouter(Weight);