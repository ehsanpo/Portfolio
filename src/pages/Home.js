import React from 'react'
import { getRouteProps } from 'react-static'
import AwardList from '../components/AwardList'
import { Prefetch } from 'react-static'


export default getRouteProps(
	
	class Home extends React.Component {
		render(){
			<Prefetch path='/work' />
			return(
				<div className="about wrapper-m">
					<p>
						{ this.props.HomePage.description } 
					</p>
					<AwardList />
				</div>

			)
		}
	}
);

