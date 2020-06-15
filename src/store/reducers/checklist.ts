interface Action {
    type: string;
    payload: State;
}
interface State {
    id: string;
    text: string;
}

let newState: State[];

export default function checklist(state: State[] = [], action: Action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                { id: String(Math.random()), text: action.payload.text },
            ];

        case 'REMOVE_ITEM':
            newState = state.filter((item) => item.id !== action.payload.id);
            return newState;

        default:
            return state;
    }
}
