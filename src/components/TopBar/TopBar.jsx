import "./TopBar.css";
import { AiOutlineBulb } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const TopBar = ({ categoryName }) => {
    return (
        <div className="TopBar">
            <div className="TopBar__calendar">
                <h3 className="TopBar__categoryName">{categoryName}</h3>
                <p className="TopBar__date">Tuesday, March 1</p>
            </div>
            <div className="TopBar__options">
                <AiOutlineBulb size={22} />
                <BsThreeDots size={22} />
            </div>
        </div>
    );
};

export default TopBar;
