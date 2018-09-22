export const UPDATE_BOOK = 'UPDATE_BOOK';
export const SEND_BOOK_TO_EDIT = 'SEND_BOOK_TO_EDIT';


export const updateBookAction = (book) => {
    return { 
        type: UPDATE_BOOK, 
        payload: book 
    }
}

export const sendBookToEditAction = (book) => { 
 return {
    type: SEND_BOOK_TO_EDIT,
    payload: book
 }
}