import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavourites from "../pages/PageFavourites";
import PageSearch from "../pages/PageSearch";
import { APP_FOLDER_NAME } from "../globals/globals";
import PageMovie from "../pages/PageMovie";
import "bootstrap/dist/css/bootstrap.min.css";

function AppRouter() {
  return (
    <Router basename={APP_FOLDER_NAME}>
      <div className="wrapper ">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <PageHome sort="popular" />
            </Route>
            <Route path="/sort/popular">
              <PageHome sort="popular" />
            </Route>
            <Route path="/sort/top-rated">
              <PageHome sort="top_rated" />
            </Route>
            <Route path="/sort/now-playing">
              <PageHome sort="now_playing" />
            </Route>
            <Route path="/sort/upcoming">
              <PageHome sort="upcoming" />
            </Route>
            <Route path="/about">
              <PageAbout />
            </Route>
            <Route path="/favs">
              <PageFavourites />
            </Route>
            <Route path="/movie/:id">
              <PageMovie />
            </Route>
            <Route path="/search/:term">
              <PageSearch />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
