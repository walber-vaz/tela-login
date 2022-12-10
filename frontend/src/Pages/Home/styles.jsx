import styled from 'styled-components';

const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 14.5rem);
  margin: 0 auto;
  padding: 2rem 0;
  width: 1200px;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 5rem);
  }

  @media (max-width: 425px) {
    height: calc(100vh - 4rem);
  }

  @media (max-width: 375px) {
    height: calc(100vh - 3.5rem);
  }
`;

export { Container };
