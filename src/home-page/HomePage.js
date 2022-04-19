import React, {useState, useEffect} from 'react';
import { getAllLanguages } from './HomePageService';

/**
 * @name HomePage
 * @description Displays the Wormsties home page
 * @return component
 */
const HomePage = () => {
    const [allLanguages, setAllLanguages] = useState();

    useEffect(() => {
        getAllLanguages(setAllLanguages, setApiError);
      }, []);
    
    return (
    <h1>Welcome to Wormsties 🐛 </h1>
  );
};
export default HomePage;
