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
    "Xhosa",
  ];

  useEffect(() => {
    getAllLanguages(setAllLanguages, setApiError);
  }, []);

  return (
    <>
      <h1>Welcome to Indigitales 📚 </h1>
      <h2>Select your language for stories</h2>
      <div className="form-group">
        <label htmlFor="exampleSelect1" className="form-label mt-4">
          Select language
          <select className="form-select" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </label>
      </div>
      <button type="button" className="btn btn-primary">
        Continue{" "}
      </button>
    </>
  );
}
export default HomePage;
