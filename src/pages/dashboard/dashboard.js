import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import BarChart from "../../component/barChar";
import PieChart from "../../component/pieChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchChartData } from "../../Redux/Action/index";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { chartData } = useSelector((state) => state.chartReducer);

  useEffect(() => {
    dispatch(fetchChartData());
  }, []);

  return (
    <Grid container direction="column">
      {JSON.stringify(chartData) !== "{}"
        ? chartData.map((data, key) => {
            return data.type === "Bar" ? (
              <BarChart key={key} data={data.elements} dataId={key} />
            ) : (
              <PieChart key={key} data={data.elements} dataId={key} />
            );
          })
        : "No Data Available to show"}
    </Grid>
  );
};

export default Dashboard;
