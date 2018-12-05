import React, { Component } from 'react';

class BasalMetRate extends Component {


    state = {
        gender: '',
        heightFeet: 5,
        heightInches: '',
        weight: '',
        age: ''
    }

    onChangeHeight = (e) => {
        this.setState({heightFeet: e.target.value})
    }
    onChangeInches = (e) => {
        this.setState({heightInches: e.target.value})
    }


    render() {
        return (
            <div>
                BasalMetRate
                <br></br>
                <input
                    value={this.state.gender}
                    placeholder="gender?"
                ></input>
                <br></br>
                <form>
                    <label>
                        Height in Feet
                        <select
                        value={this.state.heightFeet}
                        onChange={this.onChangeHeight}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option selected value="5">5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                    </label>
                    <label>
                        Height in Inches
                        <select 
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
                <br></br>
                Weight in Pounds
                <input></input>
                <br></br>
                Age
                <input></input>

                <br></br>
                <button>Calculate</button>

            </div>
        )
    }
}

export default BasalMetRate;