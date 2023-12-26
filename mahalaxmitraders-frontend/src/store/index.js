import {configureStore} from '@reduxjs/toolkit';
import productReducer from './slices/product-slice';

export default configureStore({
    reducer: {
        [productReducer.name] : productReducer.reducer
    }
});

// Path: mahalaxmitraders-frontend/src/store/index.js