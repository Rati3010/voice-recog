import React, { useState } from "react";
import "./NameInput.css";
import { useNavigate } from "react-router-dom";
import { setName } from "../../context/chatContext";
import { useChat } from "../../context/chatContext";

const NameInput = () => {
  const [name, setInputName] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useChat();

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleToProceed = () => {
    if (name) {
      dispatch(setName(name));
      navigate("/topic");
    }
  };

  return (
    <div className="name_input">
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={handleNameChange}  
        />
        <button onClick={handleToProceed}>Proceed to chat</button>
      </div>
    </div>
  );
};

export default NameInput;
