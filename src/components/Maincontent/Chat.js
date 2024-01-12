import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';



const Chat = () => {
  const steps = [
    {
      id: '1',
      message: 'Welcome to Tassty Feast😋',
      trigger: '2',
    },
    {
      id:'2',
      message:"How can I help you?",
      trigger:"input",
    },
    {
      id: 'input',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Go to Search',
      trigger:"4"
    }, 
    {
      id: '4',
      message: 'Thank you.',
    }, 
  ];
  
  const theme = {
    background: '#94edf7',
    headerBgColor: 'white',
    headerFontSize: '20px',
    botBubbleColor: '#141517',
    headerFontColor: 'black',
    botFontColor: 'white',
    userBubbleColor: '#7c7d80',
    userFontColor: 'white',
  };
  
  const config = {
    botAvatar: "assets/bot.png",
    floating: true,
    floatingIcon:"assets/support.png",
  };
  return (
    <div>
        <ThemeProvider theme={theme}>
            <ChatBot
              headerTitle="Help Desk"
              steps={steps}
              {...config}
            />
          </ThemeProvider>
    </div>
  )
}

export default Chat;