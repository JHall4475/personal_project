import React, { Component } from 'react';
import './idealWeight.css';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../../ducks/store';


class IdealWeight extends Component {
    state = {
        selectedOption: "Medium Frame",
        selectedGender: "male",
        heightInches: 0,
        weightMid: 0,
        finalIdWeight: 0,
    };

    onChangeHeight = (e) => {
        this.setState({ heightInches: e.target.value })
    }
    onChangeWeight = (e) => {
        this.setState({ weight: e.target.value })
    }
    handleGenderChange = (e) => {
        this.setState({ selectedGender: e.target.value })
    }
    handelOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value })
    }
    calculateIdealWeight = () => {
        return this.state.selectedGender === "male" ? this.hamwiFormulaMale() : this.hamwiFormulaFemale()
    }
    hamwiFormulaMale = () => {
        let adjHeight = Number(this.state.heightInches - 60)
        let medIdWeight = (106 + (6 * adjHeight))
        this.setState({ weightMid: medIdWeight }, () => {
            this.handleSelectedOption()
        })
    }
    hamwiFormulaFemale = () => {
        let adjFem = Number(this.state.heightInches - 60)
        let medIdWeight = (100 + (5 * adjFem))
        this.setState({ weightMid: medIdWeight }, () => {
            this.handleSelectedOption()
        })
    }

    handleSelectedOption = () => {
        if (this.state.selectedOption === "Large Frame") {
            this.setState(
                { finalIdWeight: Math.round(Number(this.state.weightMid * 1.1)) })
        } else if (this.state.selectedOption === "Small Frame") {
            this.setState({ finalIdWeight: Math.round(Number(this.state.weightMid * 0.9)) })
        } else {
            this.setState({ finalIdWeight: this.state.weightMid })
        }
    }




    render() {
        return (
            <div className="idweight-wrapper">
                <div>IdealWeight</div>
                <div className="box-container">
                    <div className="calc-box">
                        <form>
                            <div className="gender-form">
                                <label>
                                    Male
                                    <input
                                        type="radio"
                                        value="male"
                                        checked={this.state.selectedGender === "male"}
                                        onChange={this.handleGenderChange}
                                    ></input>

                                </label>
                            </div>
                            <div className="gender-form">
                                <label>
                                    Female
                                    <input
                                        type="radio"
                                        value="female"
                                        checked={this.state.selectedGender === "female"}
                                        onChange={this.handleGenderChange}
                                    ></input>
                                </label>
                            </div>
                        </form>

                        <form>
                            Height:
                            <input
                                type='number'
                                title='Height'
                                min="60"
                                max="108"
                                onChange={this.onChangeHeight}
                                value={this.state.heightInches}
                            ></input> (in)
                    <br></br>
                            Frame Size:
                            <label>
                                <select
                                    value={this.state.selectedOption}
                                    onChange={this.handelOptionChange}
                                >
                                    <option>Small Frame</option>
                                    <option>Medium Frame</option>
                                    <option>Large Frame</option>
                                </select>
                            </label>

                        </form>

                        <button onClick={() => this.calculateIdealWeight()}>Calculate</button>

                        <p>Your Ideal Weight is: {this.state.finalIdWeight} lbs</p>
                    </div>
                    <div className="info-box">
                        <p>To calculate a patient's frame size, they must place the thumb and the index finger around the wrist. If the finger overlaps the thumb, the "Small Frame" entry should be used. If the index finger and the thumb touch, the patient has a "Medium Frame". If they do not touch, the patient has a "Large Frame".</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userid: state.userprofile.id,
    }
}

export default connect(mapStateToProps)(IdealWeight);