import React, { useState } from "react";
import "./step-form.css";


const StepForm = () => {
  const [step, setStep] = useState('1');
  const handleClick = (e) => {
    setStep(e.target.value);
    console.log(step);
  };
  return (
    <div className="form">
      <div className="loading-bar" loading="loading...">  
        </div>  
      <div className="progressbar">
        <div className="progress-step step-active" data-title="Initial"></div>
        <div
          className={`progress-step ${step === "2" && "step-active"}`}
          data-title="Prepare"
        ></div>
        <div className={`progress-step ${step === "3" && "step-active"}`} data-title="Implement"></div>
        <div className="progress-step" data-title="Deploy"></div>
      </div>
      <div className={`step-form ${step === "1" && "step-form-active"}`}>
        <label htmlFor="login">Login</label>
        <input type="text" placeholder="name or email"></input>
        <button onClick={handleClick} value="2">Next</button>
      </div>

      <div className={`step-form ${step === "2" && "step-form-active"}`}>
        <label htmlFor="firstname">Firstname</label>
        <input type="text" placeholder="Firstname"></input>
        <label htmlFor="lastname">Lastname</label>
        <input type="text" placeholder="Lastname"></input>
        <div className="tap-button">
          <button>Previos</button>
          <button onClick={handleClick} value="3">Next</button>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
