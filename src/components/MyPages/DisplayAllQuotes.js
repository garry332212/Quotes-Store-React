import React from "react";
import QuoteList from "../quotes/QuoteList";

const test = [
  { id: "q1", author: "Gurvinder", text: "Learning React is so Much Fun" },
  { id: "q2", author: "Sran Sahab", text: "Every Day is a Lovely Day" },
];
export const DisplayAllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={test} />
    </div>
  );
};
