import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { DisplayAllQuotes } from "./components/MyPages/DisplayAllQuotes";
import NewAddedQuote from "./components/MyPages/NewAddedQuote";
import QuoteDetails from "./components/MyPages/QuoteDetails";
import Layout from "./components/layout/Layout";
import PageNotFound from "./components/MyPages/PageNotFound";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <DisplayAllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/addnew">
          <NewAddedQuote />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
