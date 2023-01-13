import "./App.css";
import { useReducer } from "react";
import tableReducer, { initialState } from "./reducer/table.reducer";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [state, dispatch] = useReducer(tableReducer, initialState);
  return (
    <div className="App">
      <Header />
      <Form {...{ dispatch }} />
      <Table {...{ state, dispatch }} />
    </div>
  );
}

export default App;
