/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Instagram from 'components/Instagram'
import { getRouteProps } from 'react-static'

export default getRouteProps(
	
	class About extends React.Component {
		render(){
			return(
				<div>
			        <h1>About Ehsan</h1>
				        <div className="col2 col2-1">
				       		<div className="about ">
				        		<p>{ this.props.AboutPage.description } </p>
				        	</div>
				        <div className="portratt"><img src="/img/ehsan.jpg" /></div>
				        </div>
					 <h2>Follow me on instagram @ehsaanpo</h2>
			 		 <Instagram />
				</div>

			)
		}
	}
);
