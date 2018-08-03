export const FETCH_USER_LOCATION = 'fetch_user_location';

export function fetchUserLocation({ lat, lng }) {
  const data = {
    lat,
    lng
  };

  return dispatch => {
    dispatch({
      type: FETCH_USER_LOCATION,
      payload: data
    });
  };
}
