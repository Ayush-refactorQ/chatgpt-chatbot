import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ChatBody from "./components/ChatBody";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#181f28] h-screen py-6 relative sm:px-28 text-white overflow-hidden flex flex-col justify-between align-middle">

{/* gradinet */}

<div className="gradient-01 z-0 absolute"></div>
<div className="gradient-02 z-0 absolute"></div>

      {/* Header */}
      <div className="uppercase font-bold text-3xl text-center mb-3">
        Chatbot
      </div>

      {/* body */}
      <div>
      <ChatBody/>
      </div>

      {/* input */}
      <div>Input</div>
    </div>
  );
}

export default App;
