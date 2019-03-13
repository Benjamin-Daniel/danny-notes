export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';



export const fetchNotes = () => ({
    type: FETCH_NOTES,
});

export const fetchNotesSuccess = (notes) => ({
    type: FETCH_NOTES_SUCCESS,
    payload: notes
});

export const fetchNotesFailure = (message) => ({
    type: FETCH_NOTES_FAILURE,
    payload: message
});