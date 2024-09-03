# Voice-Activated Chatbot with Interruptions

This project is a voice-activated chatbot interacting with users through voice input and output. The chatbot can be interrupted by user input, and it responds accordingly with meaningful debug messages. It leverages the Web Speech API for voice recognition and synthesis.

## Features

- **Voice Input and Output:** Users can interact with the chatbot using voice commands.
- **Interruptions:** The chatbot can be interrupted mid-speech and will adapt its response.
- **Debugging:** Meaningful debug messages help understand the bot's current state.
- **Context-Aware Responses:** The chatbot remembers the context of the conversation and responds accordingly.

## Technologies Used

- **React:** Frontend framework for building the user interface.
- **Web Speech API:** For speech recognition and synthesis.
- **Context API:** To manage state across the application.
- **Custom Hooks:** For handling speech synthesis and chat responses.

## Installation

Follow these steps to set up and run the application locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rati3010/voice-recog
   cd.

2. **Installation:**
   ```bash
   npm install
3. **Setup Envrioment**
   ```bash
   VITE_LLM_API_KEY='your API key'
4. **Run Application**
   ```bash
   npm run dev
