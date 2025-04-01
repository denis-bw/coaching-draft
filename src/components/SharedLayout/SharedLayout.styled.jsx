import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;

`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
   @media (max-width: 768px) {
     padding: 10px;
  }
`;
