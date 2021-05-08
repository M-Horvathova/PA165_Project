import { FC } from "react";
import Container from "@material-ui/core/Container";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Route, Redirect, Switch, HashRouter } from "react-router-dom";

import Hidden from "@material-ui/core/Hidden";
import About from "./pages/About";
import BasicMenu from "./components/BasicMenu";
import Houses from "./pages/Houses";
import MenuDrawerLeft from "./components/MenuDrawerLeft";
import Login from "./pages/Login";
import HousePage from "./pages/HousePage";
import EditHouse from "./pages/EditHouse";
import AddHouse from "./pages/AddHouse";
import ProtectedRoute from "./components/ProtectedRoute";
import Config from "./utils/Config";
import Dashboard from "./pages/Dashboard";

/*
  author: Michaela Horváthová
*/
const ourTheme = createMuiTheme({});
const App: FC = () => {
    return (
        <MuiThemeProvider theme={ourTheme}>
            <HashRouter>
                <Hidden xsDown>
                    <BasicMenu />
                </Hidden>
                <Hidden smUp>
                    <MenuDrawerLeft />
                </Hidden>
                <main className="App" style={{ marginTop: 50 }}>
                    <Container maxWidth="lg">
                        <Switch>
                            <Route exact path="/about" component={About} />
                            <Route exact path="/login" component={Login} />
                            <ProtectedRoute
                                role="User"
                                exact
                                path={Config.userHome}
                                component={Houses}
                            />
                            <ProtectedRoute
                                role="Administrator"
                                exact
                                path={Config.adminHome}
                                component={Dashboard}
                            />
                            <ProtectedRoute
                                role="User"
                                exact
                                path="/house/edit/:id"
                                component={EditHouse}
                            />
                            <ProtectedRoute
                                role="User"
                                exact
                                path="/house/create"
                                component={AddHouse}
                            />
                            <ProtectedRoute
                                role="User"
                                exact
                                path="/house/:id"
                                component={HousePage}
                            />
                            <Redirect from="/" to="/houses" />
                        </Switch>
                    </Container>
                </main>
            </HashRouter>
        </MuiThemeProvider>
    );
};

export default App;
