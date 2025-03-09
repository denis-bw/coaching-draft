import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginUser } from '../../redux/auth/authOperations';
import { clearError } from '../../redux/auth/authSlice'; 
import GoogleAuthButton from './GoogleAuthButton/GoogleAuthButton';

import {
  Container,
  FormCard,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  LoginButton,
  BottomText,
  StyledLink,
  ForgotPassword,
  TogglePasswordButton,
  ErrorText,
  ForgotPasswordWrapper,
} from './LoginPage.styled';

import HeaderForUnlogged from '../../components/HeaderForUnlogged/HeaderForUnlogged';
import { ToastContainer,toast } from 'react-toastify';
import { setIsErrorAuthorized } from '../../redux/auth/authSlice';
import { useLocation } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { error, isLoading, isErrorAuthorized } = useSelector((state) => state.auth);
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  useEffect(() => {
    if (isErrorAuthorized) {
    toast.error(`Час сеансу закінчився. Будь ласка, увійдіть ще раз.`, {
      position: 'top-right',
      autoClose: 3000,
    });
    dispatch(setIsErrorAuthorized(false));
  }
  }, []);
  
  useEffect(() => {
    if (location.state?.toastMessage) {
        toast.success(location.state.toastMessage);
    }
  }, [location.state]);
  
  useEffect(() => {    
    if (error) {
      dispatch(clearError());
    }
  }, [dispatch]);
  
  useEffect(() => {
    
  const savedEmail = localStorage.getItem('loginFormData') || '';
  if (savedEmail) {
    setFormData((prevState) => ({
      ...prevState,
      email: savedEmail,
    }));
  }
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      localStorage.setItem('loginFormData', value);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLoginUser(formData))
      .catch((err) => {
        console.error('Помилка входу: ', err);
      });
  };

  return (
    <>
      <ToastContainer />
      <HeaderForUnlogged/>

      <Container>
        <FormCard>
          <Title>Вхід</Title>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                maxLength={40}
                placeholder="Введіть email"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Пароль</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Введіть пароль"
                  required
                  minLength={6}
                  maxLength={20}
                />
                <TogglePasswordButton type="button" onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? 'Сховати' : 'Показати'}
                </TogglePasswordButton>
              </div>
            </FormGroup>

             <ForgotPasswordWrapper> <ForgotPassword to="/forgot-password">Забули пароль?</ForgotPassword> </ForgotPasswordWrapper> 

            <LoginButton type="submit" disabled={isLoading}>
              {isLoading ? 'Завантаження...' : 'Увійти'}
            </LoginButton>
          </Form>
          <GoogleAuthButton/>
          {error && <ErrorText>{error}</ErrorText>}
          <BottomText>
            Немає акаунту? <StyledLink to="/register">Зареєструватися</StyledLink>
          </BottomText>
        </FormCard>
      </Container>
    </>
  );
};

export default LoginPage;
