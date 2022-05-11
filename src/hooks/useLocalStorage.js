import { useState, useEffect, useRef } from "react";

const useLocalStorage = (key) => {
    const [items, setItems] = useState([]);

    const didMount = useRef(false);

    useEffect(() => {
        if (localStorage.getItem(key)) {
            setItems(JSON.parse(localStorage.getItem(key)));
        } else {
            setItems([]);
        }
    }, [key]);

    useEffect(() => {
        if (!didMount.current) {
            return (didMount.current = true);
        }
        localStorage.setItem(key, JSON.stringify(items));
    }, [key, items]);

    const setLocalStorage = (value) => {
        setItems((prevItems) => {
            return [...prevItems, value];
        });
    };

    return [items, setLocalStorage];
};

export default useLocalStorage;
