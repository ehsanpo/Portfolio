/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps} from 'react-static';

export default getRouteProps(
	
	class Music  extends React.Component {
		render(){
			return(
				<div>
					<h1>Music</h1>
					<p>
						{ this.props.MusicPage.description } 
					</p>
					<iframe width="100%" height="600" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/62694&amp;color=%23fe3048&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
				</div>

			)
		}
	}
);
