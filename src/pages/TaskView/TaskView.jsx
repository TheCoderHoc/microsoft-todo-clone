import { useEffect } from "react";
import { connect } from "react-redux";
import Wrapper from "../../components/Wrapper/Wrapper";
import Task from "../../components/Task/Task";
import "./TaskView.css";
import { getTasks } from "../../actions/tasks.actions";
import useLocalStorage from "../../hooks/useLocalStorage";

const TaskView = ({ tasks, getTasks }) => {
    const tasksLS = useLocalStorage("tasks");

    useEffect(() => {
        getTasks(tasksLS);
    }, [getTasks, tasksLS]);

    return (
        <Wrapper categoryName="Tasks">
            <div className="TaskView">
                <div className="TaskView__task-list">
                    {tasks.map((task) => (
                        <Task key={task.id} {...task} />
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTasks: (tasks) => dispatch(getTasks(tasks)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskView);
