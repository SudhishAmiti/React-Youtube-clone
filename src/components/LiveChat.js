import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 500);
    setLiveMessage("");

    return () => clearInterval(i);
  }, []);
  return (
    <div className="my-4">
      <div className="h-[500px] ml-2 p-2 border border-black bg-gray-100 overflow-y-scroll flex-col-reverse rounded-lg">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-b-lg"
        onSubmit={(e) => {e.preventDefault();
            dispatch(addMessage({
                message : liveMessage,
            }));
        }
        }
      >
        <input
          className="w-64 p-2 "
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-gray-400 px-2 mx-2 ">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
