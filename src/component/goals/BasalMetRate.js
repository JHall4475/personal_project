import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './basalMetRate.css';
import { toast } from 'react-toastify';

class BasalMetRate extends Component {


    state = {
        selectedOption: "male",
        heightFeet: 5,
        heightInches: 0,
        weight: 0,
        age: 0,
        basalMetRate: 0,
        userProfile: [],
    }

    onChangeHeight = (e) => {
        this.setState({ heightFeet: e.target.value })
    }
    onChangeInches = (e) => {
        this.setState({ heightInches: e.target.value })
    }
    onChangeWeight = (e) => {
        this.setState({ weight: e.target.value })
    }

    onChangeAge = (e) => {
        this.setState({ age: e.target.value })
    }
    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value })
    }
    calculateBmr = () => {
        return this.state.selectedOption === "male" ? this.harrisBenedict()
            : this.harrisBenedictFemale()
    }


    harrisBenedict = () => {
        let totalHeight = Number(this.state.heightFeet * 12) + Number(this.state.heightInches)
        let bmr = Math.round(66 + (6.23 * Number(this.state.weight)) + (12.7 * totalHeight) - (6.8 * Number(this.state.age)))
        //add set state to redux?
        this.setState({ basalMetRate: bmr })
        let genderBasal = (this.state.selectedOption === "male" ? "m" : "f")
        axios.post('/api/basal/post', {
            id: this.props.userprofile.id,
            basalMetRate: bmr,
            age: this.state.age,
            height: totalHeight,
            gender: genderBasal,
            currentWeight: this.state.weight,
        })
    }

    harrisBenedictFemale = () => {
        let totalHeight = Number(this.state.heightFeet * 12) + Number(this.state.heightInches)
        let bmr = Math.round(655 + (4.35 * Number(this.state.weight)) + (4.7 * totalHeight) - (4.7 * Number(this.state.age)))
        this.setState({ basalMetRate: bmr })
        let genderBasal = (this.state.selectedOption === "male" ? "m" : "f")
        axios.post('/api/basal/post', {
            id: this.props.userprofile.id,
            basalMetRate: bmr,
            age: this.state.age,
            height: totalHeight,
            gender: genderBasal,
            currentWeight: this.state.weight,
        })
    }



    render() {
        return (
            <div className="basal-wrapper">
                <div className='basal-container'>
                        <div className="calc-box">
                        <div>Basal Metabolic Rate Calculator </div>
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

                    <form>
                        <label>
                            Height in Feet <select
                                value={this.state.heightFeet}
                                onChange={this.onChangeHeight}
                            >
                                <option>4</option>
                                <option defaultValue="5">5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                            </select>
                        </label>

                        <label>
                            Height in Inches <select
                                value={this.state.heightInches}
                                onChange={this.onChangeInches}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                            </select>
                        </label>
                    </form>
                    <div>
                        Weight in Pounds:
                    <input
                            value={this.state.weight}
                            onChange={this.onChangeWeight}
                        ></input>
                    </div>
                    <div>
                        Age: 
                    <input
                            value={this.state.age}
                            onChange={this.onChangeAge}
                        ></input>
                    </div>
                    <button onClick={() => this.calculateBmr()}>Calculate</button>
                    <div>
                        Your BasalMetRate is : {this.state.basalMetRate}
                    </div>
                    </div>
                    <div className="info-box">
                        <div>Basal Metabolic Rate is the number of calories required to keep your body functioning at rest. BMR is also known as your body’s metabolism; therefore, any increase to your metabolic weight, such as exercise, will increase your BMR. To get your BMR, simply input your height, gender, age and weight below. Once you’ve determined your BMR, you can begin to monitor how many calories a day you need to maintain or lose weight.</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userprofile: state.userProfile
    }
}

export default connect(mapStateToProps)(BasalMetRate);