import React, { useState, useEffect } from 'react';
import FormDatePicker from './FormDatePicker'; 
import {
  Container,
  InstitutionsList,
  FormGrid,
  ColumnGrid,
  InputGroup,
  Input,
  ErrorMessage,
  AddButton,
  ButtonWrapper,
  DateInputWrapper,
  DateInputGroup,
  EmptyState,
  InstitutionsListContainer,
  ContainerList,
  InstitutionItem, 
  InstitutionHeader, 
  Label, 
  RemoveButton,
  DeleteIcon,
  ContentContainer,
  LabelCard,
  InfoBlock,
  Value,
  TextTitle,
} from './PreviousEstablishments.styled';
import ErrorTooltip from '../../../../../components/ErrorTooltip/ErrorTooltip';

const PreviousEstablishments = ({ onDataUpdate }) => {
  const [institutions, setInstitutions] = useState([]);
  const [currentInstitution, setCurrentInstitution] = useState({
    coachName: '',
    institution: '',
    coachContacts: '',
    entryDate: '',
    exitDate: ''
  });

  const [errors, setErrors] = useState({});

  const maxLength = 100;

  useEffect(() => {
    
    const formattedData = institutions.map(inst => ({
      previousCoach: inst.coachName,
      previousInstitution: inst.institution || '',
      coachContacts: inst.coachContacts || '',
      entryDate: inst.entryDate || '',
      exitDate: inst.exitDate || ''
    }));
    
    onDataUpdate(formattedData);
  }, [institutions, onDataUpdate]);


  const validateInstitution = () => {
    const newErrors = {};

    if (!currentInstitution.coachName.trim()) {
      newErrors.coachName = "Ім'я тренера є обов'язковим";
    }

    
    if (currentInstitution.entryDate && currentInstitution.exitDate) {
      const entryDate = new Date(currentInstitution.entryDate);
      const exitDate = new Date(currentInstitution.exitDate);
      

      const timeDiff = exitDate.getTime() - entryDate.getTime();
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      if (diffDays < 0) { // Змінено з <= 0 на < 0, щоб дозволити однакові дати
        newErrors.exitDate = "Дата виходу має бути не раніше дати вступу";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addInstitution = () => {
    if (validateInstitution()) {
      const newInstitution = {
      ...currentInstitution,
      coachName: currentInstitution.coachName.trim(),
      institution: currentInstitution.institution.trim(),
      coachContacts: currentInstitution.coachContacts.trim(),
      id: Date.now() 
    };

      setInstitutions(prev => [...prev, newInstitution]);

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
    setInstitutions(prev => 
      prev.filter(institution => institution.id !== idToRemove)
    );
  };

  const updateCurrentInstitution = (field, value) => {
    setCurrentInstitution(prev => ({
      ...prev,
      [field]: value
    }));

   
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    
    if (field === 'entryDate' && currentInstitution.exitDate) {
      const entryDate = new Date(value);
      const exitDate = new Date(currentInstitution.exitDate);
      
      const timeDiff = exitDate.getTime() - entryDate.getTime();
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      if (diffDays < 0) { 
        setErrors(prev => ({
          ...prev,
          exitDate: "Дата виходу з закладу має бути не раніше дати вступу"
        }));
      } else {
        if (errors.exitDate) {
          setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors.exitDate;
            return newErrors;
          });
        }
      }
    }
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      return date.toLocaleDateString('uk-UA');
    } catch {
      return dateString;
    }
  };
  
  return (
     <Container>
      {institutions.length === 0 ? (
        <EmptyState>Додайте інформацію</EmptyState>
      ) : (
        <ContainerList>
          <InstitutionsListContainer>
            <InstitutionsList $hasInstitutions={institutions.length > 0}>
                {institutions.map((institution) => (
                 
                  <InstitutionItem key={institution.id}>
                    <InstitutionHeader>
                      <TextTitle>Вказана інформація</TextTitle>
                      <RemoveButton
                        onClick={() => removeInstitution(institution.id)}
                        aria-label="Видалити заклад"
                      >
                        <DeleteIcon />
                      </RemoveButton>
                    </InstitutionHeader>
                    
                    <ContentContainer>
    
                      
                        <InfoBlock>
                          <Value><LabelCard>Тренер: </LabelCard> {institution.coachName}</Value>
                        </InfoBlock>
                        <InfoBlock>
                          <Value><LabelCard>Заклад: </LabelCard>{institution.institution.trim() ? institution.institution : 'Не вказано'}</Value>
                        </InfoBlock>
                        <InfoBlock>
                          <Value><LabelCard>Контакти: </LabelCard> {institution.coachContacts.trim() ? institution.coachContacts : 'Не вказано'}</Value>
                        </InfoBlock>
                        <InfoBlock>
                          <LabelCard>Період:</LabelCard>
                          <Value>
                            {formatDateForDisplay(institution.entryDate) || 'Не вказано'} <span> - </span> 
                            {formatDateForDisplay(institution.exitDate) || 'Не вказано'}
                          </Value>
                        </InfoBlock>
                 
                    </ContentContainer>
                  </InstitutionItem>
              ))}
            </InstitutionsList>
          </InstitutionsListContainer>
        </ContainerList>
      
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
             
              value={currentInstitution.coachName}
              onChange={(e) => updateCurrentInstitution('coachName', e.target.value)}
              placeholder="Введіть ім'я тренера"
              maxLength={maxLength}
              $error={errors.coachName}
            />
          </InputGroup>

          <InputGroup>
            <Label>
              Минулий спортивний заклад
            </Label>
            <Input 
              type="text"
              
              value={currentInstitution.institution}
              onChange={(e) => updateCurrentInstitution('institution', e.target.value)}
              placeholder="Введіть назву закладу"
              maxLength={maxLength}
            />
          </InputGroup>
        </ColumnGrid>

        <ColumnGrid>
          <InputGroup>
            <Label>
              Контакти тренера
            </Label>
            <Input 
              type="text"
             
              value={currentInstitution.coachContacts}
              onChange={(e) => updateCurrentInstitution('coachContacts', e.target.value)}
              placeholder="Введіть контакти тренера"
              maxLength={maxLength}
            />
          </InputGroup>

          <DateInputWrapper>
            <DateInputGroup>
              <Label>Дата вступу</Label>
              <FormDatePicker
                value={currentInstitution.entryDate}
                onChange={(value) => updateCurrentInstitution('entryDate', value)}
                placeholder="Оберіть дату вступу"
              />
            </DateInputGroup>

            <DateInputGroup>
              <Label>
                Дата виходу 
                {errors.exitDate && (
                  <ErrorTooltip
                    title="Неправильно введені дані"
                    text={errors.exitDate}
                  />
                )}
              </Label>
              <FormDatePicker
                value={currentInstitution.exitDate}
                onChange={(value) => updateCurrentInstitution('exitDate', value)}
                placeholder="Оберіть дату виходу"
                minDate={currentInstitution.entryDate}
                hasError={!!errors.exitDate}
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