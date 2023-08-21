import React from 'react'
import './App.css';

import {ChatEngine} from 'react-chat-engine'
import LoginForm from './Componets1/LoginForm'
import ChatFeed from './Componets1/ChatFeed';

const App = () => {

  if(!localStorage.getItem('userName')) return <LoginForm/>
  return (
    <ChatEngine 
    height = '100vh'
    projectID= 'a2c77fa4-c70e-4ed9-a97a-8d57b9c43f02'
    userName = {localStorage.getItem('userName')}
    userSecret = {localStorage.getItem('password')}
    
    renderChatFeed = {(chatAppProps) => <ChatFeed{... chatAppProps} />}
    />
  );
}

export default App