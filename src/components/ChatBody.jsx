import React from "react";

const ChatBody = () => {
    const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md"
  return (


  <div className="flex flex-col gap-4">
    {/* client message */}
    {/* <div className="border-[#999999] break-words border-2 rounded-xl self-end px-3 max-w-[80%]">Client message</div> */}
    <div className="border-[#999999] break-words border-2 rounded-xl self-end px-3 py-2 max-w-[80%]">
        <pre className="whiteSpaces-pre-wrap">
            <span>hyy</span>
        </pre>
    </div>  

    {/* ai message */}
    <div className={`border-[#999999] break-words border-2 rounded-xl self-start px-3 py-2 max-w-[80%] ${aiStyle}`}>
        <pre>
            <span>hyy</span>
        </pre>
    </div>
  </div>
  )
};

export default ChatBody;
