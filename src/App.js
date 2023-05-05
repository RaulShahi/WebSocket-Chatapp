import { useEffect } from "react";
import "./App.css";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

const WS_URL = "ws://localhost:8000";

function App() {
  const { sendMessage, lastMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
    onMessage: (param) => {
      console.log("MEssage received", param);
    },
  });

  useEffect(() => {
    console.log({ lastMessage });
  }, []);

  const messageSendHandler = () => {
    sendMessage("Hello");
  };

  return (
    <div>
      <button onClick={messageSendHandler}>Send Message</button>
    </div>
  );
}

export default App;
