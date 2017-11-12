import React from 'react'

class FooterComp extends React.Component {

  render(){

    return(
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
          <a target="_blank" href="mailto:ehsan.po@gmail.com"> ehsan.po@gmail.com </a><br />
          072 006 27 97

        </div>
        <div >
          <h2>About this site</h2>
          <p>This is the portfolio of Ehsan Pourhadi.
          Developer, producer &amp; graphic desginer based in Malmö, Sweden.
          The sites is build with React, React-Static, AWS API Gateway and AWS Dynamo DB.
          </p>
        </div>
      </footer>
      )
  }
}

export default FooterComp;