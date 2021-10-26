import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index.js';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounterHandler() )
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={() => dispatch(counterActions.increment())}>increment</button>
        <button onClick={() => dispatch(counterActions.increase(5)) }>increase by 5</button>
        <button onClick={() => dispatch(counterActions.decrement() )}>decrement</button></div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
