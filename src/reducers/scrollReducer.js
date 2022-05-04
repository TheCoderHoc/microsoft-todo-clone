import { createRef } from "react";

const initialState = {
    scrollRef: createRef(null),
};

const scrollReducer = (state = initialState, action) {
    switch(action.type){
        case 'SCROLL_BOTTOM':
            return {...state, scrollRef: }
    }
}