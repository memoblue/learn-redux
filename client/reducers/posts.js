// reducer takes 2 things:
// #1 copy of current state of the store
// #2 action

export default function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0, i), // everything before the one we're updating
        {
          ...state[i],
          likes: state[i].likes + 1,
        },
        ...state.slice(i + 1) // everything after
      ];
    default:
      return state;
  }
}
