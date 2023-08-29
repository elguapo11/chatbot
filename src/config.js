// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Your personal assistant';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: '#376B7E',
          padding: '10px',
          borderRadius: '3px',
        }}
      >
        Welcome to my custom Chatbot
      </div>
    ),
  },
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;
