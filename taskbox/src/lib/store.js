import { configureStore, createSlice } from '@reduxjs/toolkit';

const defaultTasks = [
  { id: '1', title: 'something', state: 'TASK_INBOX' },
  { id: '2', title: 'something more', state: 'TASK_INBOX' },
  { id: '3', title: 'something else', state: 'TASK_INBOX' },
  { id: '4', title: 'something again', state: 'TASK_INBOX' },
];
const TaskBoxData = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};
const TaskSlice = createSlice({
  name: 'taskbox',
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.find(task => task.id === id);

      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
});

export const { updateTaskState } = TaskSlice.actions;

const store = configureStore({
  reducer: {
    taskbox: TaskSlice.reducer,
  },
});

export default store;
