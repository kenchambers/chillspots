export const SELECT_MAP_LOCATION = 'select_map_location';
export const HOVER_MAP_LOCATION = 'hover_map_location';

export function selectMapLocation(map) {
  const data = {
    map
  };

  return dispatch => {
    dispatch({
      type: SELECT_MAP_LOCATION,
      payload: data
    });
  };
}

export function hoverMapLocation(id) {
  const data = {
    id
  };

  return dispatch => {
    dispatch({
      type: HOVER_MAP_LOCATION,
      payload: data
    });
  };
}
