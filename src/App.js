import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'

import all_clients from './Clients'
import chart_data from './About-data';

import logo from './logo.svg';
import './App.css';
import Instafeed from 'react-instafeed';

import {Radar} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.global.defaultFontColor = "rgba(255,255, 255, 1)"


class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <HeaderComp />
         <div className="wrapper">
          <Switch>
            <Route path="/work/:slug" component={ Project} />
            <Route path="/work" component={ ProjectList } />
            <Route path="/music" component={  MusicList } />
            <Route path="/skills" component={  SkillList } />

            <Route path="/about" component={ About } />
            <Route ecxat path="/" component={ Home} />
            <Route component={ NotFound } />
          </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    
    );
  }
}

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)


const  HeaderComp = () => (
            <header className="wrapper center">
                <NavLink exact to="/" activeClassName="active-logo" ><img width="140" src={logo} alt="Ehsan Pourhadi" className="logo" /></NavLink>
                <h1>Ehsan Pourhadi  <span>Creative Developer</span> </h1>
                <nav>
                    <ul>
                        <li>
                         <NavLink to="/work">Work</NavLink>
                        </li>
                         <li>
                         <NavLink to="/skills">Skills</NavLink>
                        </li>
                        <li>
                         <NavLink to="/music">Music</NavLink>
                        </li>
                        <li>
                          <NavLink to="/about">About</NavLink>
                        </li>
                       
                    </ul>
                </nav>
            </header>
  )


const  Home  = () => (
                        <div className="about wrapper-m">
                            I’m Ehsan Pourhadi, A Web developer, Designer and Producer providing digital solutions. I’m based In Malmö, Sweden and currently work at <a href="http://gutsglory.se/">Guts & Glory</a>, creating valuable websites & digital solutions.<br /><br />
                            <AwardList />

                        </div>
  )   

const  About = () => (
                        <div>
                        <div className="col2 col2-1">
                          
                        <div className="about ">
                            I’m <span className="red">Ehsan Pourhadi</span>, A Web developer, Designer and Producer providing digital solutions. I’m based In Malmö, <span className="red">Sweden</span> and currently work at <a href="http://gutsglory.se/">Guts & Glory</a>, creating valuable websites & digital solutions.<br /><br />

                            I specialize in web development, LAMP/LNMP Stacks and Wordpress, Drupal, Laravel. In addition, I have extensive knowledge in user interface design, logo/identity production as well as search engine optimization. Furthermore, I also have an immense knowledge within multimedia and mobile development alongside a few other technical skills.<br /><br />

                            I’m always in the search for different concepts, platforms and techniques that I can utilize in order to obtain a much richer and innovative multimedia experience.
                          
                        </div>
                        <div className="portratt"><img src="/img/ehsan.jpg" /></div>
                        </div>


                            <Instagram />

                        </div>
  )   

const SkillList   = () => (
            <div>
        
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



const  ProjectList  = () => (
             <div className="projectlist">            
                  <ul>
                    { Object.keys(all_clients).map((k, index) => (
                     <li>
                        <Project slug={all_clients[k].slug} posetion={index} key={index}/>
                     </li>
                     )

                     ) }
                  </ul>

            </div>
  )


const  MusicList  = () => (
             <div>
             <p>
               Since the birth of my cognitive ability, music has been an essential part of my life. So naturally, I tried to make music using anything around me. <br /> Now that I can make music, my goal is simple; I want to share my music with the world and can communicate with you through this remarkable medium.<br /> Lets build something together! 
             </p>
                <iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/62694&amp;color=%23fe3048&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
            </div>
  )


const  Footer  = () => (
      <footer className="wrapper col3">
        <div>
          <h2>Get in touch</h2>
          <ul className="socialicons">
            <li><a className="social-linkedin" target="_blank" href="https://www.linkedin.com/in/ehsanp/"></a></li>
            <li><a className="social-twitter" target="_blank" href="https://twitter.com/ehsanpo"></a></li>
            <li><a className="social-soundcloud" target="_blank" href="http://soundcloud.com/eprumental"></a></li>
          </ul>

        </div>
        <div>
          <h2>Contact info</h2>
          <a target="_blank" href="mailto:hi@ehsan-pourhadi.com"> hi@ehsan-pourhadi.com </a><br />
          072 006 27 97

        </div>
        <div >
          <h2>About this site</h2>
          <p>This is the portfolio of Ehsan Pourhadi.
          Developer, producer &amp; graphic desginer based in Malmö, Sweden.
          </p>
        </div>
      </footer>
  )

class Instagram extends React.Component {



render(){
  const instafeedTarget = 'instafeed';
   return (
     <div id={instafeedTarget}>
      <Instafeed
        limit='4'
        ref='instafeed'
        resolution='low_resolution'
        sortBy='most-recent'
        target={instafeedTarget}
        template=''
        userId='300129657'
        clientId='d845b51caa6f4051b269ea9a5a96b4ba'
        accessToken='300129657.1677ed0.7e4241c91daa4aef972e750100147086'
      />
    </div>
    )
}

}

class Award  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isFirst:false,
      rev: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

  }

 componentDidMount() {
  let node;
  let i = 0;

          for (var ref in this.refs) {

            i++

            node = this.refs[ref];

            this.revealFx(node,i,false);
            
          }

 }
  revealFx (el, i,reveal) {

        let rev =[];
        let direction = 'tb';
        rev[i] = new window.RevealFx(el, {
              revealSettings : {
                bgcolor: "#FE3048",
                direction: direction,
                duration: 180,
                onCover: function(contentEl, revealerEl) {
                  contentEl.style.opacity = 1;

                }
              }
            });
        if (reveal) {
          rev[i].reveal();
          this.setState({rev:rev[i]}) 
        }
        else{
          this.setState({rev:rev[i]})  ;
        }

      
    }


  handleClick(){
   const rev = this.state.rev;
   const isToggleOn = this.state.isToggleOn;
 
          !isToggleOn && rev.reveal();
          isToggleOn && rev.reveal({

                bgcolor: '#FE3048',
                direction: "bt",
                duration: 180,
                onCover: function(contentEl, revealerEl) {
                  contentEl.style.opacity = 0;

                }
                
              }

            );
  

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));


 

  }

  render(){

    return(
            <div >
               <img  onClick={this.handleClick } src={this.props.imgsrc} />
                <h3  onClick={this.handleClick }> {this.props.text}</h3>
                <div ref="image"  className={ this.state.isToggleOn ? 'desc-ON' : 'desc-OFF'}>
                  {this.props.desc}
                  {this.props.linkto &&  <NavLink to= { "/work/" + this.props.linkto }>View Project</NavLink>}
                 
                </div>

            </div>

      )
  }

  }

