import React, { useState, useRef } from "react";
import "./VoiceInput.css";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { getChatResponse } from "../../api/llmApi";

const VoiceInput = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const finalTranscriptRef = useRef("");

  const handleListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("SpeechRecognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onstart = () => {
      setTranscript("");
      finalTranscriptRef.current = "";
      setListening(true);
    };

    recognition.onend = async() => {
      setListening(false);
      console.log("Final transcript after end:", finalTranscriptRef.current);
      try {
        const response = await getChatResponse(finalTranscriptRef.current);
        console.log("Chat response:", response);
      } catch (error) {
        console.error("Error getting chat response:", error);
      }
    };

    recognition.onresult = (event) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
        } else {
          interimTranscript += result[0].transcript;
        }
      }

      setTranscript(finalTranscript + interimTranscript);
      finalTranscriptRef.current = finalTranscript + interimTranscript;
    };

    recognition.start();
    finalTranscriptRef.current = recognition;

    setTimeout(() => recognition.stop(), 10000);
  };

  return (
    <div className="voice_input_container">
      <div className="voice_input">
        <textarea value={transcript} readOnly />
        <span onClick={handleListening}>
          {listening ? <IoMdMic /> : <IoMdMicOff />}
        </span>
      </div>
    </div>
  );
};

export default VoiceInput;
