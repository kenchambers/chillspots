import axios from 'axios';
export const FETCH_CHILL_SPOTS = 'fetch_chill_spots';

export function fetchChillSpots({ lat, lng }, callback) {
  const data = {
    lat: lat,
    lng: lng
  };
  const url = `${process.env.REACT_APP_BACKEND_URL}/yelp/search`;
  return async dispatch => {
    function onSuccess(success) {
      dispatch({
        type: FETCH_CHILL_SPOTS,
        payload: success.data
      });
      return success;
    }
    function onError(error) {
      console.log(error);
    }
    try {
      const success = await axios.post(url, data);
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };

  callback();
}
