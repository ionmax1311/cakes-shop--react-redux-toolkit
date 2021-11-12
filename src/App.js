import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page";
import { CakePage } from "./pages/cake-page";
import { OrderPage } from "./pages/order-page";
import { WishPage } from "./pages/wish-page";
import { Header } from "./components/header";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/cake/:title">
              <CakePage />
            </Route>
            <Route exact path="/order">
              <OrderPage />
            </Route>
            <Route exact path="/wish">
              <WishPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
