import { Container, Title, ContainerErrPage, ImgError } from './ErrorPage.styled';
import HeaderForUnlogged from '../../components/HeaderForUnlogged/HeaderForUnlogged';
import ErrorImg from "../../assets/error.png"; 
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ErrorPage = () => {
  const location = useLocation();
  
  localStorage.removeItem('lastPrivatePath');
  useEffect(() => {
     console.log(location.pathname)
    if (location.pathname === "/auth/error") {
      toast.error("Помилка авторизації. Користувача з такою поштою не знайдено.");
    }
  }, [location.pathname]);


  return (
  <>
    
    <ContainerErrPage>
    < HeaderForUnlogged/>
      <Container>
        <Title>Oops 404</Title>
        <ImgError src={ErrorImg} alt="error-img" />
      </Container>
    </ ContainerErrPage>
  </>
  );
};

export default ErrorPage;
