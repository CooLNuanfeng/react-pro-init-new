
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action){
      state.todos = [action.payload, ...state.todos]
    },
    updateTodo(state,action){
      state.todos = state.todos.map(todo => {
        if(todo.id === action.payload.id){
          todo.completed = !todo.completed
        }
        return todo
      })
    },
    deleteTodo(state,action){
      state.todos = state.todos.filter(todo=>todo.id !== action.payload.id)
    },
  }
})

export const { addTodo, updateTodo, deleteTodos } = todoSlice.actions

export default todoSlice.reducer
