import { useState } from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";
import { lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/styles";
import Home from "./Main/Home";
import Pages from "./screens/Pages/Index";
import Board from "./screens/Board/Index";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path={routes.page}>
            <Layout>
              <Pages />
            </Layout>
          </Route>
          <Route path={routes.board}>
            <Board />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
