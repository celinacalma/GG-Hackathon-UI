/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import getAllLanguages from "./HomePageService";

/**
 * @name HomePage
 * @description Displays the Wormsties home page
 * @return component
 */
function HomePage() {
  const [apiError, setApiError] = useState();
  const [allLanguages, setAllLanguages] = useState();
  const tempLanguages = [
    "Japanese",
    "Tagalog",
    "Turkish",
    "Mandarin",
    "Vietnamese",
    "Piraha",
  ];

  useEffect(() => {
    getAllLanguages(setAllLanguages, setApiError);
  }, []);

  return (
    <>
      <h1>Welcome to Indigitales 📚 </h1>
      <h2>Select your language for stories</h2>
      <form>
        <fieldset>
          <div className="form-group">
            <label htmlFor="exampleSelect1" className="form-label mt-4">
              Select language
              <select className="form-select" id="exampleSelect1">
                {tempLanguages.map((language) => (
                  <option>{language}</option>
                ))}
              </select>
            </label>
          </div>
        </fieldset>

        <button type="button" className="btn btn-primary">
          Continue{" "}
        </button>
      </form>

      <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Turkish</h4>
          <p className="card-text">
            the most widely spoken of the Turkic languages, with around 70 to 80
            million speakers. It is the national language of Turkey and Northern
            Cyprus{" "}
          </p>
        </div>
      </div>
    </>
  );
}
export default HomePage;
