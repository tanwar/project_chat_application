import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import { Avatar } from '@material-ui/core';

import './InfoBar.css';

const InfoBar = ({ room, toggleChat }) => (
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
);

export default InfoBar;