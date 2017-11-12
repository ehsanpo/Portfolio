import React from 'react'
import Award from '../components/Award'
import { Link, NavLink} from 'react-static'
import Routes from 'react-static-routes'
class AwardList extends React.Component {

  render() {
    return (
            <div className="col4 awardlist">
              <Award imgsrc="/img/guldagg.png"  text="Guldägget" desc={
                <p>Gold Category PR<br />Silver Category Digital<br/>Silver Category Alternative Media <br/><Link to="/work/toolpool">View project</Link> </p> 
              }/>
              <Award imgsrc="/img/cannen.png"  text="Cannes lions" desc={
                <p>Silver Lion in Promo &amp; Activation<br/>Bronze Lion in Cyber <br/>Shortlist in Media <br/><Link to="/work/toolpool">View project</Link></p>
              }/>
              <Award imgsrc="/img/svenskadesign.png"  text="Svenska Designpriset " desc={
                <p>Gold Category Digital Design<br/><Link to="/work/malmo-saluhall">View project</Link></p>
              }/>
              <Award imgsrc="/img/award.png"  text="Other Awards" desc={<p>
              Epica Awards : Bronze in PR<br />
              Tomorrow Awards: 1 Shortlist<br />
              Eurobest 13: Bronze in Interactive<br />
              Spinn 13: Gold Consumer Campaign<br />
              100 Wattaren: Gold (100w) under "SMART" category
            </p>
          }/>
            </div>
    );
  }
}

export default AwardList;