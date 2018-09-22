import {SEND_BOOK_TO_EDIT, UPDATE_BOOK} from './actions';

const initialState = {
    book : {
        name : "",
        author : "",
        description: "",
        onStock: true,
        image: ""
    },
    editMode : false,
    titleOfBookForRemoval: ""
}

const adminPanelReducer = (state = initialState, action) => {

    console.log("Action received " + action.type);

    switch(action.type) {
        case UPDATE_BOOK:
            const book = action.payload;
            return {...state, book};
        case SEND_BOOK_TO_EDIT:
            const bookToEdit = action.payload
            return { 
                ...state,
                book : {...bookToEdit},
                editMode: true,
                titleOfBookForRemoval: bookToEdit.name
            }
        default:
            return state;
    }
}

export default adminPanelReducer;