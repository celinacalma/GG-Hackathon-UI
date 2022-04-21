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

  console.log("yell!");
  useEffect(() => {
    getAllLanguages(setAllLanguages, setApiError);
  }, []);

  return <h1>Welcome to Wormsties 🐛 </h1>;
}
export default HomePage;
