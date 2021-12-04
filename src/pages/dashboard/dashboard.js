import { Grid, Typography } from "@material-ui/core";
import { Fragment, useEffect } from "react";
import BarChart from "../../component/barChar";
import PieChart from "../../component/pieChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchChartData } from "../../Redux/Action/index";
import Loader from "../../component/loader";
import loader from "../../assets/loader.gif";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { chartData } = useSelector((state) => state.chartReducer);

  useEffect(() => {
    dispatch(fetchChartData());
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={3}
      className="dashboard-layout"
    >
      {JSON.stringify(chartData) !== "{}" && chartData.status !== 500 ? (
        chartData.map((data, key) => {
          return data.type === "Bar" ? (
            <BarChart key={key} data={data.elements} dataId={key} />
          ) : (
            <PieChart key={key} data={data.elements} dataId={key} />
          );
        })
      ) : chartData.status === 500 ? (
        <Typography> {chartData.message} </Typography>
      ) : (
        <Fragment>
          <Loader imagePath={loader} />
          <Typography>fetching server data.....</Typography>
        </Fragment>
      )}
    </Grid>
  );
};

export default Dashboard;
