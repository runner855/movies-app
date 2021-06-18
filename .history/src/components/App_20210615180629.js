import React from "react";
import "../styles/App.css";
import Card from "../components/Card";

const App = () => {
  return (
    <div className="Container">
      {data.map((item) => (
        <Card {...item} key={item.name} />
      ))}
    </div>
  );
};

export default App;
