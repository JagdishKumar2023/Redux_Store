import { legacy_createStore } from "redux";
import { searchReducer } from "./SearchBar/reducer";

export const store = legacy_createStore(searchReducer);
