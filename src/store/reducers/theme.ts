/* eslint-disable indent */
const INITIAL_STATE = {
    name: 'dark',
};

interface Action {
    type: string;
    payload: {
        name: string;
    };
}

export default function theme(state = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case 'UPDATE_THEME':
            const newState = { ...state };
            newState.name = action.payload.name;
            return newState;

        default:
            return state;
    }
}
