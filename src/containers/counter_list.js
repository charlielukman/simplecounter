import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const CounterList = ({ addCounter, increaseCounter, decreaseCounter, counters }) => (
  <div>
    {counters.map(counter => (
      <div>
        <h6>Counter {counter.id + 1}</h6>
        <div key={counter.id}>
          <button onClick={(e) => decreaseCounter(counter.id, counter.value)}>-</button>
            <span>{counter.value}</span>
          <button onClick={(e) => increaseCounter(counter.id, counter.value)}>+</button>
        </div>
      </div>
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    counters: state.counters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterList);
