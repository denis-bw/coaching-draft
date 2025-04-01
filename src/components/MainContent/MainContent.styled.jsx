import styled from 'styled-components';

export const MainContentContainer = styled.main`
  flex: 1;
  width: 100%;
  margin-top: 12px;
  background-color: ${(p) => p.theme.ContainerBGColor};
  border-radius: 0.5rem;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 200px;
  @media (max-width: 768px) {
    margin-top: 4px;
    margin-bottom: 8px;
  }
`;
