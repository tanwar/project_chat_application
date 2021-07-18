import React from 'react';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import './Input.css';
import { Fab } from "@material-ui/core";

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <Fab id="sendButton" style={style} onMouseOver="" className="fabStyleClass" onClick ={e => sendMessage(e)}><SendSharpIcon /></Fab>
  </form>
)

export default Input;