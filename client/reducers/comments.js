// reducer takes 2 things:
// #1 copy of current state of the store
// #2 action

function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.commentIndex),
        ...state.slice(action.commentIndex + 1)
      ];
    default:
      return state;
  }
  return state;
}

export default function comments(state = {}, action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      // reducer composition
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}
