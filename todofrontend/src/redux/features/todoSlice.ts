import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type TTodo ={
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean
}

type TinialState ={
    todos : TTodo[];
};


const initialState : TinialState ={
    todos:[],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action : PayloadAction<TTodo>) =>{
            state.todos.push({ ...action.payload, isCompleted: false})
        },
        removeTodo: (state, action) =>{
            state.todos.filter((item) => item.id !== action.payload);
        }
    },
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;