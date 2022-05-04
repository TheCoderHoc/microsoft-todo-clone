import { BsCircle } from "react-icons/bs";
import "./Task.css";

const Task = ({ title }) => {
    return (
        <div className="Task">
            <div className="Task__completed-icon">
                <BsCircle size={20} />
            </div>
            <div className="Task__title">{title}</div>
        </div>
    );
};

export default Task;
