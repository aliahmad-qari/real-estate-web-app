import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  selectedType: "all",
  selectedPurpose: "all",
  priceRange: "all",
  filteredProperties: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    setSelectedPurpose: (state, action) => {
      state.selectedPurpose = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setFilteredProperties: (state, action) => {
      state.filteredProperties = action.payload;
    },
    resetFilters: (state) => {
      state.searchTerm = "";
      state.selectedType = "all";
      state.selectedPurpose = "all";
      state.priceRange = "all";
    },
  },
});

export default filterSlice.reducer;

export const filterStore = (state) => state.filter;

export const {
  setSearchTerm,
  setSelectedType,
  setSelectedPurpose,
  setPriceRange,
  setFilteredProperties,
  resetFilters,
} = filterSlice.actions;
