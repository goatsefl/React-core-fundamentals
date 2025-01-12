import logo from './logo.svg';
import './App.css';
import MessageContext from './context/MessageContext';

export default function App() {
  const message = "Hello World"
  return (
    <div>
      <MessageContext.Provider value={message}>

      </MessageContext.Provider>
    </div>
  );
}


