import React from "react";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { useChat } from "../../context/chatContext";
import useSpeechRecognition from "../../hook/useSpeechRecognition";
import "./VoiceInput.css";

const VoiceInput = () => {
  const { dispatch } = useChat();
  const { transcript, listening, startListening } = useSpeechRecognition(dispatch);

  return (
    <div className="voice_input_container">
      <div className="voice_input">
        <textarea value={transcript} readOnly />
        <span onClick={startListening}>
          {listening ? <IoMdMic /> : <IoMdMicOff />}
        </span>
      </div>
    </div>
  );
};

export default VoiceInput;
