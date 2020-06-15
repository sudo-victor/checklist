interface Action {
    type: string;
    payload: object;
}

export default function checklist(state = [], action: Action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                { id: String(Math.random()), text: action.payload.text },
            ];

        default:
            return state;
    }
}
