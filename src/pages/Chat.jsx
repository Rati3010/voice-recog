import React, { useEffect } from "react";
import VoiceInput from "../components/VoiceInput/VoiceInput";
import Avatar from "../components/Avatar/Avatar";
import { useSpeechSynthesis } from "../hook/useSpeechSynthesis";
import { useChat } from "../context/chatContext";

const Chat = () => {
  const { handleSpeak } = useSpeechSynthesis();
  const { state } = useChat();
  useEffect(() => {
    handleSpeak(`Hey, ${state.name}. I am ready to discuss on this ${state.topic}`);
  }, []);
  return (
    <div className="chat_page">
      <Avatar />
      <VoiceInput />
    </div>
  );
};

export default Chat;
