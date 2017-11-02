import React from 'react'
import Award from '../components/Award'


class AwardList extends React.Component {

  render() {
    return (
      	 <div className="col4 awardlist">
            <Award linkto="toolpool" imgsrc="/img/guldagg.png"  text="Guldägget" desc="gold"/>
			<Award linkto="toolpool" imgsrc="/img/cannen.png"  text="Cannes lions" desc="gold"/>
			<Award linkto="malmo-saluhall" imgsrc="/img/svenskadesign.png"  text="Svenska Designpriset " desc="gold"/>
			<Award imgsrc="/img/award.png"  text="Other Awards" desc="gold" />
         </div>
    );
  }
}

export default AwardList;