import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: import.meta.env.VITE_LLM_API_KEY,
});

export const getChatResponse = async (message) => {
    console.log(message)
  try {
    const chat = await cohere.chat({
      model: "command",
      message: message,
    });
    return chat.text;
  } catch (error) {
    console.error("Error in chat with LLM:", error);
    throw error; 
  }
};
