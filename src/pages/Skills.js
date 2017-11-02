import React from 'react'

import chart_data from '../data/skills-data';
import {Radar} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
defaults.global.defaultFontColor = "rgba(255,255, 255, 1)";

export default () => (
        <div>
        <h1>Skills</h1>
            <div className="wrapper-m">
            I'm a self-taught web developer. I do not have any education in the field but my great interest in Tech Industry pushed me to learn everything on the internet.
I gained my skills mostly by watching online videos and tutorials. I begin my journey as Front-end developer and moved to working with backend languages like PHP and Node.js. After working professionally as full-stack, I moved forward to Devop And Sysadmin areas.<br />
I got my AWS Certified Solutions Architect - Associate in oct 2017 and planning to get my developer and security certification by end of the year.<br />
<br />
Its hard for me to convey my level of skill in a variety of fields on one page. Therefore the main purpose of the charts are not to show you my overall skill in each program, but rather to display my fluency in comparison to similar systems and programs. So that you can get an picture of my strongest sides.

            </div>
            <div className="col2">
              
              <Radar data={chart_data.dataFE}  options={chart_data.dataOptions }/>
              <Radar data={chart_data.dataDesign}  options={chart_data.dataOptions }/>
              <Radar data={chart_data.dataBE}  options={chart_data.dataOptions }/>
              <Radar data={chart_data.dataDevop}  options={chart_data.dataOptions }/>
              
            </div>

          

        </div>
)
