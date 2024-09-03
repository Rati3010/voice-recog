import { useState } from "react";
import { getChatResponse } from "../api/llmApi";
import { setPrompt, useChat } from "../context/chatContext";
import { useSpeechSynthesis } from "../hook/useSpeechSynthesis";

export const useChatResponse = () => {
  const { state, dispatch } = useChat();
  const [isLoading, setIsLoading] = useState(false);
  const { isSpeaking, handleSpeak, stopSpeaking } = useSpeechSynthesis();
  const [debug, setDebug] = useState("");

  const fetchChatResponse = async () => {
    setIsLoading(true);
    setDebug("Fetching chat response...");

    try {
      if (state.prompt !== "") {
        const response = await getChatResponse(state.prompt);
        dispatch(setPrompt(''))
        if (state.interrupt && isSpeaking) {
          stopSpeaking(() => setDebug("Speaking interrupted by user input."));
        } else {
          handleSpeak(response, () => setDebug("Response complete."));
          setDebug("Speaking response aloud.");
        }
      } else {
        setDebug("No prompt provided.");
      }
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setDebug("Error fetching chat response");
    }
    setIsLoading(false);
  };

  return {
    fetchChatResponse,
    isLoading,
    isSpeaking,
    debug,
  };
};
