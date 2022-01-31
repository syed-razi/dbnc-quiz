import React from "react";
import "./App.css";

const App = () => {
  return (
    <form>
      <label>
        Your full given name:
        <input type="text"></input>
      </label>
      <label>
        Date of Birth:
        <input type="text"></input>
      </label>
      <label>
        Country of residence or citizenship:
        <input type="text"></input>
      </label>
      <label>
        What school do you plan to attend?
        <input type="text"></input>
      </label>
      <label>
      Please take a moment to describe your intended area of study:
        <textarea>Hello</textarea>
      </label>
    </form>
  );
};

export default App;
