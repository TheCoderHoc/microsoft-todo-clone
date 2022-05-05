import { useState, useEffect } from "react";

const useLocalStorage = (item) => {
    const [itemsLS, setItemsLS] = useState([]);

    useEffect(() => {
        if (localStorage.getItem(item)) {
            setItemsLS(JSON.parse(localStorage.getItem(item)));
        } else {
            setItemsLS([]);
        }
    }, [item]);

    return itemsLS;
};

export default useLocalStorage;
