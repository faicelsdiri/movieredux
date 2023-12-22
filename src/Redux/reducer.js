import { GET_MOVIE ,ADD_MOVIE } from "./actionType";

const initialState = {
  movies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return { movies: action.payload };
    case ADD_MOVIE:
      return {...state, movies: [...state.movies,action.payload] };

    default:
      return state;
  }
};
export default reducer;
