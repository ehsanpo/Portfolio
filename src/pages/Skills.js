import React from 'react'
console.log('top')
console.log(chart_data);


import chart_data from '../data/skills-data';
import {Radar} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
defaults.global.defaultFontColor = "rgba(255,255, 255, 1)";

//chart_data.dataALL2 = chart_data.dataALL;
console.log('outer')
console.log(chart_data);


class Skills extends React.Component {


  constructor(props) {
    super(props);

    console.log('const')
    console.log(chart_data);
    chart_data.dataALL2 = chart_data.dataALL;

    chart_data.dataALL2.labels = ['changed', "changed"];

    this.state = {
      chart_data_state:chart_data.dataALL
    };

    this.handleClick = this.handleClick.bind(this);

  }


  handleClick(chart_op){


let chart_data_load  ;

switch (chart_op) {
  case 'FE':
    chart_data_load= chart_data.dataFE;
    break;
  case 'BE':
    chart_data_load= chart_data.dataBE;
    break;
  case 'DE':
    chart_data_load= chart_data.dataDesign;
    break;
  case 'DEV':
     chart_data_load = chart_data.dataDevop;
    break;
  default:
    chart_data_load =chart_data.dataALL2;

}


     this.setState({
     chart_data_state: chart_data_load
    });


     console.log(chart_data);

 



 }


  render(){

    return(
        <div>
        <h1>Skills</h1>
            <div>
            <div className="col2 col2-1">

              <div>
              <p>
                I gained my skills mostly by watching online videos and tutorials. I begin my journey as Front-end developer and moved to working with backend languages like PHP and Node.js. After working professionally as full-stack, I moved forward to Devop And Sysadmin areas.<br />
                I got my AWS Certified Solutions Architect - Associate in oct 2017 and planning to get my developer and security certification by end of the year.<br />
                <br />
                Its hard for me to convey my level of skill in a variety of fields on one page. Therefore the main purpose of the charts are not to show you my overall skill in each program, but rather to display my fluency in comparison to similar systems and programs. So that you can get an picture of my strongest sides.
                </p>
                <p>I'm a self-taught web developer. I do not have any education in the field but my great interest in Tech Industry pushed me to learn everything on the internet.</p>

              </div>

              <div>
              <button onClick={() => { this.handleClick('FE') }}>
                  Front-end
              </button>
               <button onClick={() => { this.handleClick('BE') }}>
                  backend
              </button>
               <button onClick={() => { this.handleClick('DE') }}>
                  Design
              </button>
              <button onClick={() => { this.handleClick('DEV') }}>
                  Devop
              </button>
                 <button onClick={() => { this.handleClick('ALL') }}>
                  Overall
              </button>
              <div className="radarholder">
                  
              </div>
              <div dataext={ this.state.chart_data_state } ></div>

               
              </div> 



            </div>
            
            </div>
        </div>

      )
  }



}

export default Skills;