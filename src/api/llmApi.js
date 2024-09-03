import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: import.meta.env.VITE_LLM_API_KEY,
});

export const getChatResponse = async (message) => {
  const structuredPrompt = `You are an intelligent assistant. Please provide a detailed and informative response to the following question:\n\n${message}\n\nMake sure your response is clear, concise, and provides any necessary details.`;
  try {
    const chat = await cohere.chat({
      model: "command",
      message: structuredPrompt,
    });
    return chat.text;
  } catch (error) {
    console.error("Error in chat with LLM:", error);
    throw error; 
  }
};
