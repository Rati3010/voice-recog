import { useState } from "react";

export const useSpeechSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [debug, setDebug] = useState("");

  const handleSpeak = (text, onEndCallback) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => {
      setDebug("Audio playback ended");
      setIsSpeaking(false);
      if (onEndCallback) onEndCallback();
    };
    utterance.onstart = () => {
      setDebug("Audio playback started");
      setIsSpeaking(true);
    };
    speechSynthesis.speak(utterance);
  };

  const stopSpeaking = (onEndCallback) => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      handleSpeak("Go ahead, I am listening", onEndCallback);
    }
  };

  return {
    isSpeaking,
    debug,
    handleSpeak,
    stopSpeaking,
  };
};
