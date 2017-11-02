import React from 'react'
import Instafeed from 'react-instafeed';

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

export default Instagram;