import { setIsLoggedIn } from '../redux/auth/authSlice';

export const requestWrapper = async (requestFn, dispatch) => {
    try {
        const result = await requestFn();
        return result;
    } catch (error) {
        if (error.response?.status === 401) {
            dispatch(setIsLoggedIn({isLoggedIn:false, token: false,isErrorAuthorized: true })); 
        }   
        throw error;
    }
};
