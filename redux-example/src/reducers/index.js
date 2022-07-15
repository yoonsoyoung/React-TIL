import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

const reducer = combineReducers ({
  counter, ui
});

export default reducer;