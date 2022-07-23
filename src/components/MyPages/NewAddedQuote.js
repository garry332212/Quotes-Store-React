import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const NewAddedQuote = (props) => {
  const history = useHistory();
  const addNewQuote = (formData) => {
    console.log(formData);
    history.push("/quotes");
  };

  return (
    <div>
      <QuoteForm onAddQuote={addNewQuote} />
    </div>
  );
};

export default NewAddedQuote;
