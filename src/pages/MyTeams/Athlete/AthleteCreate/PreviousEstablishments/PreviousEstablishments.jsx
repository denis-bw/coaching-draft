import React, { useState, useRef } from 'react';
import {
  Container,
  InstitutionsList,
  InstitutionItem,
  InstitutionDetails,
  DetailRow,
  RemoveButton,
  FormGrid,
  ColumnGrid,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
  AddButton,
  ButtonWrapper,
  DateInputWrapper,
  DateInputGroup,
  EmptyState,
  InstitutionsListContainer,
} from './PreviousEstablishments.styled';

const PreviousEstablishments = () => {
  const [institutions, setInstitutions] = useState([]);
  const [currentInstitution, setCurrentInstitution] = useState({
    coachName: '',
    institution: '',
    coachContacts: '',
    entryDate: '',
    exitDate: ''
  });

  const [errors, setErrors] = useState({});

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
    }
  };

  const validateInstitution = () => {
    const newErrors = {};

    if (!currentInstitution.coachName.trim()) {
      newErrors.coachName = "Ім'я тренера є обов'язковим";
    } else if (currentInstitution.coachName.length > 50) {
      newErrors.coachName = "Ім'я тренера не може перевищувати 50 символів";
    }

    if (currentInstitution.institution && currentInstitution.institution.length > 100) {
      newErrors.institution = "Назва закладу не може перевищувати 100 символів";
    }

    if (currentInstitution.coachContacts && currentInstitution.coachContacts.length > 100) {
      newErrors.coachContacts = "Контакти не можуть перевищувати 100 символів";
    }

    if (currentInstitution.entryDate && currentInstitution.exitDate &&
        currentInstitution.exitDate < currentInstitution.entryDate) {
      newErrors.exitDate = "Дата виходу не може бути раніше дати вступу";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const addInstitution = () => {
    if (validateInstitution()) {
      const updatedInstitutions = [
        ...institutions, 
        { 
          ...currentInstitution,
          id: Date.now()
        }
      ];

      setInstitutions(updatedInstitutions);

 
      setCurrentInstitution({
        coachName: '',
        institution: '',
        coachContacts: '',
        entryDate: '',
        exitDate: ''
      });
      setErrors({});
    }
  };

 
  const removeInstitution = (idToRemove) => {
    const updatedInstitutions = institutions.filter(
      (institution) => institution.id !== idToRemove
    );

    setInstitutions(updatedInstitutions);
  };

  const updateCurrentInstitution = (field, value) => {
    setCurrentInstitution(prev => ({
      ...prev,
      [field]: value
    }));

    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  return (
    <Container>
      {institutions.length === 0 ? (
        <EmptyState>Додайте інформацію</EmptyState>
          ) : ( <InstitutionsListContainer>
        
        <InstitutionsList $hasInstitutions={institutions.length > 0}>
          {institutions.map((institution) => (
            <InstitutionItem key={institution.id}>
              <InstitutionDetails>
                <DetailRow>
                  <strong>Тренер:</strong> 
                  <span>{institution.coachName}</span>
                </DetailRow>
                <DetailRow>
                  <strong>Заклад:</strong> 
                  <span>{institution.institution || 'Без назви'}</span>
                </DetailRow>
                <DetailRow>
                  <strong>Контакти:</strong> 
                  <span>{institution.coachContacts || 'Не вказано'}</span>
                </DetailRow>
                <DetailRow>
                  <strong>Період:</strong> 
                  <span>
                    {institution.entryDate} - {institution.exitDate || 'дотепер'}
                  </span>
                </DetailRow>
              </InstitutionDetails>
              <RemoveButton onClick={() => removeInstitution(institution.id)}>
                ✕
              </RemoveButton>
            </InstitutionItem>
          ))}
        </InstitutionsList>
       </ InstitutionsListContainer>
      )}

      <FormGrid>
        <ColumnGrid>
          <InputGroup>
            <Label>
              Минулий Тренер * 
              {errors.coachName && (
                <ErrorMessage>{errors.coachName}</ErrorMessage>
              )}
            </Label>
            <Input 
              type="text"
              onKeyDown={handleKeyDown} 
              value={currentInstitution.coachName}
              onChange={(e) => updateCurrentInstitution('coachName', e.target.value)}
              placeholder="Введіть ім'я тренера"
              $error={errors.coachName}
            />
          </InputGroup>

          <InputGroup>
            <Label>
              Минулий спортивний заклад
              {errors.institution && (
                <ErrorMessage>{errors.institution}</ErrorMessage>
              )}
            </Label>
            <Input 
              type="text"
              onKeyDown={handleKeyDown} 
              value={currentInstitution.institution}
              onChange={(e) => updateCurrentInstitution('institution', e.target.value)}
              placeholder="Введіть назву закладу"
              $error={errors.institution}
            />
          </InputGroup>
        </ColumnGrid>

        <ColumnGrid>
          <InputGroup>
            <Label>
              Контакти тренера
              {errors.coachContacts && (
                <ErrorMessage>{errors.coachContacts}</ErrorMessage>
              )}
            </Label>
            <Input 
              type="text"
              onKeyDown={handleKeyDown} 
              value={currentInstitution.coachContacts}
              onChange={(e) => updateCurrentInstitution('coachContacts', e.target.value)}
              placeholder="Введіть контакти тренера"
              $error={errors.coachContacts}
            />
          </InputGroup>

          <DateInputWrapper>
            <DateInputGroup>
              <Label>Дата вступу</Label>
              <Input 
                type="date"
                value={currentInstitution.entryDate}
                onChange={(e) => updateCurrentInstitution('entryDate', e.target.value)}
              />
            </DateInputGroup>

            <DateInputGroup>
              <Label>
                Дата залишення 
                {errors.exitDate && (
                  <ErrorMessage>{errors.exitDate}</ErrorMessage>
                )}
              </Label>
              <Input 
                type="date"
                value={currentInstitution.exitDate}
                onChange={(e) => updateCurrentInstitution('exitDate', e.target.value)}
                min={currentInstitution.entryDate}
                $error={errors.exitDate}
              />
            </DateInputGroup>
          </DateInputWrapper>
        </ColumnGrid>
      </FormGrid>

      <ButtonWrapper>
        <AddButton 
          type='button' 
          onClick={addInstitution}
        >
          Додати 
        </AddButton>
      </ButtonWrapper>
    </Container>
  );
};

export default PreviousEstablishments;
