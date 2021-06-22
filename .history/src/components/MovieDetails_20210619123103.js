import React, { useState } from "react";

const MovieDetails = () => {
  const [students, setStudents] = useState([]);
  const addStudent = () => {
    // create an array
    setStudents((students) => [...students, <Input />]);
    console.log("dddd", students);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={addStudent}>Add Another Student</button>
      {students.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};

export default MovieDetails;
