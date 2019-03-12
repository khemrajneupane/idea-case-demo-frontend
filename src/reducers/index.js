import { combineReducers } from 'redux';

import categoriess from './categories';

const xyz = () => (
    combineReducers({
        categoriess,
    })
);

export default xyz;
