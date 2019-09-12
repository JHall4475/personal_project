import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import WeightDisplay from '../weight/WeightDisplay';
import './weight.css';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import { connect } from 'react-redux';

class Weight extends Component {


    deleteWeightEntry = (id) => {
        axios.delete(`/api/weight/${id}`)
            .then((response) => {
            })
    }

    render() {
        const options = {
            scales: {
                xAxes: [{
                    type: 'time',
                    display: true,
                    distribution: 'series',
                    bounds:'data',
                     position: 'bottom',
                    ticks:{
                        reverse: false,
                        source: 'data',
                    },
                    time:{
                        displayFormats:{
                            'millisecond': 'MM/DD/YY',
                            'second': 'MM/DD/YY',
                            'minute': 'MM/DD/YY',
                            'hour': 'MM/DD/YY',
                            'day': 'MM/DD/YY',
                            'week': 'MM/DD/YY',
                            'month': 'MM/DD/YY',
                            'quarter': 'MM/DD/YY',
                            'year': 'MM/DD/YY'  
                        }
                    }  
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                    },
                    bounds: 'data',
                }],
            },            
            annotation: {
                annotations: [{
                    drawTime: 'afterDatasetsDraw',
                    borderColor: 'red',
                    borderDash: [2, 2],
                    borderWidth: 2,
                    mode: 'vertical',
                    type: 'time',
                    value: 10,
                    scaleID: 'x-axis-0',
                }]
            },
            maintainAspectRatio: false,
            responsive: true
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
                            <div key={entries.entry_number}>
                                
                                <div className="weight-display-kernel">
                                    <WeightDisplay
                                        date={entries.date}
                                        weight={entries.weight}
                                        timeStamp={entries.time_stamp}
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
        userid: state.userProfile.id,
        weightEntries: state.weightEntries,
        date: state.date,
        weight: state.weight
    }
}

export default connect(mapStateToProps)(Weight);
