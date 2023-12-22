import { GET_MOVIE,ADD_MOVIE } from "./actionType";


export function get_movie(movie) {
    return {
        type: GET_MOVIE,
        payload: movie
    }
}
export function add_movie(movie) {
    return {
        type: ADD_MOVIE,
        payload: movie
    }
}