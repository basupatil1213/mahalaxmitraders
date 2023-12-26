import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        product: {},
        loading: false,
        error: null,
        searchTerm: "",
        filters: ""
    },
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setProduct(state, action) {
            state.product = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setFilters(state, action) {
            state.filters = action.payload;
        }
    }
});

export const { setProducts, setProduct, setLoading, setError, setSearchTerm, setFilters } = productSlice.actions;
export default productSlice;