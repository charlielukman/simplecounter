import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { addCounter } from '../actions'; 

const AddCounter = ({ dispatch }) => (
  <a href="" onClick={(e)=>{ 
    e.preventDefault(); 
    dispatch(addCounter()); }}
  >
    Add
  </a>
)

export default connect()(AddCounter);
