import styled from 'styled-components';

export const MainContentContainer = styled.main`
  flex: 1;
  margin-left: 2rem;
  margin-bottom: 16px;
  margin-right: 10px;
  margin-top: 12px;
  background-color: ${(p) => p.theme.ContainerBGColor};
  border-radius: 0.5rem;
  overflow: auto;
  @media (max-width: 768px) {
    margin: 10px;
    margin-top: 4px;
    margin-bottom: 8px;
  }
`;
