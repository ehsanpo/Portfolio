/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Link, NavLink } from 'react-static'


class Project  extends React.Component {
  constructor(props) {
    super(props);



  const type =  this.props.slug;
  const client = this.props.client;


    this.state = {
      client: client,
      type:type,
      rev2:[],
    };
  }


    componentDidMount() {
       window.scrollTo(0, 0);
       if (this.state.type !=="list") {
            
        
          let node;
          let i = 0;
          for (var ref in this.refs) {
            i++
            node = this.refs[ref];
            this.revealFx(node,i,true);
            
          }

        }
        else{
          let that = this;
          let node;
          let i = 0;
          
          for (ref in this.refs) {
            i++
            node = this.refs[ref];
            if (i <= 3) {
              
              this.revealFx(node,i,true);
            }
            else{
              // let the_rev = that.revealFx(node,i,false);

              // let scrollElemToWatch_1 = node , 
              // watcher_1 = window.scrollMonitor.create(scrollElemToWatch_1, 100);
              // watcher_1.enterViewport(function() {
              //    the_rev.reveal();
              //    watcher_1.destroy();
                 
              // });
            }
          }


      }

      
    }

    revealFx (el, i,reveal) {
        let rev =[];
        let direction = 'lr';
        if (i  % 2 === 0) {
          direction = 'rl';
        }
        rev[i] = new window.RevealFx(el, {
              revealSettings : {
                bgcolor: "#FE3048",
                direction: direction,
                duration: 80 + (i *100),
                onCover: function(contentEl, revealerEl) {
                  contentEl.style.opacity = 1;

                }
              }
            });
        if (reveal) {
          rev[i].reveal();
        }
        else{
          return  rev[i];
        }

      
    }

 render_list(client){

    return(
        <div className="project rellax" data-rellax-speed="3">
           <div className="col2">
              <div>
                  <NavLink to={'/work/' + client.slug }><h2 ref="title">{client.name}</h2></NavLink>
                  <div className="desc" ref="role"> {client.description}</div>
              </div>
              <div className="p_image ">
                <NavLink to={'/work/' + client.slug } >
                  <div ref="image">
                    <img src={"/img/" +  client.img[0]}  />
                    </div> 
              </NavLink>
             </div> 
           </div> 
       </div>
     )
  }
  
  render_singel(client){
    return(
      <div className="project" >
         <div className="col2">
           <div>
                <h2 ref="title">{client.name}</h2>
                 
                <div ref="desc" >{client.description} </div>
                <div className="role" ref="role">{client.role}</div>
                <div className="stack" ref="stack">{client.stack}</div>
                <div ref="images">
                <a  href={ client.website }>{ client.website }</a>

                </div>
           </div>
          <div></div>
           <div ref="long_desc" className="long_desc" >
             {client.long_desc} <br />
             
           </div>
         
         </div>

            <div className="p_image">
           { client.top_video &&
            <iframe type="text/html" width="640" height="675" src={ "https://www.youtube.com/embed/" +  client.top_video} frameBorder="0"></iframe>
            }
              {client.img.map(function(image, i){
                return <img  src={"/img/" +  image} />
               })}
            { client.end_video &&
            <iframe type="text/html" width="640" height="675" src={ "https://www.youtube.com/embed/" +  client.end_video} frameBorder="0"></iframe>
            }
           </div> 
     </div>  
     )
  }
  render() {
    const client = this.state.client;

    
      if (this.props.slug ==="list") {
          return  this.render_list(client);
      }
      else{
          return  this.render_singel(client);
      }
    
  }
}


export default getRouteProps(Project)
