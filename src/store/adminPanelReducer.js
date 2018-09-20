
const initialState = {
    book : {
        name : "",
        author : "",
        description: "",
        onStock: true,
        image: ""
    }
}

const adminPanelReducer = (state = initialState, action) => {

    console.log("Action received " + action.type);

    switch(action.type) {
        case 'UPDATE_BOOK':
            const book = action.payload;
            return {...state, book};
        default:
            return state;
    }
}

export default adminPanelReducer;