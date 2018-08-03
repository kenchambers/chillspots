export const FETCH_USER_LOCATION = 'fetch_user_location';
export const SELECT_MAP_LOCATION = 'select_map_location';
export const HOVER_MAP_LOCATION = 'hover_map_location';

export function fetchUserLocation({ lat, lng }, callback) {
  const data = {
    lat: lat,
    lng: lng
  };

  return dispatch => {
    dispatch({
      type: FETCH_USER_LOCATION,
      payload: data
    });
  };

  // const url = `${process.env.REACT_APP_BACKEND_URL}/yelp/search`;
  //
  // return async dispatch => {
  //   function onSuccess(success) {
  //     dispatch({
  //       type: FETCH_USER_LOCATION,
  //       payload: data
  //     });
  //     return success;
  //   }
  //   function onError(error) {
  //     console.log(error);
  //   }
  //   try {
  // const success = await axios.post(url, data);
  //     return onSuccess(success);
  //   } catch (error) {
  //     return onError(error);
  //   }
  // };
  //
  // callback();
}
