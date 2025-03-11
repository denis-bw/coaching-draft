import {
  Label, 
  StyledInput, 
  WrapperInput,
} from './InfoInput.styled'

const InfoInput = ({id, name, placeholder="-", labelText='-', maxLength=0 }) => {
  
return (
    <WrapperInput>
          <Label htmlFor={id}>{labelText}</Label>
          <StyledInput 
            id={id} 
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
          />
    </WrapperInput>
    
  );
};

export default InfoInput;



 {/* <FormRow>
            <FormGroup>
              <WrapperInput>
                <Label htmlFor="fullName">Ім'я спортсмена</Label>
                <Input 
                  id="fullName" 
                  name="fullName"
                  placeholder="Введіть ім'я спортсмена"
                  maxLength={25}
                  minLength={3}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  $isEmpty={!isFocused && fullName === ''} 
                />
              </WrapperInput>
            </FormGroup>

            <FormGroup>
              <WrapperInput>
                <Label htmlFor="sportType">Вид спорту</Label>
                <Input 
                  id="sportType" 
                  name="sportType"
                  placeholder="Введіть вид спорту"
                  maxLength={30}
                />
              </WrapperInput>
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <WrapperInput>
                <Label htmlFor="birthdate">Дата народження</Label>
                <CustomDatePicker 
                  
                />
              </WrapperInput>
            </FormGroup>

            <FormGroup>
              <WrapperInput>
                <Label htmlFor="location">Локація</Label>
                <Input 
                  id="location" 
                  name="location"
                  placeholder="Введіть локацію спортсмена"
                  maxLength={50}
                 
                />
              </WrapperInput>
            </FormGroup>
          </FormRow> */}