import {SET_250MOVIES} from './generalReducerTypes';
import {get250MoviesList} from '../../helpers/request';

export const set250Movies = (payload) => {
    return {
      type: SET_250MOVIES,
      payload,
    }
  }

export const fetch250Movies = () =>{
  return async (dispatch) =>{
    const res = await get250MoviesList();
    dispatch(set250Movies({data :res.items}));
  }
}


