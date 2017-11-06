/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Instagram from 'components/Instagram'
//

export default () => (
        <div>
        <h1>About Ehsan</h1>
	        <div className="col2 col2-1">
	          
	        <div className="about ">
	    
	        	<p>
	            I’m <span className="red">Ehsan Pourhadi</span>, A Web developer, Designer and Producer providing digital solutions. I’m based In Malmö, <span className="red">Sweden</span> and currently work at <a href="http://gutsglory.se/">Guts & Glory</a>, creating valuable websites & digital solutions.<br /><br />

	            I specialize in web development, LAMP/LNMP Stacks and Wordpress, Drupal, Laravel. In addition, I have extensive knowledge in user interface design, logo/identity production as well as search engine optimization. Furthermore, I also have an immense knowledge within multimedia and mobile development alongside a few other technical skills.<br /><br />

	            I’m always in the search for different concepts, platforms and techniques that I can utilize in order to obtain a much richer and innovative multimedia experience.
	          </p>
	        </div>
	        <div className="portratt"><img src="/img/ehsan.jpg" /></div>
	        </div>
		 <h2>Follow me on instagram @ehsaanpo</h2>
 		 <Instagram />
          

        </div>
)
