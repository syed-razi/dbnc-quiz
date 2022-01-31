import React from "react";
import classes from "./App.module.css";

const App = () => {
  return (
    <form className={classes.form}>
      <label>Your full given name:</label>
      <input type="text" />
      <div>
        <div className={classes.dob}>
          <label>Date of Birth:</label>
          <input type="text" />
        </div>
        <div className={classes.country}>
          <label>Country of residence or citizenship:</label>
          <input type="text" />
        </div>
      </div>
      <label>What school do you plan to attend?</label>
      <input type="text" />
      <label>
        Please take a moment to describe your intended area of study:
      </label>
      <textarea>Hello</textarea>
    </form>
  );
};

export default App;
