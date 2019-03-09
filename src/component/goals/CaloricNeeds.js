import React, {Component} from 'react';

class CaloricNeeds extends Component {

state = {
    basalMetRate: 0,
    selectedOption: "male",
    caloricNeeds: 0,
    activityLevel: "1.2",

}

handleOptionChange = (e) => {
this.setState({selectedOption: e.target.value})
}

 onChangeBasalMetRate= (e) => {
     e.preventDefault()
     this.setState({basalMetRate: e.target.value})
 }

 onChangeActivityLevel= (e) => {
     this.setState({activityLevel: e.target.value})
 }

 calculateCalories = () => {
     let bmr = this.state.basalMetRate
     let activity = Number(this.state.activityLevel)
     let calories = Math.round( bmr * activity)
     this.setState({caloricNeeds: calories})
 }



render(){
    return(
        <div>
            <div>Caloric Needs Calulator</div>
            <form>
               <div className="gender-form">
               <label>
                   Male
                   <input
                   type="radio"
                   value= "male"
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
                        <option value="1.2" >Sedentary: Sitting desk job. Little or no exercise</option>
                        <option value="1.3">Light: Job where mostly stand or walk. Light exercise 1-3 times a week</option>
                        <option value="1.55">Moderate: Physical Job (Landscaping, Maintenance, etc) Exercise/sports 3-5 times a week</option>
                        <option value="1.8">Heavy: Heavy Manual Labor(Construction, Athlete, etc) Hard Exercise min 4 hr day  </option>
                    </select>

                </label>
            </form>
            <button onClick={()=> this.calculateCalories()}>Calculate</button>
            <br></br>
            <div>To maintain your current weight you'll need {this.state.caloricNeeds} calories per day</div>
        </div>
    )
}
}

export default CaloricNeeds;