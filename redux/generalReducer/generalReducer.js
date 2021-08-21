import {SET_250MOVIES} from './generalReducerTypes'

const initialState = {
    top250MoviesList : {
        data : [],
    },
}

const generalReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SET_250MOVIES: return {
            ...state,
            top250MoviesList: {
              ...state.top250MoviesList,
              ...action.payload,
            }
          }
        default : return state;
    }
}

export default generalReducer;