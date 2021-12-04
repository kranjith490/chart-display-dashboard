import { Fragment } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </Fragment>
  );
}

export default App;
