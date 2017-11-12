import React from 'react';
import { getRouteProps, Link, NavLink} from 'react-static';

import {Radar} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
defaults.global.defaultFontColor = "rgba(255,255, 255, 1)";

const bgcolor= "rgba(254, 48, 72, 0.2)";
const borderColor = "rgb(254, 255, 255)";

const options = {

    scale: {

    ticks:  {
        showLabelBackdrop: true,
        backdropColor: "rgba(255,255,255,1)",
        fontColor: "#ff0000",
        backgroundColor: "#000000",
        beginAtZero: true,
        min: 0,
        max: 10,
        stepSize: 2},
    pointLabels: {fontSize: 13,fontFamily: 'lingua-r'},
    gridLines:{color:"rgba(255,255,255,0.7)"}



    },
    pointLabelFontColor : "rgba(255,255,255,1",

    legend: {
        labels: {
            fontColor: "white",
        }
    },
    angleLines:{color: "white"}



};


class Skills extends React.Component {


  constructor(props) {
    super(props);

    const return_array = this.chart_data_maker();

     this.state = {
      chart_data:return_array['Overall']
    };

    this.handleClick = this.handleClick.bind(this);
    this.chart_data_maker= this.chart_data_maker.bind(this);

  }

handleClick(chart_op,e){

    const  return_array = this.chart_data_maker();  
    var list = document.getElementsByTagName("button");
    for (var i = 0; i < list.length; i++) {
      list[i].classList.remove("active" , "Overall");

    
    }
    e.target.classList.add("active");
      
    this.setState({
     chart_data: return_array[chart_op]
    });

 }

chart_data_maker(){

    let return_array = [];
    let slug;
    let skill;

    for (var i = 0; i < this.props.skills.length; i++) {
      skill = this.props.skills[i];
      slug = skill.slug;
      
      return_array[slug] = {
      labels: skill.labels,
      datasets: [{
         label: skill.slug,
          data: skill.data,
          pointBackgroundColor: "rgba(254, 48, 72, 1)",
          pointHoverRadius: 5,
          borderWidth: 1,
          fill:true,
          scaleStartValue: 0,
          backgroundColor:bgcolor,
          borderColor:borderColor,
      }]
      } 
    }
  return return_array;
}

  render(){
    return(
        <div>
        <h1>Skills</h1>
        
            <div className="col2 col2-1">

              <div>
                <p>
                  { this.props.SkillsPage.description } 
                </p>
              </div>

              <div className="radar-right">
                  {this.props.skills.map( skill => (
                     
                     <button className={skill.slug} onClick={(e) => { this.handleClick(skill.slug,e) }} key={skill.slug}> {skill.slug} </button> 
                  ))}
                  <div className="radarholder">
                       <Radar data={ this.state.chart_data }  options={options}/>
                  </div>
                      
                 
              </div> 



            </div>
            
          
        </div>

      )
  }



}

export default getRouteProps(Skills);
