import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import { Avatar } from '@material-ui/core';

import './InfoBar.css';

const InfoBar = ({ room, toggleChat }) => (
  <div>
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <div className="avator-text">
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        <h3 style={{paddingLeft: '10px'}}>{room}</h3>
        </div>
      </div>
      <div className="rightInnerContainer">
        <img onClick = {toggleChat} src={closeIcon} alt="close icon" />
      </div>
    </div>
    <div className="banner">
      <div className="info-message">We are offline</div>
      <svg viewBox="0 0 1440 319">
        <path fill="#fff" fill-opacity="1" d="M -5 295 L 137 313 C 247 312 357 299 391 297 C 439 290 667 319 708 303 C 783 299 776 297 915 294 C 1012 290 1083 306 1201 297 C 1314 292 1292 297 1389 298 L 1428 299 L 1440 320 L 1392 320 C 1344 320 1248 320 1152 320 C 1056 320 960 320 864 320 C 768 320 672 320 576 320 C 480 320 384 320 288 320 C 192 320 96 320 48 320 L 0 320 Z"></path>
      </svg>
    </div>
  </div>
);

export default InfoBar;