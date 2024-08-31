import axios from "axios";

export const createAvatarTalk = async (llmResponseText) => {
  const options = {
    method: "POST",
    url: "https://api.d-id.com/talks",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: import.meta.env.VITE_AVATAR_API_KEY,
    },
    data: {
      script: {
        type: "text",
        subtitles: "false",
        provider: { type: "microsoft", voice_id: "Sara" },
        input: llmResponseText,
      },
      source_url:
        "https://d-id-public-bucket.s3.us-west-2.amazonaws.com/alice.jpg",
      config: { fluent: "false", pad_audio: "0.0" },
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

