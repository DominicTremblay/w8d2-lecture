export const ADD_SUPERHERO = 'ADD_SUPERHERO';

const dataReducer = (state, action) => {
  // console.log(action); 

  const actions = {
    ADD_SUPERHERO: {
      ...state,
      loading: false,
      superheros: [...state.superheros, action.superhero],
    },
  };

  return actions[action.type] || new Error(`Unknown action type: ${action}`);
};

export default dataReducer;
