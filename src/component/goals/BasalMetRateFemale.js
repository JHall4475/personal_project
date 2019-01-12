import React, { Component } from 'react';

class BasalMetRateFemale extends Component {


    state = {
        gender: 'Female',
        heightFeet: 5,
        heightInches: 0,
        weight: 0,
        age: 0,
        basalMetRate: 0
    }

    onChangeHeight = (e) => {
        this.setState({heightFeet: e.target.value})
    }
    onChangeInches = (e) => {
        this.setState({heightInches: e.target.value})
    }
    onChangeWeight = (e) => {
        this.setState({weight: e.target.value})
    }

    onChangeAge = (e) => {
        this.setState({age: e.target.value})
    }

    harrisBenedict = () => {
       let totalHeight = Number(this.state.heightFeet * 12) + Number(this.state.heightInches)
       console.log(totalHeight)
       console.log(6.23*Number(this.state.weight))
       console.log(12.7 * totalHeight)
       let bmr = 655+(4.35*Number(this.state.weight))+(4.7 * totalHeight) - (4.7 * Number(this.state.age))
        console.log(bmr)
        
        let roundedBMR = Math.round(bmr)
        this.setState({basalMetRate: roundedBMR})
    }


    render() {
        return (
            <div>
               
               <p>Female</p>
               
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
                <input
                value={this.state.weight}
                onChange={this.onChangeWeight}
                ></input>
                <br></br>
                Age
                <input
                value={this.state.age}
                onChange={this.onChangeAge}
                ></input>

                <br></br>
                <button onClick={() => this.harrisBenedict()}>Calculate</button>
            <div>Your BasalMetRate is : {this.state.basalMetRate}</div>

            </div>
        )
    }
}

export default BasalMetRateFemale;