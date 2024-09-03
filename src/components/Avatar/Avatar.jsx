import React, { useEffect } from "react";
import { useChat } from "../../context/chatContext";
import { useChatResponse } from "../../utility/useChatResponse";
import "./Avatar.css";


const Avatar = () => {
  const { fetchChatResponse, isLoading, isSpeaking, debug } = useChatResponse();
  const { state } = useChat();
  useEffect(() => {
    if (state && state.prompt) {
      fetchChatResponse();
    }
  }, [state.prompt]);

  return (
    <div className="avatar_container">
      {isLoading && <p className="loading_message">Loading...</p>}
      <div className={`avatar_debug ${isSpeaking ? "vibration" : ""}`}>
        {debug}
      </div>
    </div>
  );
};

export default Avatar;
