/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Link, NavLink} from 'react-static'
import Project from 'components/Project'

class ProjectList_Singel  extends React.Component {
  constructor(props) {
    super(props);
    const type  = this.props.slug 
    const posts = this.props.posts



    this.state = {
      type:type,
      rev2:[],
    };
  }
  render(){
  	 const post = this.props.post;
    return(
      <div className="singel-project">
        <Project client={post} key={post.name} slug="singel" />
     </div>  

    )
  }
}

export default getRouteProps(ProjectList_Singel)
