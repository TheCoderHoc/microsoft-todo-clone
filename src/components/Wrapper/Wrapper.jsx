import "./Wrapper.css";
import TopBar from "../TopBar/TopBar";
import AddTask from "../../components/AddTask/AddTask";

const Wrapper = ({ categoryName, children }) => {
    return (
        <div className="Wrapper">
            <aside className="Wrapper__sidebar"></aside>

            <main className="Wrapper__main">
                <TopBar categoryName={categoryName} />

                {children}

                <AddTask />
            </main>
        </div>
    );
};

export default Wrapper;
