import React from 'react'
import { getSiteProps } from 'react-static'

import AwardList from '../components/AwardList'

export default getSiteProps(() => (
	<div className="about wrapper-m">
		I’m Ehsan Pourhadi, A Web developer, Designer and Producer providing digital solutions. I’m based In Malmö, Sweden and currently work at <a href="http://gutsglory.se/">Guts & Glory</a>, creating valuable websites & digital solutions.<br /><br />
		<AwardList />

	</div>
))
