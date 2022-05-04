import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Wrapper from "../../components/Wrapper/Wrapper";
import Task from "../../components/Task/Task";
import "./TaskView.css";
import { getTasks } from "../../actions/tasks.actions";

const TaskView = (props) => {
    return (
        <Wrapper categoryName="Tasks">
            <div className="TaskView">
                <div className="TaskView__task-list">
                    {props.tasks.map((task) => (
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



export default connect(mapStateToProps, null)(TaskView);
