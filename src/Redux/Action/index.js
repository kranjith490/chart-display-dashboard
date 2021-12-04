import axios from "axios";
import { config } from "../../config/config";
import { constructParticulars } from "../../utils/ConstructChartData";
const SET_CHART_DATA = "SET_CHART_DATA";
const SET_API_FAILURE = "SET_API_FAILURE";
export const setCharData = (actionType, response) => {
  return {
    type: actionType,
    response: response,
  };
};

export const setAPIFailure = (actionType, response) => {
  return {
    type: actionType,
    response: response,
  };
};

export const inputChange = (actionType, payload) => {
  console.log("Action", actionType, payload);
  return {
    type: actionType,
    payload: payload,
  };
};

export const fetchChartData = () => {
  return (dispatch) => {
    axios
      .get(config.chartAPI.url)
      .then((response) => {
        dispatch(
          setCharData(
            SET_CHART_DATA,
            constructParticulars(JSON.parse(JSON.stringify(response.data)))
          )
        );
      })
      .catch(() => {
        dispatch(
          setAPIFailure(SET_API_FAILURE, {
            message:
              "Service Unavailable, due to some technical reasons, try sometime later",
            status: 500,
          })
        );
      });
  };
};
