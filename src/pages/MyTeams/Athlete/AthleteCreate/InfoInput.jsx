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


