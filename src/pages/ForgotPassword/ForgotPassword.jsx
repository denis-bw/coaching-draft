import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderForUnlogged from '../../components/HeaderForUnlogged/HeaderForUnlogged';
import {
  Container,
  FormCard,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  BackButton,
  ErrorText, 
  Description 
} from './ForgotPassword.styled';

import { fetchForgotPassword } from '../../redux/auth/authOperations';
import { useDispatch,useSelector } from 'react-redux';
import { clearError, clearMessage } from '../../redux/auth/authSlice';
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const { error, successMessage, isLoading } = useSelector((state) => state.auth);
    

    const navigate = useNavigate();
    
    useEffect(() => {
        if (error) { dispatch(clearError()); }
    }, [dispatch]);
    
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(clearMessage());
        }
    }, [successMessage]);
    
    useEffect(() => {
    
    const savedEmail = localStorage.getItem('forgotEmailFormData') || '';
    if (savedEmail) {
        setEmail(savedEmail);
    }
    }, []);
      
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        localStorage.setItem('forgotEmailFormData', value);
        setEmail(value)
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.removeItem('forgotEmailFormData');
        try {
            await dispatch(fetchForgotPassword(email)).unwrap(); 
            setEmail("");
        } catch (err) {
            console.error("Помилка при відправці запиту:", err);
        }
    };

    return (
    <>
        <HeaderForUnlogged />
        <Container>
        <FormCard>
            <Title>Відновлення паролю</Title>
            <Description>
            Після надсилання форми - на вашу електронну пошту прийде посилання 
            для створення нового паролю
            </Description>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Введіть ваш email"
                required
                />
                {error && <ErrorText>{error}</ErrorText>}
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? 'Завантаження...' : 'Відправити'}
            </SubmitButton>
                        
            <BackButton type="button" onClick={() => navigate(-1)}>
                Назад 
            </BackButton>
            </Form>
        </FormCard>
        </Container>
    </>
    );
};

export default ForgotPassword;