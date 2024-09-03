import { useRef, useState } from "react";
import { setPrompt, setInterrupt } from "../context/chatContext";

const useSpeechRecognition = (dispatch) => {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const finalTranscriptRef = useRef("");

  const handleRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

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

      // Interrupt current speech synthesis if any
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance("Go ahead, I'm listening.");
        speechSynthesis.speak(utterance);
      }
    };

    recognition.onend = async () => {
      setListening(false);
      dispatch(setPrompt(finalTranscriptRef.current));
      dispatch(setInterrupt(false));
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

  return { transcript, listening, startListening: handleRecognition };
};

export default useSpeechRecognition;