const  AwardList  = () => (
            <div className="col4 awardlist">
              <Award linkto="toolpool" imgsrc="/img/guldagg.png"  text="Guldägget" desc={<p>Gold Category PR<br />Silver Category Digital<br/>Silver Category Alternative Media</p>}/>
              <Award linkto="toolpool" imgsrc="/img/cannen.png"  text="Cannes lions" desc={<p>Silver Lion in Promo &amp; Activation<br/>Bronze Lion in Cyber <br/>Shortlist in Media</p>}/>
              <Award linkto="malmo-saluhall" imgsrc="/img/svenskadesign.png"  text="Svenska Designpriset " desc={<p>Gold Category Digital Design</p>}/>
              <Award imgsrc="/img/award.png"  text="Other Awards" desc={
              <p>
              Epica Awards : Bronze in PR<br />
              Tomorrow Awards: 1 Shortlist<br />
              Eurobest 13: Bronze in Interactive<br />
              Spinn 13: Gold Consumer Campaign<br />
              100 Wattaren: Gold (100w) under "SMART" category 
              </p>
              }/>
            </div>
  )
const Certification = () =>(
  <div className="center">
    <img src="/img/cert.png"  alt="AWS Certified Solutions Architect - Associate" width="100" />
    </div>
  )

class Project  extends React.Component {
  constructor(props) {
    super(props);


  const slug  = this.props.slug  ?  this.props['slug'] : this.props.match.params.slug ;
  const type  = this.props.slug  ?  "singel" : "list" ;
 
  const client = all_clients.find(c => c.slug === slug);

    this.state = {
      client: client,
      type:type,
      rev2:[],
    };
  }


    componentDidMount() {
       
       if (this.state.type ==="list") {
            window.scrollTo(0, 0);
            if (document && document.body) {
            var orig = document.body.className;
            document.body.className = orig + (orig ? ' ' : '') + this.state.client.properties.className;
            }
                        let node;
          let i = 0;
          for (var ref in this.refs) {
            i++
            node = this.refs[ref];
            this.revealFx(node,i,true);
            
          }

        }
        else{
          const posetion = this.props.posetion;
          let that = this;
          let node;
          let i = 0;
          for (ref in this.refs) {
            i++
            node = this.refs[ref];
            if (posetion === "0"  || posetion  === "1" || posetion==="2") {
              
              this.revealFx(node,i,true);
            }
            else{
              let the_rev = that.revealFx(node,i,false);

              let scrollElemToWatch_1 = node , 
              watcher_1 = window.scrollMonitor.create(scrollElemToWatch_1, 100);
              watcher_1.enterViewport(function() {
                 the_rev.reveal();
                 watcher_1.destroy();
                 
              });
            }
          }


      }

      
    }
    componentWillUnmount() {
       if (this.state.type ==="list") {
            if (document && document.body) {
             document.body.classList.remove(this.state.client.properties.className);
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

  render_singel(client){

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
                  
                  <div className="hiddendesc">
                 
                </div>
              </NavLink>
             </div> 
           </div> 
       </div>
     )
  }
  render_list(client){
    return(
      <div className="project" >
         <div className="col2">
           <div>
                <h2 ref="title">{client.name}</h2>
                <div className="role" ref="role">{client.role}</div>
                <div className="stack" ref="stack">{client.stack}</div>
                <div ref="images">
                <a  href={ client.website }>{ client.website }</a>
                </div>
           </div>
           <div ref="desc" >
             {client.description} <br />
             {client.long_desc}
           </div>
         
         </div> 
            <div className="p_image">
           { client.top_video &&
            <iframe type="text/html" width="640" height="675" src={ "https://www.youtube.com/embed/" +  client.top_video} frameborder="0"></iframe>
            }
              {client.img.map(function(image, i){
                return <img  src={"/img/" +  image} />
               })}
            { client.end_video &&
            <iframe type="text/html" width="640" height="675" src={ "https://www.youtube.com/embed/" +  client.end_video} frameborder="0"></iframe>
            }
           </div> 
     </div>  
     )
  }
  render() {
    const client = this.state.client;

    
      if (this.state.type ==="singel") {
          return  this.render_singel(client);
      }
      else{
          return  this.render_list(client);
      }
    
  }
}


export default App;
