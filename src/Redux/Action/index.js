import axios from "axios";
import { config } from "../../config/config";
import { constructParticulars } from "../../utils/ConstructChartData";
const SET_CHART_DATA = "SET_CHART_DATA";
const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";

export const increment = (actionType, response) => {
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
      .then(function (response) {
        dispatch(
          increment(
            SET_CHART_DATA,
            constructParticulars(JSON.parse(JSON.stringify(response.data)))
          )
        );
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  };
};
