import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import WeightDisplay from '../weight/WeightDisplay';
import './weight.css';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

class Weight extends Component {
    
    state = {
        weightEntries: [],
        date:[],
        weight:[],
      
    }

    componentDidMount = () => {
        this.getWeightEntries()
   // this.getLabels()
    }

  

    getWeightEntries = () => {
        axios.get('/api/weight/entries')
            .then(entries => {
                console.log('weight entries:', entries)
                this.setState({ weightEntries: entries.data
                }, () => {this.getLabels();})
            })
            
            
    }
   
   
    getLabels= () => {
      const  finalArray = this.state.weightEntries.map( function(label){
            return label.date
        })
        const finalWeight = this.state.weightEntries.map(function(yaxis){
            return yaxis.weight
        })
        this.setState({date: finalArray,
        weight: finalWeight
        })
    }
    
   


    deleteWeightEntry = (id) => {
        console.log(id)
        axios.delete(`/api/weight/${id}`)
            .then((response) => {
                console.log(response.data)
            })
    }
onClickGraph=()=>{
    this.getLabels()
    
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
        const  data={   
            labels: this.state.date,
            datasets:[{
            label: "Weight Entry Log",
            backgroundColor: 'rgb(95, 158, 160)',
            borderColor: '#494949',
            data: this.state.weight
            }]
        }
        return (
            <div className='weightpg-wrapper'>
                <div className='weightpg-container'>Current Weight Log
        <br></br>
        <Line
                                data={data}
                                width={500}
                                height={500}
                                options={options}
                                />
                    {this.state.weightEntries.map(entries => {
                        return (
                            <div key={entries.id + entries.date}>
                                <WeightDisplay
                                    date={entries.date}
                                    weight={entries.weight}
                                    deleteWeightEntry={() => this.deleteWeightEntry(entries.entry_number)}
                                ></WeightDisplay>
                            </div>
                        )
                    })}
                    <Link className="component-link" to='/wizard'>
                        <p>Add Weight Entry</p>
                    </Link>
                   
                                 {/* <button onClick={this.onClickGraph}>Show Graph</button>    */}
                               

                </div>
            </div>
        )

    }
}

export default withRouter(Weight);