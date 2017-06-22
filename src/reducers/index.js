// import product from './product';
// import shopcart from './shopcart';
import {default as product} from './product';
import {default as shopcart} from './shopcart';

import {combineReducers} from 'redux';

// export default combineReducers(
//     {
//         productStore: product,
//         shopcartStore: shopcart,
//     }
// );
module.exports = combineReducers(
    {
        productStore: product,
        shopcartStore: shopcart,
    }
);
