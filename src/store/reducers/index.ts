import { combineReducers } from 'redux';

import checklist from './checklist';
import theme from './theme';

export default combineReducers({
    checklist,
    theme,
});
