  import styled from 'styled-components';
  import { ReactComponent as OriginalChevronIcon } from '../../../../../assets/ChevronDownicon.svg';

export const SectionContainer = styled.div`
  
  margin: 20px 0;
  border: 1.7px solid ${({ theme }) =>theme.greenMain};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.ContainerBGColor}; 
    transition: background-color 0.3s ease;
  ${({ isOpen }) => !isOpen && `
    border-radius: 8px 8px 0 0;
  `}


`;

export const Arrow = styled(OriginalChevronIcon)`
  stroke: ${(p) => p.theme.white};
  width: 24px;
  height: 24px;
  margin-left: auto;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

export const SectionHeader = styled.div`
  background-color: ${({ theme }) => theme.greenMain};
  padding: 8px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  transition: background-color 0.3s ease;
  position: relative;
  cursor: row-resize;
  border-top-left-radius: 6px; 
  border-top-right-radius:6px;
  border: 1.7px solid ${({ theme }) => theme.greenMain};

  &:hover {
    background-color: ${({ theme }) => theme.lightGreen};
    border-color: ${({ theme }) => theme.lightGreen}; 
    ${Arrow} {
      stroke: ${({ theme }) => theme.ContainerBGColor};
    }
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`;

export const SectionContent = styled.div`
  padding: 0 20px;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  transition: 
    max-height ${({ isOpen }) => (isOpen ? '0.8s' : '0.4s')} ease-in-out,
    opacity ${({ isOpen }) => (isOpen ? '0.8s' : '0.4s')} ease-in-out;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.white};
  font-size: 22px; 
  font-weight: 600;
  margin: 0;
  line-height: 1.2; 
  max-height: 22px;  
  overflow: hidden; 
`;
export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HelpTooltipContainer = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;