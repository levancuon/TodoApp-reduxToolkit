import {createSlice} from "@reduxjs/toolkit";

export default createSlice({
    name: 'todoList',
    initialState:
        [
    {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
    {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
    {id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low'}
]
    ,
    reducers: {
        addTodoAction: (state, action) => {
            state.push (action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.filter(todo=>todo.id===action.payload);
            currentTodo.completed= !currentTodo.completed
        },

    }
})
