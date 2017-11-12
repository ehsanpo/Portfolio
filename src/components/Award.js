import React from 'react'
import { Router, NavLink} from 'react-static'

class Award extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isFirst:false,
      rev: false,
    };

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
                <h3 onClick={this.handleClick }> {this.props.text}</h3>
                <div ref="image"  className={ this.state.isToggleOn ? 'desc-ON' : 'desc-OFF'}>
                  {this.props.desc}
                  {this.props.linkto &&  <NavLink to= { "/work/" + this.props.linkto }> View Project </NavLink> }
                </div>

            </div>

      )
  }

}

export default Award;