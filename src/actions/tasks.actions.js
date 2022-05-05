import {
    GET_TASKS,
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
} from "../types/tasks.types";

export const getTasks = () => {
    return {
        type: GET_TASKS,
    };
};

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task,
    };
};

export const editTask = (id) => {
    return {
        type: EDIT_TASK,
        payload: id,
    };
};

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    };
};

