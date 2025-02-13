import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
    ErrorText,
    Description,
    PasswordRequirement,
    RequirementItem,
    TogglePasswordButton,
    LinkToLoginPahe
} from './ResetPasswordPage.styled';

import { fetchResetPassword } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, clearMessage } from '../../redux/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';

const ResetPasswordPage = () => {
    const dispatch = useDispatch();  
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordC, setShowPasswordC] = useState(false);

    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const token = queryParams.get('token');
        
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { error, successMessage, isLoading } = useSelector(state => state.auth);
    
    
    useEffect(() => {
        if (error) {
            dispatch(clearError());
        }
    }, [dispatch]);

    useEffect(() => {
        if (successMessage) {
        toast.success(successMessage);
        dispatch(clearMessage());
        }
    }, [successMessage, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'newPassword') {
        setNewPassword(value);
        } else if (name === 'confirmPassword') {
        setConfirmPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
        toast.error('Паролі не співпадають');
        return;
        }
        if (!email) {
            toast.error('Email не надано у запиті');
            return;
        }

        try {
        await dispatch(fetchResetPassword({ email, token, newPassword })).unwrap();
        setNewPassword('');
        setConfirmPassword('');
        } catch (err) {
        console.error('Помилка при скиданні паролю:');
        }
    };

    return (
        <>
        <ToastContainer />
        <HeaderForUnlogged />
        <Container>
            <FormCard>
            <Title>Створити новий пароль</Title>
            <Description>
                Введіть новий пароль і підтвердьте його.
            </Description>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label htmlFor="newPassword">Новий пароль</Label>
                <div style={{ position: 'relative' }}>
                <Input
                    id="newPassword"
                    name="newPassword"
                    type={showPassword ? 'text' : 'password'} 
                    value={newPassword}
                    onChange={handleChange}
                    minLength={6}
                    maxLength={25}
                    placeholder="Пароль"
                    required
                />
                <TogglePasswordButton type="button" onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? 'Сховати' : 'Показати'}
                </TogglePasswordButton>
                </div>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="confirmPassword">Підтвердити пароль</Label>
                <div style={{ position: 'relative' }}>
                <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPasswordC ? 'text' : 'password'} 
                    value={confirmPassword}
                    minLength={6}
                    maxLength={25}
                    onChange={handleChange}
                    placeholder="Пароль"
                    required
                />
                <TogglePasswordButton type="button" onClick={() => setShowPasswordC(prev => !prev)}>
                    {showPasswordC ? 'Сховати' : 'Показати'}
                </TogglePasswordButton>
                </div>
                    <PasswordRequirement>
                        <RequirementItem>Мінімум 6 символів</RequirementItem>
                        </PasswordRequirement>
                    {error && <ErrorText > {error}</ErrorText>} 
                </FormGroup>
                <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? 'Завантаження...' : 'Створити пароль'}
                </SubmitButton>
                <LinkToLoginPahe to="/login">Прейти до входу</LinkToLoginPahe>
            </Form>
            </FormCard>
        </Container>
        </>
    );
};

export default ResetPasswordPage;
