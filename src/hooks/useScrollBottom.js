import { createRef } from "react";

const useScrollToBottom = () => {
    const elRef = createRef(null);

    return [elRef, scrollTo];
};

const useScrollRef = (elRef) => {
    return elRef;
};
