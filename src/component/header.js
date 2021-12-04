import { Grid, Typography } from "@material-ui/core";

const Header = ({ title }) => {
  return (
    <Grid container className="header">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography>{title} </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
