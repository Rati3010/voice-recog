import React, { useEffect, useState } from "react";
import "./Topic.css";
import { setTopic, useChat } from "../../context/chatContext";
import { useNavigate } from "react-router-dom";

const Topic = () => {
  const [topic, setInputTopic] = useState("");
  const {dispatch } = useChat();
  const navigate = useNavigate();

  const topics = [
    "Sports",
    "Programming",
    "Movies",
    "Science",
    "Technology",
    "Travel",
    "Health & Fitness",
    "History",
    "Gaming",
  ];

  const handleClickTopic = (e) => {
    dispatch(setTopic(e.target.value));
    navigate("/chat");
  };

  useEffect(() => {
    if (topic) {
      const timer = setTimeout(() => {
        dispatch(setTopic(topic));
        navigate("/chat");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [topic, dispatch, navigate]);

  return (
    <div className="topic_section">
      <h2>Choose one Topic....</h2>
      <div className="topic_container">
        <div className="topics">
          {topics.map((topic, index) => {
            return (
              <input
                type="button"
                value={topic}
                key={index}
                onClick={handleClickTopic}
              />
            );
          })}
        </div>
        <input
          type="text"
          placeholder="Enter Custom topic"
          value={topic}
          onChange={(e) => setInputTopic(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Topic;
