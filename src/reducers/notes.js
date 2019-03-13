import {
    FETCH_NOTES,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAILURE,
} from '../actions/index'

const initialNotes = [{
    title: 'Beginning',
    body: 'Helper React file',
}];

export function notesReducer(state = initialNotes, action) {
    switch (action.type) {
        case FETCH_NOTES:
            return state;
        case FETCH_NOTES_SUCCESS:
            return {
                ...state,
                week: action.payload
            };
        case FETCH_NOTES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}