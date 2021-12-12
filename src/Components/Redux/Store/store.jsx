import { createStore } from "redux"
import RootReducer from "../reducers/rootReducer"
import CardReducer from "../reducers/Card/cardReducer"
import reducer from "../reducers/Counter/counterReducer"

const store = createStore(RootReducer())

export default store