import React from "react";

function StudentCard(props) {
  const handleClick = () => {
    alert(`Student Name: ${props.name}`);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{props.name}</h3>
      <p>Course: {props.course}</p>
      <button onClick={handleClick}>View Name</button>
    </div>
  );
}

export default StudentCard;
