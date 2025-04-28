
import { setIsLoggedIn } from '../redux/auth/authSlice'; 
import { resetAllData } from '../redux/resetActions';

export const requestWrapper = async (requestFn, dispatch) => {
  try {
    const result = await requestFn();
    return result;
  } catch (error) {
    if (error.response?.status === 401) {
        dispatch(resetAllData()); 
        dispatch(setIsLoggedIn({ isLoggedIn: false, token: null, isErrorAuthorized: true }));
    }   
    throw error;
  }
};