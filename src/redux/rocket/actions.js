import axios from 'axios';
import * as actionType from './actionTypes';

const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const loadRockets = (rocketData) => {
  const rockets = rocketData.map((rocket) => ({
    id: rocket.id,
    rocketId: rocket.rocket_id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    image: rocket.flickr_images[0],
    description: rocket.description,
  }));
  return {
    type: actionType.GET_ROCKETS,
    payload: rockets,
  };
};

const fetchRockets = () => async (dispatch) => {
  await axios({
    method: 'get',
    url: BASE_URL,
    responseType: 'json',
  })
    .then((res) => {
      dispatch(loadRockets(res.data));
    });
};

export default fetchRockets;
