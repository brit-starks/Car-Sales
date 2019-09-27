import { useReducer } from 'react';

const initialState = {
  propOne: '',
  propTwo: '',
  PropThree: ''
};

export const Reducer = (state = initialState, action) => {
  console.log(action);
  switch(action.type){
    default: 
    return state;
  }
}