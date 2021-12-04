import { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

import SelectInput from "./select";
import TextInput from "./text";
import { inputChange } from "../Redux/Action";

const PieChart = ({ data, dataId }) => {
  let [textInput, setTextInput] = useState(data[0].value);
  let [selectInput, setSelectInput] = useState(0);
  const dispatch = useDispatch();
  const handleSelectChange = (event) => {
    setSelectInput(event.target.value);
    setTextInput(data[event.target.value].value);
  };
  const handleInputChange = (event) => {
    setTextInput(event.target.value);
    dispatch(
      inputChange("HANDLE_INPUT_CHANGE", {
        dataId: dataId,
        elementId: selectInput,
        newValue: event.target.value,
      })
    );
  };
  return (
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Card>
        <CardContent>
          <Chart data={data}>
            <PieSeries valueField="value" argumentField="particular" />
            <Animation />
          </Chart>
        </CardContent>
        <CardActions>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="set-width"
          >
            <SelectInput
              value={selectInput}
              data={data}
              handleSelectChange={handleSelectChange}
            />
            <TextInput
              value={textInput}
              handleInputChange={handleInputChange}
            />
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PieChart;
