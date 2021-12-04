import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const TextInput = ({ value, handleInputChange }) => {
  return (
    <Grid item xs={12} sm={12} md={4} lg={8}>
      <TextField
        id="standard-number"
        label="Number"
        type="number"
        value={value}
        onChange={(event) => {
          handleInputChange(event);
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
  );
};

export default TextInput;
