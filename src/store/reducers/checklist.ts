/* eslint-disable indent */
interface Action {
    type: string;
    payload: Item;
}
interface Item {
    id: string;
    text: string;
}

let newState: Item[];

export default function checklist(state: Item[] = [], action: Action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                { id: String(Math.random()), text: action.payload.text },
            ];

        case 'REMOVE_ITEM':
            newState = state.filter((item) => item.id !== action.payload.id);
            return newState;

        case 'UPDATE_ITEM':
            newState = state.map((item) => {
                if (item.id === action.payload.id) {
                    const newItem = {
                        id: item.id,
                        text: action.payload.text,
                    };

                    return newItem;
                }

                return item;
            });
            return newState;

        default:
            return state;
    }
}
