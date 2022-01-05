import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Coinpage from "./pages/CoinPage";
import Homepage from "./pages/Homepage";
import Alert from "./components/Alert";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/coins/:id" element={<Coinpage />} />
          </Routes>
        </div>
        <Alert />
      </BrowserRouter>
    </div>
  );
}

export default App;
