import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions/tasks.actions";
import { BsCircle } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./AddTask.css";

const AddTask = ({ addTask }) => {
    const [task, setTask] = useState("");
    const [toggleIcon, setToggleIcon] = useState(false);

    const [tasksLS, setTasksLS] = useLocalStorage("tasks");

    const handleFocus = () => {
        setToggleIcon(!toggleIcon);
    };

    const handleSubmit = (e) => {
        // prevent form default behaviour which is to submit
        e.preventDefault();

        // create a new task
        const newTask = {
            id: Math.floor(Math.random() * 10000000),
            title: task,
            description: "",
            completed: false,
            createdAt: new Date(),
        };

        // add task to ui
        addTask(newTask);

        // save task to local storage
        setTasksLS(newTask);

        setTask("");
    };

    return (
        <div className="AddTask">
            <form className="AddTask__form" onSubmit={handleSubmit}>
                {toggleIcon ? <BsCircle size={25} /> : <AiOutlinePlus />}
                <input
                    type="text"
                    placeholder="Add a task"
                    className="AddTask__input"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                />
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newTask) => dispatch(addTask(newTask)),
    };
};

export default connect(null, mapDispatchToProps)(AddTask);
