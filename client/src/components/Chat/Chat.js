import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import { Fab } from "@material-ui/core";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

import {botChat} from '../../test-data/test-data';

import './Chat.css';

//const ENDPOINT = 'https://project-chat-application.herokuapp.com/';
const ENDPOINT = 'http://localhost:5000/';

let socket;

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  color: "secondary",
  areaLabel: 'edit'
};

const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  color: "secondary",
  areaLabel: 'edit',
};

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [chatVisible, setChatVisible] = useState('');
  const [showModal, setShowModal] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = botChat;

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  const toggleChat = () => {
    console.log(chatVisible);
    setChatVisible(!chatVisible);
  }

  

  return (
    <div className="outerContainer">
      {chatVisible && <div className="container" style={style}>
          <InfoBar toggleChat={toggleChat} room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>}
      {/*<TextContainer users={users}/>*/}
      {!chatVisible && <Fab style={fabStyle} className="fabStyleClass" onClick = {toggleChat}>
        <ChatBubbleIcon/>
      </Fab>}
    </div>
  );
}

export default Chat;
