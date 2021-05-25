import React, { useState } from "react";
import "./household-card.css";
import HouseholdClose from "../assets/household/closeSVG";
import HouseholdHead from "../assets/household/headSVG";

export const HouseholdCard = () => {
  // for setting date's input type to allow placeholder text
  const [dateInputType, setDateInputType] = useState("text");
  const [dependentCheck, setDependentCheck] = useState(false);

  return (
    <form className="household-card">
      <div className="household-card__head-item">
        <HouseholdHead />
      </div>
      <div className="household-card__firstname-item">
        <label htmlFor="firstname-input" className="visually-hidden">
          First Name
        </label>
        <input
          type="text"
          id="firstname-input"
          placeholder="First name*"
        ></input>
      </div>
      <div className="household-card__lastname-item">
        <label htmlFor="lastname-input" className="visually-hidden">
          Last Name
        </label>
        <input type="text" id="lastname-input" placeholder="Last name*"></input>
      </div>
      <div className="household-card__birthdate-item">
        <label htmlFor="date-input" className="visually-hidden">
          Date of Birth
        </label>
        <input
          type={dateInputType}
          id="date-input"
          placeholder="Date of birth*"
          // turns into date input on focus
          onFocus={() => setDateInputType("date")}
          // returns to text input on un-focus if no date selected
          onBlur={(e) => {
            if (!e.target.value) {
              setDateInputType("text");
            }
          }}
        ></input>
      </div>
      <div className="household-card__pronoun-item">
        <label htmlFor="pronoun-input" className="visually-hidden">
          Pronoun
        </label>
        <select name="pronoun" placeholder="pronoun" id="pronoun-input">
          <option disabled selected>
            Pronoun*
          </option>
          <option>He</option>
          <option>She</option>
          <option>They</option>
          <option>Other</option>
        </select>
      </div>
      <div className="household-card__relationship-item">
        <label htmlFor="relationship-input" className="visually-hidden">
          Relationship
        </label>
        <select name="relationship" id="relationship-input">
          <option disabled selected>
            Relationship to you*
          </option>
          <option>Partner</option>
          <option>Parent</option>
          <option>Sibling</option>
          <option>Child</option>
        </select>
      </div>
      <div className="household-card__dependentcheck-item">
        <label htmlFor="dependent-input">Dependent</label>
        <span onClick={() => setDependentCheck(!dependentCheck)}>
          <input type="checkbox" checked={dependentCheck} />
          <span></span>
        </span>
      </div>
      <div className="household-card__close-item">
        <HouseholdClose />
      </div>
    </form>
  );
};
