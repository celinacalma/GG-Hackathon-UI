import Constants from "../utils/Constants";
import HttpHelper from "../utils/HttpHelper";

/**
 * @name getAllLanguages
 * @description Utilizes HttpHelper to make a GET request to an API
 * Gets all languages
 * @param {*} setAllLanguages sets state for languages
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for languages if 200 response, else sets state for apiError
 */
export default async function getAllLanguages(setAllLanguages, setApiError) {
  await HttpHelper(Constants.WORMSTIES_ENDPOINT, "GET")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setAllLanguages)
    .catch(() => {
      setApiError(true);
    });
}
