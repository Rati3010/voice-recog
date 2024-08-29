import React,{useState} from "react";
import "./NameInput.css";

const NameInput = () => {
  const [name,setName] = useState('');
  const handleNameChange = (e) =>{
    setName(e.target.value)
  }
  return (
    <div className="name_input">
      <div className="input_container">
        <input type="text"  placeholder="Enter your name..." value={name} onChange={handleNameChange}/>
        <button>Proceed to Chat</button>
      </div>
    </div>
  );
};

export default NameInput;
