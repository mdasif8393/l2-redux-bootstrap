import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "asdadaf",
      title: "Initialize Frontend",
      description: "Create Home Page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "agedadaf",
      title: "Initialize Backend",
      description: "Create data",
      dueDate: "2025-15",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => state.todo.tasks;
export const selectFilter = (state: RootState) => state.todo.filter;

export default taskSlice.reducer;
