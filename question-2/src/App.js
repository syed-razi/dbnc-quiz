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
          <div className={classes.dateInput}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classes.datepicker}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <input type="text"></input>
          </div>
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
      <textarea placeholder="Enter details here" />
    </form>
  );
};

export default App;
