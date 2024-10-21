import { configureStore} from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filterSlice";
import todoSlice from "../components/TodoList/todoSlice";

const store = configureStore({
    reducer :{
        filters: filtersSlice.reducer,
        todoList: todoSlice.reducer,
    }
});
export default store;
