import {
    GET_TASKS,
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
} from "../types/tasks.types";

const initialState = {
    tasks: [],
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            let tasksLS;

            if (localStorage.getItem("tasks")) {
                tasksLS = JSON.parse(localStorage.getItem("tasks"));
            } else {
                tasksLS = [];
            }

            return { ...state, tasks: tasksLS };
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case DELETE_TASK:
            const newTasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );

            return { ...state, tasks: [...newTasks] };
        default:
            return state;
    }
};

export default tasksReducer;
