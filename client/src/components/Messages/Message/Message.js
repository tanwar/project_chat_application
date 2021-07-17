import React from 'react';

import './Message.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import ReactEmoji from 'react-emoji';
import { Avatar, Chip } from '@material-ui/core';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  const handleClick = (link) => {
    console.log('link', link);
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
          <div>
          {text === 'modal' &&
      <div ><button type="button" onClick={handleOpen}>
        Open Modal
      </button>
       <Modal style={modalStyle} className={classes.paper}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      ><div>
        {text}</div>
      </Modal></div>}
      {text === 'link' && <Chip avatar={<Avatar src="https://material-ui.com/static/images/avatar/3.jpg" />} label={text} onClick={handleClick} />}
    </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <div>
      {text === 'modal' &&
      <div ><button type="button" onClick={handleOpen}>
        Open Modal
      </button>
       <Modal style={modalStyle} className={classes.paper}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      ><div>
        {text}</div>
      </Modal></div>}
    </div>
          </div>
        )
  );
}

export default Message;