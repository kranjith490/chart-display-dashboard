const SET_CHART_DATA = "SET_CHART_DATA";
const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";
const SET_API_FAILURE = "SET_API_FAILURE";

const initialState = {
  chartData: {},
};

export const chartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CHART_DATA: {
      return { ...state, chartData: action.response };
    }
    case SET_API_FAILURE: {
      return { ...state, chartData: action.response };
    }
    case HANDLE_INPUT_CHANGE: {
      let data = {};
      data = JSON.parse(JSON.stringify(state.chartData));
      let { dataId, elementId, newValue } = action.payload;
      data[dataId].elements[elementId].value = newValue;
      console.log("From Reducer", { dataId, elementId, newValue }, data);
      return { ...state, chartData: data };
    }
    default:
      return { ...state };
  }
};
