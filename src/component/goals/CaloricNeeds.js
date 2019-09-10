import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './caloricNeeds.css'

class CaloricNeeds extends Component {

    state = {
        basalMetRate: 0,
        selectedOption: "male",
        caloricNeeds: 0,
        activityLevel: "1.2",

    }

componentDidMount= () => {
    console.log(this.props.userProfile.bmr)
}

    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value })
    }
    onChangeBasalMetRate = (e) => {
        e.preventDefault()
        this.setState({ basalMetRate: e.target.value })
    }
    onChangeActivityLevel = (e) => {
        this.setState({ activityLevel: e.target.value })
    }
    calculateCalories = () => {
        let bmr = this.props.userProfile.bmr
        console.log("Caloric Needs bmr:", bmr)
        let activity = Number(this.state.activityLevel)
        let calories = Math.round(bmr * activity)
        this.setState({ caloricNeeds: calories })
        axios.post('/api/caloric/post', {
            userId: this.props.userProfile.id,
            calNeeds: calories
        })
        .then((response) => {
            console.log(response.data)
        })
    }

    render() {
        return (
            <div className="cNeeds-wrp">
                <div>Caloric Needs Calulator</div>
                <div className="box-container">
                    <div className="calc-box">
                    <form>
                        <div className="gender-form">
                            <label>
                                Male
                   <input
                                    type="radio"
                                    value="male"
                                    checked={this.state.selectedOption === "male"}
                                    onChange={this.handleOptionChange}
                                ></input>

                            </label>
                        </div>
                        <div className="gender-form">
                            <label>
                                Female
            <input
                                    type="radio"
                                    value="female"
                                    checked={this.state.selectedOption === "female"}
                                    onChange={this.handleOptionChange}
                                ></input>
                            </label>
                        </div>
                    </form>
                    <div>
                        Basal Metablolic Rate:
                    <input
                            value={this.state.basalMetRate}
                            onChange={this.onChangeBasalMetRate}
                        ></input>
                    </div>
                    <form>
                        <label>
                            Activity Level:
                    <br></br>
                            <select
                                value={this.state.activityLevel}
                                onChange={this.onChangeActivityLevel}
                            >
                                <option value="1.2" >Sedentary</option>
                                <option value="1.3">Light</option>
                                <option value="1.55">Moderate</option>
                                <option value="1.8">Heavy </option>
                            </select>

                        </label>
                    </form>
                    <button onClick={() => this.calculateCalories()}>Calculate</button>
                    <br></br>
                        <div>
                            <p>To maintain your current weight you'll need {this.state.caloricNeeds} calories per day</p>
                        </div>
                           
                 </div>
                    <div className="info-box">
                        <p>Activity Level</p>
                        <p>Sedentary: Sitting desk job. Little or no exercise</p>
                        <p>Light: Job where mostly stand or walk. Light exercise 1-3 times a week </p>
                        <p>Moderate: Physical Job (Landscaping, Maintenance, etc) Exercise/sports 3-5 times a week </p>
                        <p>Heavy: Heavy Manual Labor(Construction, Athlete, etc) Hard Exercise min 4 hr day  </p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state) => {
    return{
        userProfile: state.userProfile
    }
}

export default connect(mapStateToProps)(CaloricNeeds);