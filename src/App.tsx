import "./App.css";
import { Button } from "./components/ui/button";
import {
  decrement,
  decrementByPayload,
  increment,
  incrementByPayload,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state: RootState) => state.counter);

  return (
    <>
      <Button> Shadcn Button </Button>
      <h1>Content with Redux</h1>
      <button onClick={() => dispatch(incrementByPayload(5))}>
        Increment By 5
      </button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrementByPayload(5))}>
        Decrement By 5
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default App;
