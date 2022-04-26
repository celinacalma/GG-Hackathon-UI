/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import getAllLanguages from './HomePageService';

/**
 * @name HomePage
 * @description Displays the Indigitales home page
 * @return component
 */
function HomePage() {
  const [allLanguages, setAllLanguages] = useState();
  const [apiError, setApiError] = useState();
  const [cardIsClicked, setCardIsClicked] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const tempLanguages = [
    {
      primaryName: "Ōlelo Hawai'i",
      romanizedName: 'Hawaiian',
    },
    {
      primaryName: 'Nedersassisch',
      romanizedName: 'Low Saxon - West Low German',
    },
    {
      primaryName: 'Rromani ćhib',
      romanizedName: 'Romani',
    },
    {
      primaryName: 'Tlicho (Dogrib)',
      romanizedName: 'Dogrib',
    },
    {
      primaryName: 'Sandu',
      romanizedName: 'Sardinian',
    },
    {
      primaryName: 'Gaeilge',
      romanizedName: 'Irish',
    },
  ];

  useEffect(() => {
    getAllLanguages(setAllLanguages, setApiError);
  }, []);

  /**
   * @name handleCardSelection
   * @param {*} event click event
   * Changes card color if selected
   */
  const handleCardSelection = (event) => {
    alert('you clicked on a card!');
    setCardIsClicked(true);
  };

  return (
    <div className="container">
      <div className="v-stack">
        <h1>Welcome to Indigitales 📚 </h1>
        <p>Tap on a language to select</p>
        {/* <form>
          <fieldset>
            <div className="form-group">
              <label htmlFor="exampleSelect1" className="form-label mt-4">
                Select language
                <select className="form-select" id="exampleSelect1">
                  {tempLanguages.map((language) => (
                    <option>{language.primaryName}</option>
                  ))}
                </select>
              </label>
            </div>
          </fieldset>
        </form> */}
        <div className="grid">
          {tempLanguages.map((language) => (
            <div
              className="card border-primary mb-3"
              style={{ maxWidth: '20rem' }}
              key={language}
            >
              <div className="card-header">{language.romanizedName}</div>
              <div className="card-body">
                <h4 className="card-title">{language.primaryName}</h4>
              </div>
            </div>
          ))}
        </div>

        <button type="button" className="btn btn-primary">
          Continue
          {' '}
        </button>
      </div>
    </div>
  );
}
export default HomePage;
