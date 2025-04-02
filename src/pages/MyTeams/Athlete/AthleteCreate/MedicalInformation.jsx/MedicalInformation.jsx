import React, { useState, useEffect } from 'react';
import FormDatePicker from '../PreviousEstablishments/FormDatePicker'; 
import {
  Container,
  MedicalRecordsList,
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
  MedicalRecordsListContainer,
  ContainerList,
  MedicalRecordItem, 
  MedicalRecordHeader, 
  Label, 
  RemoveButton,
  DeleteIcon,
  ContentContainer,
  LabelCard,
  InfoBlock,
  Value,
  TextTitle,
  FormColumn,
  FormRow,
} from './MedicalInformation.styled';

const MedicalInformation = ({ onDataUpdate, medicalData, setMedicalData }) => {

const [medicalRecords, setMedicalRecords] = useState([]);

console.log(medicalData)
  
const [currentMedicalRecord, setCurrentMedicalRecord] = useState({
  doctorName: '',
  healthStatus: '',
  medicalInstitution: '',
  examinationDate: ''
});

const [errors, setErrors] = useState({});
  
const handleMedicalInputChange = (e) => {
  const { name, value } = e.target;
  setMedicalData((prev) => ({
    ...prev,
    [name]: value.trimStart(), 
  }));
};

const handleMedicalInputBlur = (e) => {
  const { name, value } = e.target;
  setMedicalData((prev) => ({
    ...prev,
    [name]: value.trim(), 
  }));
};

  
  const maxLength = 100;

useEffect(() => {
  const formattedData = medicalRecords.map(record => ({
    doctorName: record.doctorName,
    healthStatus: record.healthStatus || '',
    medicalInstitution: record.medicalInstitution || '',
    examinationDate: record.examinationDate || ''
  }));
  
  onDataUpdate(formattedData);
}, [medicalRecords, onDataUpdate]);



const validateMedicalRecord = () => {
  const newErrors = {};

  if (!currentMedicalRecord.doctorName.trim()) {
    newErrors.doctorName = "Ім'я лікаря є обов'язковим";
  }

  if (!currentMedicalRecord.healthStatus.trim()) {
    newErrors.healthStatus = "Статус здоров'я є обов'язковим";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const addMedicalRecord = () => {
  if (validateMedicalRecord()) {
    const newMedicalRecord = {
      ...currentMedicalRecord,
      doctorName: currentMedicalRecord.doctorName.trim(),
      healthStatus: currentMedicalRecord.healthStatus.trim(),
      medicalInstitution: currentMedicalRecord.medicalInstitution.trim(),
      id: Date.now() 
    };

    setMedicalRecords(prev => [...prev, newMedicalRecord]);

    setCurrentMedicalRecord({
      doctorName: '',
      healthStatus: '',
      medicalInstitution: '',
      examinationDate: '' 
    });
    setErrors({});
  }
};

const removeMedicalRecord = (idToRemove) => {
  setMedicalRecords(prev => 
    prev.filter(record => record.id !== idToRemove)
  );
};

const updateCurrentMedicalRecord = (field, value) => {
  setCurrentMedicalRecord(prev => ({
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

const handleDateChange = (isoDate) => {
  updateCurrentMedicalRecord('examinationDate', isoDate);
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
      
      <FormRow>
      <FormColumn>
        <Label htmlFor="input1">Алергії</Label>
        <Input
          type="text"
          name="allergies"
          
          value={medicalData.allergies}
          onChange={handleMedicalInputChange}
          onBlur={handleMedicalInputBlur} 
          placeholder="Введіть алергії спортсмена"
          maxLength={maxLength}
        />
      </FormColumn>
      <FormColumn>
        <Label htmlFor="input2">Захворювання</Label>
        <Input
          type="text"
          name="diseases"
          value={medicalData.diseases}
          onChange={handleMedicalInputChange}
          onBlur={handleMedicalInputBlur}
          placeholder="Введіть захворювання спортсмена"
          maxLength={maxLength}
        />
      </FormColumn>
    </FormRow>

      {medicalRecords.length === 0 ? (
        <EmptyState>Додайте інформацію про медкомісії</EmptyState>
      ) : (
        <ContainerList>
          <MedicalRecordsListContainer>
            <MedicalRecordsList $hasMedicalRecords={medicalRecords.length > 0}>
              {medicalRecords.map((record) => (
                <MedicalRecordItem key={record.id}>
                  <MedicalRecordHeader>
                    <TextTitle>Медкомісія</TextTitle>
                    <RemoveButton
                      onClick={() => removeMedicalRecord(record.id)}
                      aria-label="Видалити запис"
                    >
                      <DeleteIcon />
                    </RemoveButton>
                  </MedicalRecordHeader>
                  
                  <ContentContainer>
                    <InfoBlock>
                      <Value><LabelCard>Лікар: </LabelCard> {record.doctorName}</Value>
                    </InfoBlock>
                    <InfoBlock>
                      <Value><LabelCard>Статус здоров'я: </LabelCard> {record.healthStatus}</Value>
                    </InfoBlock>
                    <InfoBlock>
                      <Value><LabelCard>Медичний заклад: </LabelCard> {record.medicalInstitution.trim() ? record.medicalInstitution : 'Не вказано'}</Value>
                    </InfoBlock>
                    <InfoBlock>
                      <Value><LabelCard>Дата обстеження: </LabelCard> {formatDateForDisplay(record.examinationDate) || 'Не вказано'}</Value>
                    </InfoBlock>
                  </ContentContainer>
                </MedicalRecordItem>
              ))}
            </MedicalRecordsList>
          </MedicalRecordsListContainer>
        </ContainerList>
      )}

      <FormGrid>
        <ColumnGrid>
          <InputGroup>
            <Label>
              Лікар * 
              {errors.doctorName && (
                <ErrorMessage>{errors.doctorName}</ErrorMessage>
              )}
            </Label>
            <Input 
              type="text"
              value={currentMedicalRecord.doctorName}
              onChange={(e) => updateCurrentMedicalRecord('doctorName', e.target.value)}
              placeholder="Введіть ім'я лікаря"
              maxLength={maxLength}
              $error={errors.doctorName}
            />
          </InputGroup>

          <InputGroup>
            <Label>
              Статус здоров'я *
              {errors.healthStatus && (
                <ErrorMessage>{errors.healthStatus}</ErrorMessage>
              )}
            </Label>
            <Input 
              type="text"
              value={currentMedicalRecord.healthStatus}
              onChange={(e) => updateCurrentMedicalRecord('healthStatus', e.target.value)}
              placeholder="Введіть статус здоров'я"
              maxLength={maxLength}
              $error={errors.healthStatus}
            />
          </InputGroup>
        </ColumnGrid>

        <ColumnGrid>
          <InputGroup>
            <Label>
              Медичний заклад
            </Label>
            <Input 
              type="text"
              value={currentMedicalRecord.medicalInstitution}
              onChange={(e) => updateCurrentMedicalRecord('medicalInstitution', e.target.value)}
              placeholder="Введіть назву медичного закладу"
              maxLength={maxLength}
            />
          </InputGroup>

          <DateInputWrapper>
            <DateInputGroup>
              <Label>Дата обстеження</Label>
                <FormDatePicker
                    value={currentMedicalRecord.examinationDate}
                    onChange={handleDateChange}
                  />
            </DateInputGroup>
          </DateInputWrapper>
        </ColumnGrid>
      </FormGrid>

      <ButtonWrapper>
        <AddButton 
          type='button' 
          onClick={addMedicalRecord}
        >
          Додати 
        </AddButton>
      </ButtonWrapper>
    </Container>
  );
};

export default MedicalInformation;