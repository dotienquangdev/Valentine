const init = [
    {
        id: 1,
        content: "Công Việc_1",
        completed: true
    },
    {
        id: 2,
        content: "Công Việc_2",
        completed: false
    },

    {
        id: 3,
        content: "Công Việc_3",
        completed: false
    }
]
const todosReducer = (state = init, action) => {
    let newState = [...state];

    console.log(state, action);
    switch (action.type) {
        case "CREATE_TODO":
            newState = [
                ...state,
                {
                    id: Date.now(),
                    content: action.content,
                    completed: false
                }
            ];
            return newState;
        case "COMPLETE_TODO":
            const indexCompleted = newState.findIndex(item => {
                return item.id === action.id;
            });
            newState[indexCompleted].completed = true;
            return newState;

        case "UNDO_TODO":
            const indexUndo = newState.findIndex(item => {
                return item.id === action.id;
            });
            newState[indexUndo].completed = false;

            return newState;

        case "DELETE_TODO":
            newState = newState.filter(item => {
                return item.id !== action.id;
            });

        default:
            return newState;
    }
}

export default todosReducer;