import React, { createContext, useReducer, useContext } from "react";

// Define action types
const SET_NAME = "SET_NAME";
const SET_PROMPT = "SET_PROMPT";
const SET_TOPIC = "SET_TOPIC";
const SET_INTERRUPT = "SET_INTERRUPT";

// Create the initial state
const initialState = {
  name: "",
  prompt: "",
  topic: "",
  interrupt:false,
};

// Create a reducer to handle the actions
const chatReducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_PROMPT:
      return { ...state, prompt: action.payload };
    case SET_TOPIC:
      return { ...state, topic: action.payload };
      case SET_INTERRUPT:
      return { ...state, interrupt: action.payload };
    default:
      return state;
  }
};

// Create the context
const ChatContext = createContext();

// Create the provider component
export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook to use the ChatContext
export const useChat = () => {
  return useContext(ChatContext);
};

// Action creators
export const setName = (name) => ({ type: SET_NAME, payload: name });
export const setPrompt = (prompt) => ({
  type: SET_PROMPT,
  payload: prompt,
});
export const setTopic = (topic) => ({ type: SET_TOPIC, payload: topic });

export const setInterrupt= (response) => ({
  type: SET_INTERRUPT,
  payload: response,
});