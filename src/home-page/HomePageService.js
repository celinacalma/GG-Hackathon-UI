import Constants from '../../utils/constants';
import HttpHelper from '../../utils/HttpHelper';

/**
 * @name getAllLanguages
 * @description Utilizes HttpHelper to make a GET request to an API
 * Gets all languages
 * @param {*} setLanguages sets state for languages
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for languages if 200 response, else sets state for apiError
 */
export async function getAllLanguages(setLanguages, setApiError) {
  await HttpHelper(Constants.PATIENTS_ENDPOINT, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setLanguages)
    .catch(() => {
      setApiError(true);
    });
}
