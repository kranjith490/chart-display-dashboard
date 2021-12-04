import { Grid } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const SelectInput = ({ data, value, handleSelectChange }) => {
  console.log("Default", value);
  return (
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={(event) => handleSelectChange(event)}
        className="select-width"
      >
        {data.map((item, index) => {
          return <MenuItem value={index}> {item.particular}</MenuItem>;
        })}
      </Select>
    </Grid>
  );
};

export default SelectInput;
