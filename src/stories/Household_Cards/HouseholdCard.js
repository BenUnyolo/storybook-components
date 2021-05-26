import React, { useState } from "react";
import "./household-card.scss";
import HouseholdClose from "../assets/household/closeSVG";
import HouseholdHead from "../assets/household/headSVG";

export const HouseholdCard = (props) => {
  // for setting date's input type to allow placeholder text
  const [dateInputType, setDateInputType] = useState("text");
  const [dependentCheck, setDependentCheck] = useState(false);

  return (
    <form className="household-card">
      <div className="household-card__head-box">
        <HouseholdHead />
      </div>
      <div className="household-card__firstname-box">
        <label htmlFor="firstname-input" className="visually-hidden">
          First Name
        </label>
        <input
          type="text"
          id="firstname-input"
          placeholder="First name*"
        ></input>
      </div>
      <div className="household-card__lastname-box">
        <label htmlFor="lastname-input" className="visually-hidden">
          Last Name
        </label>
        <input type="text" id="lastname-input" placeholder="Last name*"></input>
      </div>
      <div className="household-card__birthdate-box">
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
      <div className="household-card__pronoun-box">
        <label htmlFor="pronoun-input" className="visually-hidden">
          Pronoun
        </label>
        <select name="pronoun" id="pronoun-input" defaultValue="Pronoun*">
          <option disabled>Pronoun*</option>
          <option>He</option>
          <option>She</option>
          <option>They</option>
          <option>Other</option>
        </select>
      </div>
      <div className="household-card__relationship-box">
        <label htmlFor="relationship-input" className="visually-hidden">
          Relationship
        </label>
        <select
          name="relationship"
          id="relationship-input"
          defaultValue="Relationship to you*"
        >
          <option disabled>Relationship to you*</option>
          <option>Partner</option>
          <option>Parent</option>
          <option>Sibling</option>
          <option>Child</option>
        </select>
      </div>
      <div className="household-card__dependentcheck-box">
        <label htmlFor="dependent-input" className="checkbox-label">
          Dependent
        </label>
        <span onClick={() => setDependentCheck(!dependentCheck)}>
          <input type="checkbox" checked={dependentCheck} />
          <span></span>
        </span>
      </div>
      <div className="household-card__close-box">
        <div onClick={props.action("close-card")}>
          <HouseholdClose />
        </div>
      </div>
    </form>
  );
};
