import React, {Component} from 'react';
import './idealWeight.css';
import {connect} from 'react-redux';
import axios from 'axios';
import store from '../../ducks/store';


class IdealWeight extends Component{
    state={

    };

    componentDidMount= () => {
        // console.log("ideal weight entries:", this.props.weightEntries.slice(-1))
        console.log("ideal weight userID:", this.props.userid)
        // this.getLastWeight()
        
       
    
    }

  

render(){
        return(
            <div>
                <h3>IdealWeight</h3>
                <div></div>
                Weight: 
                <input
                // onChange={}
                // value={}
                type='number'
                title='Weight'
                ></input>

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

                <p>Your Ideal Weight is: {215}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userprofile: state.userProfile,
        weightEntries: state.weightEntries,
        userid: state.userprofile.id,
        lastWeight: state.lastWeight[0]
    }
}

export default connect(mapStateToProps) (IdealWeight);