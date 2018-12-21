import React, { Component } from 'react';

class BasalMetRate extends Component {


    state = {
        gender: '',
        heightFeet: 5,
        heightInches: 0,
        weight: 0,
        age: 0,
        bmr: 0
    }

    onChangeHeight = (e) => {
        this.setState({heightFeet: e.target.value})
    }
    onChangeInches = (e) => {
        this.setState({heightInches: e.target.value})
    }

    harrisBenedict = () => {
        let feetToInches = (this.state.heightFeet * 12) 
        //function jared function
        let totalHeight = (feetToInches + this.state.heightInches)
        console.log('totalHeight:', totalHeight)
        let totalBMR = (66 + (6.3 * Number(this.state.weight)) + (12.9 * totalHeight) - (6.8 * this.state.age) )
        console.log(totalBMR)
        
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
                            <option defaultValue ="5">5</option>
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
                <button onClick={() => this.harrisBenedict()}>Calculate</button>

            </div>
        )
    }
}

export default BasalMetRate;