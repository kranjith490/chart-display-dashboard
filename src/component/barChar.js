import { useState } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

import SelectInput from "./select";
import TextInput from "./text";
import { inputChange } from "../Redux/Action";

const BarChart = ({ data, dataId }) => {
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
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card>
        {" "}
        <CardContent>
          <Chart data={data}>
            <ArgumentAxis />
            <BarSeries valueField="value" argumentField="particular" />
            <Animation />
          </Chart>
        </CardContent>
        <CardActions>
          <Grid
            container
            direction="row"
            justifyContent="center"
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

export default BarChart;
