import React from 'react'
import { Router, Link} from 'react-static'
import ReactScriptLoaderMixin  from 'react-script-loader'
import main from "lib/main.js"
import Routes from 'react-static-routes'
import Home from 'pages/Home'
import HeaderComp from 'components/Header'
import FooterComp from 'components/Footer'

import './app.css'

export default () => (
  <Router>
    <div>
    <HeaderComp />
      <div className="wrapper">
           <Routes />
      </div>
      <FooterComp />
    </div>
  </Router>
)

