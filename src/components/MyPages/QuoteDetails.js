import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const test = [
  { id: "q1", author: "Gurvinder", text: "Learning React is so Much Fun" },
  { id: "q2", author: "Sran Sahab", text: "Every Day is a Lovely Day" },
];
const QuoteDetails = () => {
  const param = useParams();
  const quote = test.find((quote) => quote.id === param.quoteId);

  if (!quote) {
    return <h1>No Quote Found</h1>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
