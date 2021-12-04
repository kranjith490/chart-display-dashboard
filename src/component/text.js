import { Grid, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const TextInput = ({ value, handleInputChange }) => {
  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={4}
      lg={4}
      className="input-center "
    >
      <TextField
        id="standard-number"
        label={<Typography> Value </Typography>}
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
