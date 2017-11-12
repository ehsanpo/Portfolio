/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Link, NavLink} from 'react-static'
import Project from 'components/Project'

class ProjectList  extends React.Component {
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
    return(
        <div className="projectlist">
        <h1>Selected Projects</h1>
          <ul>
            {this.props.posts.map(post => (
                 <li key={post.name} ><Project client={post} slug="list" /></li>
            ))}
          </ul>
        </div>
    )
  }
}

export default getRouteProps(ProjectList)
