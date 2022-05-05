import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import TaskView from "./pages/TaskView/TaskView";
import "./App.css";

const App = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" index element={<Navigate to="/tasks" />} />
                <Route path="/tasks" element={<TaskView />} />
                <Route path="/tasks/:category" element={<TaskView />} />
            </Routes>
        </Provider>
    );
};

export default App;