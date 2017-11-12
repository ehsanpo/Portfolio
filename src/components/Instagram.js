import React from 'react'
//import Instafeed from 'react-instafeed';
var _instafeed = require('instafeed.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _instafeed2 = _interopRequireDefault(_instafeed);
const instafeedTarget = 'instafeed';

import dotenv from "../../env";

const token = dotenv.INSTA_TOKEN;


class Instagram extends React.Component {

    run_insta(){
      const instafeed = new _instafeed2.default({
      target: instafeedTarget,
      get: 'user',
      userId: '300129657',
      clientId: 'd845b51caa6f4051b269ea9a5a96b4ba',
      accessToken:token,
      resolution: 'low_resolution',
      sortBy: 'most-recent',
      limit: 4,
      filter: item =>
        item.caption && item.caption.text
          ? ((item.short_caption = item.caption.text),
            item.short_caption.length > 160 &&
              (item.short_caption = item.caption.text.slice(0, 150) + '...'),
            (item.short_caption = item.short_caption.replace(
              /(#[a-zA-Z0-9_-]+)/g,
              '<strong class="instafeed__item__hashtag">$1</strong>'
            )))
          : (item.short_caption = ''),
      template:
        '<a href="{{link}}" target="_blank" class="instafeed__item">' +
          '<img class="instafeed__item__background" src="{{image}}" />' +
          '<div class="instafeed__item__overlay">' +
            '<div class="instafeed__item__overlay--inner">' +
              '<p class="instafeed__item__caption">{{model.short_caption}}</p>' +
              '<p class="instafeed__item__location">{{location}}</p>' +
            '</div>' +
          '</div>' +
        '</a>'
      });
      instafeed.run();
    }

   componentDidMount() {
    this.run_insta();

   }
  render () {

    return <div id={instafeedTarget} />
  }
}

export default Instagram;