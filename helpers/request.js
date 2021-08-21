import Wrap from './axiosWrapper';
import {API_KEY} from '../shared/constants'

export const get250MoviesList = (params = {}) => {
  return Wrap({
    url: `/en/API/Top250Movies/${API_KEY}`,
    method: 'GET',
    params : {...params},
  });
};

export const getTrailerBanner = (params = {}) =>{
  return Wrap({
    url: `/en/API/Trailer/${API_KEY}/tt11032374`,
    method: 'GET',
    params : {...params},
  });
}

export const getMovieDetail = (params = {}) =>{
  return Wrap({
    url: `/en/API/Title/${API_KEY}/${params.id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`,
    method: 'GET',
    params : {...params},
  });
}



