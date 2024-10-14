import { useSelector } from "react-redux";
import Counter from "./counter";

function App() {
  const counterInitState = useSelector((state) => state.counters);

  

  return (
    <>
      {counterInitState.map((counter) => (
        <Counter counter={counter} />
      ))}
    </>
  );
}

export default App;
