import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
      id: '0',
      message: 'Welcome to Tasty Feast.😋!',
      trigger: '1',
  }, {
      id: '1',
      message: 'How can I help you?',
      trigger: '2'
  }, {
      id: '2',
      message:"To go Search",
      trigger: '3',
  }, {
      id: '3',
      message: " Thank you for Using Tasty Feast..",
      end: true
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

const chat = () => {
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

export default chat