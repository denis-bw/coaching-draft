import React, { useState, useEffect } from 'react';
import {
  Container,
  InstitutionsList,
  FormGrid,
  InputGroup,
  Input,
  ErrorMessage,
  AddButton,
  ButtonWrapper,
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
} from './ParentsSection.styled'; 

const ParentsSection = ({ onDataUpdate }) => {
  const [parents, setParents] = useState([]);
  const [currentParent, setCurrentParent] = useState({
    name: '',
    contacts: '',
    relationship: ''
  });

  const [errors, setErrors] = useState({});

  const maxLength = 100;

  useEffect(() => {
    const formattedData = parents.map(parent => ({
      name: parent.name,
      contacts: parent.contacts || '',
      relationship: parent.relationship || '',
    }));
    
    onDataUpdate(formattedData);
  }, [parents, onDataUpdate]);

  const validateParent = () => {
    const newErrors = {};

    if (!currentParent.name.trim()) {
      newErrors.name = "Обов'язкове поле";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addParent = () => {
    if (validateParent()) {
      const newParent = {
        ...currentParent,
        name: currentParent.name.trim(),
        contacts: currentParent.contacts.trim(),
        relationship: currentParent.relationship.trim(),
        id: Date.now() 
      };

      setParents(prev => [...prev, newParent]);

      setCurrentParent({
        name: '',
        contacts: '',
        relationship: ''
      });
      setErrors({});
    }
  };

  const removeParent = (idToRemove) => {
    setParents(prev => 
      prev.filter(parent => parent.id !== idToRemove)
    );
  };

  const updateCurrentParent = (field, value) => {
    setCurrentParent(prev => ({
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
  };

  return (
    <Container>
      {parents.length === 0 ? (
        <EmptyState>Додайте інформацію</EmptyState>
      ) : (
        <ContainerList>
          <InstitutionsListContainer>
            <InstitutionsList $hasInstitutions={parents.length > 0}>
              {parents.map((parent) => (
                <InstitutionItem key={parent.id}>
                  <InstitutionHeader>
                    <TextTitle>Вказана інформація</TextTitle>
                    <RemoveButton
                      onClick={() => removeParent(parent.id)}
                      aria-label="Видалити запис"
                    >
                      <DeleteIcon />
                    </RemoveButton>
                  </InstitutionHeader>
                  
                  <ContentContainer>
                    <InfoBlock>
                      <Value><LabelCard>Ім'я: </LabelCard> {parent.name}</Value>
                    </InfoBlock>
                    <InfoBlock>
                      <Value><LabelCard>Контакти: </LabelCard> {parent.contacts.trim() ? parent.contacts : 'Не вказано'}</Value>
                    </InfoBlock>
                    <InfoBlock>
                      <Value><LabelCard>Ступінь спорідненості: </LabelCard> {parent.relationship.trim() ? parent.relationship : 'Не вказано'}</Value>
                    </InfoBlock>
                  </ContentContainer>
                </InstitutionItem>
              ))}
            </InstitutionsList>
          </InstitutionsListContainer>
        </ContainerList>
      )}

      <FormGrid>
        <InputGroup>
          <Label>
            Ім'я родича* 
            {errors.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </Label>
          <Input 
            type="text"
            value={currentParent.name}
            onChange={(e) => updateCurrentParent('name', e.target.value)}
            placeholder="Введіть ім'я"
            maxLength={maxLength}
            $error={errors.name}
          />
        </InputGroup>

        <InputGroup>
          <Label>
            Контакти родича *ф
          </Label>
          <Input 
            type="text"
            value={currentParent.contacts}
            onChange={(e) => updateCurrentParent('contacts', e.target.value)}
            placeholder="Введіть контактні дані"
            maxLength={maxLength}
          />
        </InputGroup>

        <InputGroup>
          <Label>
            Ступінь спорідненості
          </Label>
          <Input 
            type="text"
            value={currentParent.relationship}
            onChange={(e) => updateCurrentParent('relationship', e.target.value)}
            placeholder="Введіть ступінь спорідненості"
            maxLength={maxLength}
          />
        </InputGroup>
      </FormGrid>

      <ButtonWrapper>
        <AddButton 
          type='button' 
          onClick={addParent}
        >
          Додати 
        </AddButton>
      </ButtonWrapper>
    </Container>
  );
};

export default ParentsSection;